angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
            })
            .state('home.tasks', {
                url: 'tasks',
                templateUrl: 'quiz/quiz.html',
                controller: 'TasksController as vm'
            });
        $urlRouterProvider.otherwise('tasks');
    });