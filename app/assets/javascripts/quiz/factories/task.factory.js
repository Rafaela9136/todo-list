angular.module('app')
    .factory('TaskFactory', ['$http', function($http) {
        return {
            getTasks: getTasks,
            createTask: createTask
        };

        function getTasks() {
            return $http.get('/tasks')
                .then(handleResponse)
                .catch(handleError);
        };

        function createTask(task) {
            var req = {
                method: 'POST',
                url: '/tasks',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    task: task
                }
            }
            return $http(req)
                .catch(handleError);
        };

        // Handle $http responses
        function handleResponse(response) {
            return response.data;
        };

        function handleError(error) {
            console.log(error);
        };

    }]);
