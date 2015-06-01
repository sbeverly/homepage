'use strict';

angular.module('homepage').
	directive('post', postDirective)

function postDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/blog/post.html'
	}
}