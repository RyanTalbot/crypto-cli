const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add coin types (CSV)', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change currency', 'EUR')
    .action(cmd => check.price(cmd));

program.parse(process.argv);
