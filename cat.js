const fs = require('fs');

module.exports = (fileName) => {
    fs.readFile(`./${fileName}`, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        process.stdout.write('\nprompt > ');
      });
  };