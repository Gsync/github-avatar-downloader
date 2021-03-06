var request = require('request');
var fs = require('fs');
var arg1 = process.argv[2]; //variables to take the arguments from terminal
var arg2 = process.argv[3];

//object to take the options including user agent header
var options = {
  url: '',
  method: 'GET',
  headers: {
    'User-Agent': 'Gsync'
  }
}

var GITHUBUSER = "Gsync";
var GITHUBTOKEN = "5f04057bd82a2c85e456d988fa5f1222fdcd80bf";

console.log("welcome to the github avatar downloader!");

function getRepoContributors(repoOwner, repoName, cb) {

  options.url = 'https://' + GITHUBUSER + ':' + GITHUBTOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  request(options, function(err, response, body) {
    var json = JSON.parse(body);
    var avatarArr = [];
    var dir = './avatars';
          if (!fs.existsSync(dir)){ //if directory doesnt exist create one
            fs.mkdirSync(dir);
          }

    json.forEach(function(avatar) {
        downloadImageByURL(avatar.avatar_url, './avatars/' + avatar.login + '.jpg');
    });
  });

}

function downloadImageByURL(url, filePath) {
  //var requestURL = url + "/" + filePath;

  request.get(url)
          .on('error', function(err) {
            throw err;
          })
          .on('response', function(response) {
            console.log('Response Status Code', response.statusMessage);
            console.log('Downloading Image...');
            console.log('Download Complete!');
            console.log(response.headers['content-type']);
          })

          .pipe(fs.createWriteStream(filePath))
          .on('error', function(err) {
            throw err;
          })

}


getRepoContributors(arg1, arg2, function() {
  console.log("Errors:", err);
  console.log("Errors:", result);
});