'use strict';

angular.module('homepage').
	directive('about', aboutDirective)

function aboutDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/about/about.html'
	}
}