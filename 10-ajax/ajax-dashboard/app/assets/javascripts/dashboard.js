$(document).ready(function () {

  const fetchInfo = function () {
    $.getJSON('/api/info').done(function (info) {
      $('#brother').text( info.brother );
      $('#time').text( info.time );
      $('#uptime').text( info.uptime );
    });
  };

  fetchInfo();
  setInterval(fetchInfo, 2000);

  // const fetchBrother = function () {
  //   $('#brother').load('/api/brother');
  // };
  //
  // fetchBrother(); // Load a brother immediately
  // setInterval(fetchBrother, 3000); // And another every 3 seconds
  //
  // const fetchTime = function () {
  //   $.get('/api/time').done(function (t) {
  //     $('#time').text( t );
  //   });
  // };
  //
  // fetchTime();
  // setInterval(fetchTime, 1000);
  //
  // const fetchUptime = function () {
  //   $.get('/api/uptime').done(function (u) {
  //     $('#uptime').text( u );
  //   });
  // };
  //
  // fetchUptime();
  // setInterval(fetchUptime, 4000);

});
