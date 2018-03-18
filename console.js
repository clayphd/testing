const rl = require('readline');

let read = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'IRC-CLI> '
});

const displayMessage = (message, readline = read) => {
    console.log(`\n${message}`);
    readline.prompt();
};

const lineHandler = (line, readline = read) => {
    if (line.toUpperCase() === 'EXIT') {
        return readline.close();
    };
    console.log(line);
    readline.prompt();
};

const closeHandler = () => {
    console.log('Have a gread day!');
    process.exit(0);
};

const init = (readline = read) => {
    read = readline;
    readline.prompt();
    readline.on('line', lineHandler).on('close', closeHandler);
}

module.exports = {
    init,
    displayMessage
};