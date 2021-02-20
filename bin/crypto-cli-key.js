const program = require('commander');
const key = require('../commands/key');

program.command('set')
       .description('Set API')
       .action(key.set);
           
program.command('show')
       .description('Show API')
       .action(key.show);

program.command('remove')
       .description('Remove API')
       .action(key.remove);

program.parse(process.argv);