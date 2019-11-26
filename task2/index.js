const csvToJson = require('csvtojson');
const fs = require('fs');
const util = require('util');
const forEach = require('async-foreach').forEach;
const csvFilePath = __dirname + '/csv/example-csv1.csv';
const txtFilePath = __dirname + '/txt/example-txt1.txt';
const writeFileAsync = util.promisify(fs.writeFile);

const convertedCsvToJson = async (pathToFile) => {
    try {
       return csvToJson().fromFile(pathToFile);
    } catch (err) {
        console.log('Error occurs reading and converting csv! ', err)
    }
};

const convertAndSave = async (pathToFile, savePath) => {
    try {
        const json = await convertedCsvToJson(pathToFile);
        forEach(json, (line) => {
            writeFileAsync(savePath, JSON.stringify(line)+'\n', { flag: 'a+' });
        });
    } catch (err) {
        console.log('Error occurs writing txt file! ', err);
    }
};

convertAndSave(csvFilePath, txtFilePath);