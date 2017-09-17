angular.module('app')
	.controller('HomeController', ['$uibModal', 'TaskFactory', function($uibModal, TaskFactory) {
		var vm = this;

		vm.name = "name";
        
        vm.get = function() {
            console.log("Tá chamando");
            console.log(TaskFactory.getTasks());
        };

		/*vm.newTask = function() {
			console.log("newTask");
			$uibModal.open({
                templateUrl: './quiz/new_task.html',
                backdrop:'static',
                keyboard:false,
                controller: function($scope, $modalInstance) {
                    $scope.cancel = function() {
                        $modalInstance.dismiss('cancel');
                    };
                    $scope.ok = function () {
                      $modalInstance.close();
                    };
                }
           	});
		};*/
	}]);