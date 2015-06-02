angular.module('homepage')
  .config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.when('/', '/blog/list');
    // $urlRouterProvider.when('/blog', '/blog/list');
    // $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'navbar@': { templateUrl: 'app/shared/navbar/navbar.html' }
        }
      })

      .state('app.about', {
        url: 'about',
        views: {
          'content@': { templateUrl: 'app/components/about/about.html' }
        }
      })

      .state('app.blog', {
        url: 'blog',
        views: { 
          'content@': { templateUrl: 'app/components/blog/blog.html' }
        }
      })

      .state('app.blog.list', {
        url: '/posts',
        views: {
          'content@app.blog': { templateUrl: 'app/components/blog/blog.list.html' }
        }
      })

      .state('app.blog.post', {
        url: '/posts/:id',
        views: {
          'content@app.blog': { templateUrl: 'app/components/blog/post.html' }
        }
      })

      .state('app.contact', {
        url: '/contact',
        views : {
          'content@': { templateUrl: 'app/components/contact/contact.html' }
        }
      })
  });