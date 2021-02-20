const program = require('commander');

program.command('set')
       .description('Set API')
       .action(() => console.log('ello from set'));
           
program.command('show')
       .description('Show API')
       .action(() => console.log('ello from show'));

program.command('remove')
       .description('Remove API')
       .action(() => console.log('ello from remove'));

program.parse(process.argv);