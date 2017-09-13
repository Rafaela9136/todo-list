angular.module('app')
    .controller('TasksController', ['TaskFactory', '$filter', '$timeout',
        function(TaskFactory, $filter, $timeout) {
            var vm = this;

            vm.messages = false
            vm.indexMode = true
            vm.createMode = false
            vm.editMode = false
            vm.quizzAdded = false

            // vm callable functions
            vm.activate = activate;
            vm.addTask = addTask;
            vm.createTask = createTask;
            vm.createQuestion = createQuestion;
            vm.editTask = editTask;
            vm.getCategories = getCategories;
            vm.filterByCategory = filterByCategory;
            vm.setNumQuestions = setNumQuestions;

            // instatiated Functions

            activate();


            //  #######  Defined Methods ####### //


            // *** ON LOAD ***

            function activate() {
                reset();
                getTask();
                getCategories();
            }



            // *** INDEX PAGE DISPLAY ALL QUIZZES ***

            function getTasks() {
                return fetchTasks()
                    .then(setTasks)
            }

            function fetchTaskzes() {
                // Fetch quizzes array from DB
                return TaskFactory.getTasks()
            }

            function setTasks(data) {
                // Set fetched quizzes objects array into vm.quizzes
                vm.tasks = data
                return vm.filteredList = vm.tasks
            }



            // *** GET CATEGORIES **

            function getCategories() {
                return fetchCategories()
                    .then(setCategories)
            }

            function fetchCategories() {
                // Fetch category array from DB
                return CategoriesFactory.getCategories()
            }

            function setCategories(data) {
                // Set fetched category objects array into vm.quizzes
                return vm.categories = data
            }



            // *** CREATE QUIZ ***

            function addTask() {
                // Switch from index mode to create mode
                vm.indexMode = false
                vm.createMode = true
            }

            function createTask() {
                // Create quiz in DB
                return TaskFactory.createTask(vm.newTask)
                    // after creating a quiz get last quiz created
                    .then(getCurrentTask)
            }

            function getCurrentTask() {
                return fetchTaskzes()
                    .then(setCurrentTask)
            }

            function setCurrentTask(data) {
                // Clear vm.newTask
                vm.newTask = {};
                // Switch from create mode to edit mode (add questions)
                vm.createMode = false;
                vm.editMode = true;
                // Return last quiz created
                return vm.currentTask = data[data.length - 1]
            }



            // *** FILTER BY CATEGORY ***

            function filterByCategory() {
                // If category not selected set category name to ''
                if (vm.category === null) {
                  vm.category = { name: ''}
                }
                // Else Filter by category name
                vm.filteredList = $filter('filter')(vm.quizzes, {
                  category: { name: vm.category.name }
                });
            }
        }]);