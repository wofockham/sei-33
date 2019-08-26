const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

// It is seriously this much trouble
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', function (response) {
  console.log(
    // TODO: rewrite this asynchronously
    chalk.red(
      figlet.textSync(response, {
        font: 'slant',
        verticalLayout: 'default',
        horizontalLayout: 'default'
      })
    )
  );
  rl.close();
});
