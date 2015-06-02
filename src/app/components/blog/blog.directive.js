'use strict';

angular.module('homepage').
	directive('blog', blogDirective)

function blogDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/blog/blog.html'
	}
}