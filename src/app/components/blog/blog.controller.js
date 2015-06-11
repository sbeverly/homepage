'use strict';

angular.module('homepage')
  .controller('BlogCtrl', function ($http, blogService, $rootScope, lodash) {
  	var self = this;

  	self.posts = null;
  	self.selectedPost = null;

  	self.getPosts = function() {
  	  blogService.postsPromise().then(function() {
        self.posts = blogService.getPosts();
        self.posts = lodash.sortByOrder(self.posts, "created_at", false);
      });
  	};

    // may want to place this in main so that every page starts at the top.
    $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  });