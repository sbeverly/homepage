'use strict';

angular.module('homepage')
  .controller('PostCtrl', function ($stateParams, blogService, lodash) {
  	var self = this;

  	self.selectedPost = {};
    self.postIds = [];

    self.loadPosts = function() {
      blogService.postsPromise().then(function() {
        self.selectedPost = blogService.findPost($stateParams.id);
        self.postIds = lodash.pluck(blogService.getPosts(), 'id');
      })
    };

    self.nextPostId = function() {
      var currentPostIndex = lodash.indexOf(self.postIds, self.selectedPost.id);

      if(self.selectedPost.id == lodash.last(self.postIds)) {
        return false
      } else {
        return self.postIds[currentPostIndex + 1]
      }
    };

    self.previousPostId = function() {
      var currentPostIndex = lodash.indexOf(self.postIds, self.selectedPost.id);

      if(self.selectedPost.id == lodash.first(self.postIds)) {
        return false
      } else {
        return self.postIds[currentPostIndex - 1]
      }
    };
  });