angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
            })
            .state('home.index', {
                url: 'index',
                templateUrl: 'task/tasks.html',
                controller: 'TasksController as vm'
            });
        $urlRouterProvider.otherwise('index');
    });