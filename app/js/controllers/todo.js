define(['app'], function(app) {
    return app.controller('TodoCtrl', ['$scope', 'filterFilter',
        function TodoCtrl ($scope, filterFilter) {

            var todos;

            var getTodos = function() {
                return JSON.parse(localStorage.getItem('todos') || '[]');
            };

            var setTodos = function(todos) {
                localStorage.setItem('todos', JSON.stringify(todos));
            };

            // Set the $scope's todos to match the data inside localStorage
            $scope.todos = getTodos();
            todos = $scope.todos;

            // Use angular's $watch for easily listen on changes to todos in $scope
            $scope.$watch('todos', function () {
                setTodos(todos);
            }, true);

            $scope.newTodo = function() {
                if ($scope.todoText.length) {
                    todos.push({ title: $scope.todoText, done: false });
                    setTodos(todos);
                    $scope.todoText = '';
                }
            };

            $scope.deleteTodo = function(todo) {
                $scope.todos.splice(todo, 1);
            }

            // A check for counting numbers of completed tasks
            $scope.remaining = function() {
                var numDone = 0;
                angular.forEach($scope.todos, function(todo) {
                  numDone += !todo.done;
                });
                return numDone;
            };

            // Loop through all tasks and mark them as completed
            $scope.completeAll = function() {
                angular.forEach(todos, function(todo) {
                    todo.done = true;
                })
            };

            // Set a custom verb for displaying number of remaining items
            $scope.verb = function() {
                return ($scope.remaining() ===  1) ? 'item' : 'items';
            }

        }
    ]);
});