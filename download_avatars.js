var request = require('request');
var fs = require('fs');

var GITHUBUSER = "Gsync";
var GITHUBTOKEN = "5f04057bd82a2c85e456d988fa5f1222fdcd80bf";
console.log("welcome to the github avatar downloader!");

function getRepoContributors(repoOwner, repoName, cb) {

var requestURL = 'https://' + GITHUBUSER + ':' + GITHUBTOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);

request.get(requestURL)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        //response.setHeader("User-Agent", "Gsync");
         console.log('Response Status Code: ', response.statusCode);
         console.log('body:', response);
       })

}

function downloadImageByURL(url, filePath) {
  var requestURL = url + "/" + filePath;

  request.get(requestURL)
          .on('error', function(error) {
            throw err;
          })
          .on('reponse', function(reposne) {
            console.log('Response Status Code', response.statusMessage);
            console.log('Downloading Image...');
            console.log('Download Complete!');
            console.log(response.headers['content-type']);
          })
          .pipe(fs.createWriteStream('./downloadedImage.jpg'))
  console.log(requestURL);

}

getRepoContributors("jquery", "jquery", function() {
  console.log("Errors:", err);
  console.log("Errors:", result);
});

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")
