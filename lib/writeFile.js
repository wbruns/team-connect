const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // reject promise if there's an error
            if (err) {
                reject(err);
            }
            // if everything went well
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;