'use strict';

angular.module('homepage')
  .controller('BlogCtrl', function ($scope, $http) {
  	var self = this

  	self.posts = null;
  	self.selectedPost = null;

  	self.pullBlogPosts = function() {
  		$http.get('http://localhost:4000/api/blog_posts').
  			success(function(data) {
  				self.posts = data
  			})
  	}

  	self.selectPost = function(index) {
  		self.selectedPost = index
  	}

  	self.clearSelectedPost = function() {
  		self.selectedPost = null;
  	}
  });