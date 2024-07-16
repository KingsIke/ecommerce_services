const { copyFileSync } = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../package.json');
const destination = path.resolve(__dirname, '../build/package.json');

console.log(`Copying ${source} to ${destination}...`);

copyFileSync(source, destination);

console.log('Copy completed.');
