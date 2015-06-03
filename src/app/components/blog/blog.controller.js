'use strict';

angular.module('homepage')
  .controller('BlogCtrl', function ($http, blogService) {
  	var self = this;

  	self.posts = null;
  	self.selectedPost = null;

  	self.getPosts = function() {
  	  blogService.postsPromise().then(function() {
        self.posts = blogService.getPosts();
      });
  	};
  });