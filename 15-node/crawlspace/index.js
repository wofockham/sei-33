const Crawler = require('crawler');

const isCrawlable = function (url) {
  if (!url) { return false; }
  if (!url.startsWith('http')) { return false; }

  const terribleSites = ['archive.is', 'google.com', 'microsoft.com', 'facebook.com'];
  return ! terribleSites.some( (awfulSite) => url.includes( awfulSite ) );
};

const c = new Crawler({
  rateLimit: 1000,
  callback: function (err, res, done) {

    // Only travesrse HTML sites where Cheerio ($) is a function.
    if (typeof res.$ === 'function') {
      console.log( res.$('title').text() );
      console.log( res.request.uri.href + '\n' );

      const $links = res.$('a');

      $links.each(function () {
        const href = res.$(this).attr('href');

        if (isCrawlable(href)) {
          c.queue( href ); // Recursion.
        }
      });
    }

    done();
  }
});

c.queue( process.argv[2] || 'http://lobste.rs' );
