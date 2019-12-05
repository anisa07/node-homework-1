import csvToJson from 'csvtojson';
import fs from 'fs';

const csvFilePath = __dirname + '/csv/example-csv1.csv';
const txtFilePath = __dirname + '/txt/example-txt1.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

const errorCatcher = (message, e) => {
    console.log(`Error ${message} ${e}`);
};

readStream.on('error', (e) => {errorCatcher('reading file!', e)})
    .pipe(csvToJson())
    .pipe(writeStream).on('error', (e) => {errorCatcher('writing file!', e)});
