'use strict';

angular.module('homepage')
  .controller('ProjectsCtrl', function (githubService, lodash) {
  	var self = this;

  	self.myCommits = [];

  	self.loadMyCommits = function() {
  		githubService.myCommitsPromise().then(function() {
  			var events = githubService.getMyCommits();

  			lodash.each(events, function(evnt) {
  				if(evnt.type == 'PushEvent') {
  					lodash.each(evnt.payload.commits, function(cmt) {
	  					var commit = {}

		  				commit.repoName = evnt.repo.name
		  				commit.sha = cmt.sha
		  				commit.repoUrl = evnt.repo.url
		  				commit.createdAt = evnt.created_at
		  				commit.message = cmt.message
		  				commit.url = self.buildHtmlCommitUrl(commit.repoName, commit.sha)
		  				commit.author = cmt.author.name

		  				self.myCommits.push(commit)
  					})
  				}
  			})
  		})
  	};

  	self.buildHtmlCommitUrl = function(repoName, sha) {
  		return 'https://github.com/' + repoName + '/commit/' + sha
  	}
  });
