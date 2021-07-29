const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


request(args[0], (error, response, body) => {
  if (error) {console.log('error:', error)}; 
  
  
  if (response && body) {
    fs.writeFile(args[1], body, {encoding: 'utf-8'}, (err) => {
      if(err) {
        return console.log(err);
      }
  
      console.log(`Downlaoded and saved ${body.length} bytes to ./index.html`)
    })
  }
});

module.exports = request;