/* jshint esversion: 6 */
const fs = require('fs');
if (fs.existsSync('lib')) {
    console.log("Directory already exists");
} else {
    fs.mkdir("lib", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Directory Created');
        }
    });
}
