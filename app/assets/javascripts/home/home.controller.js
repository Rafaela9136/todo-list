angular.module('app')
	.controller('HomeController', ['$scope', '$uibModal', 'TaskFactory', function($scope, $uibModal, TaskFactory) {
		var vm = this;

		vm.openDialog = function() {
            $uibModal.open({
                templateUrl: 'task/new.html',
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: 'TasksController as ctrl'
            });
		};

	}]);