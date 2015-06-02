'use strict';

angular.module('homepage').
	directive('contact', contactDirective)

function contactDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/contact/contact.html'
	}
}