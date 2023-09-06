import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
        console.log(`Fetching ${argv.url}`);
    }
    ).demandCommand(1, 'You need at least one command before moving on')
    .parse();


