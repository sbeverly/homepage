'use strict';

angular.module('homepage')
  .controller('ProjectsCtrl', function (githubService, lodash) {
  	var self = this;

  	self.myCommits = [];

  	self.projects = [];


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






  	// overview for current projects, can easily move to DB once list starts growing larger.
  	self.projects[0] = {};
  	
  	var homepage = self.projects[0];
  	homepage.title = 'Personal Website and Blog'
  	homepage.tech = ['Ruby on Rails', 'Angular.js', 'Docker', 'AWS']
  	homepage.description = 
  	"I started this project with the intention of Angularizing my old Jekyll blog and create the site that you are reading now.  I wanted to use modern Single Page App (SPA) design along with a Rails backend that would serve as a datastore and allow for more complex functionality going forward.  \n\nI have been tempted by Docker for some time now and during the course of building this site I decided that I was going to really leverage it, which I am glad I did because wow, it is really a development/deployment game changer and managing environments so easy it doesn't feel like it should work.  \n\nI am currently running two Docker containers on an EC2.  One serving the Rails backend using passenger as a process manager, while the second one is running an nginx web server that shoots out this Angular app when you hit the root.  The app then hits the backend for data such as blog posts or external API's, like Github, using Angular services.  The services use Angular's `$q` to provide promises that aid in knowing when to render animations or further process data.  \n\nLastly, I used the `ui-router` to allow for nested views that still generate navigable URL's.  Without `ui-router`'s ability to create unique URL's that reference the applications 'state', i.e. what data is currently visible in a single page application, it would have been much harder to create unique URL's for blog posts which need to be indexable by search engines.  \n\nAdmittedly, the site may be a little over engineered for a blog, but that's what side-projects are for!"

  	self.selectedProject = self.projects[0];

  });
