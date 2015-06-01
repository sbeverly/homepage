'use strict';

angular.module('homepage')
  .controller('PostCtrl', function ($scope, $http, $stateParams) {
  	var self = this

  	self.selectedPost = null;

  	self.loadPost = function() {
  		$http.get("http://localhost:4000/api/blog_posts/" + $stateParams.id).
  			success(function(data) {
  				self.selectedPost = data
  			})
  	}
  });