angular.module('app')
    .controller('TasksController', ['TaskFactory', '$uibModalStack',
        function(TaskFactory, $uibModalStack) {
            var vm = this;

            vm.tasks = {};
            vm.newTask = {
            	title: "",
            	description: "",
            	status: "Open"
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
                location.reload();
	        }

            vm.solveTask = function(id) {
                TaskFactory.updateTask(id, {status:"Done"});
            }

            vm.deleteTask = function(id) {
                TaskFactory.deleteTask(id);
                getTasks();
            }
        }]);