angular.module('homepage')
	.factory('blogService', function($http, $q) {
		var service = {};

		var _posts = [];

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
			return postsExistPromise
		};

		var postsExistPromise = service.pullPosts();
		return service;
	});