'use strict';

angular.module('homepage')
  .controller('BlogCtrl', function ($scope, $http, blogService) {
  	var self = this

  	self.posts = null;
  	self.selectedPost = null;

  	self.getPosts = function() {
  	  blogService.getPosts().then(function (data) {
        self.posts = data
      })
  	}

  	self.selectPost = function(index) {
  		self.selectedPost = index
  	}

  	self.clearSelectedPost = function() {
  		self.selectedPost = null;
  	}

    self.getPosts();
  });