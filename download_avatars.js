var request = require('request');
var fs = require('fs');

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

      json.forEach(function(avatar) {
        downloadImageByURL(avatar.avatar_url, './' + avatar.login + '.jpg');
      });
  })

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

getRepoContributors("jquery", "jquery", function() {
  console.log("Errors:", err);
  console.log("Errors:", result);
});

///downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")
