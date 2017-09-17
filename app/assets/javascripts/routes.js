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
                templateUrl: 'quiz/tasks.html',
                controller: 'TasksController as vm'
            })
            .state('home.new_tasks', {
                url: 'new_tasks',
                templateUrl: 'quiz/new_tasks.html',
                controller: 'TasksController as vm'
            });
        $urlRouterProvider.otherwise('index');
    });