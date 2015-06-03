'use strict';

angular.module('homepage')
  .controller('PostCtrl', function ($scope, $http, $stateParams, blogService) {
  	var self = this

  	self.selectedPost = null;

  	// self.loadPost = function() {
  	// 	$http.get("http://localhost:4000/api/blog_posts/" + $stateParams.id).
  	// 		success(function(data) {
  	// 			self.selectedPost = data
  	// 		})
  	// }

    self.loadPost = function() {
      blogService.postsPromise().then(function() {
        var post = blogService.findPost($stateParams.id)
        console.log(post)
        self.selectedPost = post
      })
    };
  });