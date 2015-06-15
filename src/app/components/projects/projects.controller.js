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
		  				commit.repoUrl = evnt.repo.url
		  				commit.createdAt = evnt.created_at
		  				commit.message = cmt.message
		  				commit.url = cmt.url
		  				commit.author = cmt.author.name

		  				self.myCommits.push(commit)
  					})
  				}
  			})
  		})
  	};
  });
