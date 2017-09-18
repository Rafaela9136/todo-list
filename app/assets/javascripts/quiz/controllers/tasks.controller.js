angular.module('app')
    .controller('TasksController', ['TaskFactory', '$filter', '$timeout', '$uibModalStack',
        function(TaskFactory, $filter, $timeout, $uibModalStack) {
            var vm = this;

            vm.algo = "algo";
            vm.tasks = {};
            vm.newTask = {
            	title: "",
            	description: "",
            	status: "open"
            };

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
	            // Set fetched task objects array into vm.tasks
	            return vm.tasks = data;
	        }

            vm.close = function() {
                $uibModalStack.dismissAll();
            }

	        vm.createTask = function() {
	        	TaskFactory.createTask(vm.newTask);
	        	vm.close();
	        }

            vm.solveTask = function(id) {
                console.log("solveTask " + id);
            }

            vm.deleteTask = function(id) {
                console.log("deleteTask " + id);
                TaskFactory.deleteTask(id);
            }
        }]);
