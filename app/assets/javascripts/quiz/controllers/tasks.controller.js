angular.module('app')
    .controller('TasksController', ['TaskFactory', '$filter', '$timeout',
        function(TaskFactory, $filter, $timeout) {
            var vm = this;

            vm.tasks = {};

            function init() {
            	getTasks();
            }
            init();

            function getTasks() {
	            return fetchTasks()
	                .then(setTasks);
	        }

	        function fetchTasks() {
	            // Fetch task array from DB
	            return TaskFactory.getTasks()
	        }

	        function setTasks(data) {
	            // Set fetched category objects array into vm.tasks
	            console.log(data);
	            return vm.tasks = data;
	        }
        }]);