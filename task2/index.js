const csvToJson = require('csvtojson');
const fs = require('fs');
const csvFilePath = __dirname + '/csv/example-csv1.csv';
const txtFilePath = __dirname + '/txt/example-txt1.txt';

csvToJson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const json = jsonObj;

        json.forEach(line => {
            fs.writeFile(txtFilePath, JSON.stringify(line)+'\n', { flag: 'a+' }, (err) => {
                if (err) {
                    console.log('Error writing line in txt file. ' + err);
                }
            });
        });
    }).catch(err => {
    console.log('Error occurs reading csv. ', err)
});
