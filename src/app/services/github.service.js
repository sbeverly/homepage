'use strict';

angular.module('homepage')
	.factory('githubService', function($http, $q) {
		var service = {};
		var _myCommits = null;

		service.pullMyEvents = function() {
			var deferred = $q.defer();
			
			$http.get('https://api.github.com/users/sbeverly/events')
	  			.success(function(data) {
	  				_myCommits = data;
	  				console.log(_myCommits)
	  				deferred.resolve(_myCommits);
				});

	  		return deferred.promise;
		};

		service.getMyCommits = function() {
			return _myCommits
		}

		service.myCommitsPromise = function() {
			return myCommitsPromise;
		}

		var myCommitsPromise = service.pullMyEvents();
		return service;
	})
