'use strict';

angular.module('homepage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/blog/list');
    $urlRouterProvider.when('/blog', '/blog/list');
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'navbar@': { templateUrl: 'app/components/navbar/navbar.html' }
        }
      })

      .state('app.about', {
        url: 'about',
        views: {
          'content@': { templateUrl: 'app/about/about.html' }
        }
      })

      .state('app.blog', {
        url: 'blog',
        views: { 
          'content@': { templateUrl: 'app/blog/blog.html' }
        }
      })

      .state('app.blog.list', {
        url: '/posts',
        views: {
          'content@app.blog': { templateUrl: 'app/blog/blog.list.html' }
        }
      })

      .state('app.blog.post', {
        url: '/posts/:id',
        views: {
          'content@app.blog': { templateUrl: 'app/blog/post.html' }
        }
      })

      .state('app.contact', {
        url: '/contact',
        views : {
          'content@': { templateUrl: 'app/contact/contact.html' }
        }
      })
  });