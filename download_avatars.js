var request = require('request');
var GITHUBUSER = "Gsync";
var GITHUBTOKEN = "5f04057bd82a2c85e456d988fa5f1222fdcd80bf";
console.log("welcome to the github avatar downloader!");

function getRepoContributors(repoOwner, repoName, cb) {
              // Note 4
var requestURL = 'https://' + GITHUBUSER + ':' + GITHUBTOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);

}

getRepoContributors("jquery", "jquery", function() {
  console.log("Errors:", err);
  console.log("Errors:", result);
});
