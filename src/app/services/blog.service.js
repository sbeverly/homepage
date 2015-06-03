angular.module('homepage')
	.factory('blogService', function($http, $q, lodash) {
		var service = {};

		var _posts = [];

		// call this, then chain other calls to the other methods to ensure posts are loaded.
		service.postsPromise = function() {
			return postsPromise
		};

		service.pullPosts = function() {
			var deferred = $q.defer();

			$http.get('http://localhost:4000/api/blog_posts')
	  			.success(function(data) {
	  				_posts = data
	  				deferred.resolve(_posts);
				})

	  		return deferred.promise;
		};

		service.getPosts = function() {
			return _posts
		};

		service.findPost = function(id) {
			var post = null;

			lodash.find(_posts, function(chr) {
				if(chr.id == id)
					post = chr;
			})

			return post;
		};

		var postsPromise = service.pullPosts();
		return service;
	});