'use strict';

angular.module('homepage')
  .controller('PostCtrl', function ($http, $stateParams, blogService) {
  	var self = this

  	self.selectedPost = null;

    self.loadPost = function() {
      blogService.postsPromise().then(function() {
        var post = blogService.findPost($stateParams.id)
        self.selectedPost = post
      })
    };
  });