const fs = require('fs');

const readStream = fs.createReadStream('readme3.txt');
const writeStream = fs.createWriteStream('writeme2.txt');
readStream.pipe(writeStream);