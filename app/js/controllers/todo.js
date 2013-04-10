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

            $scope.todos = getTodos();
            todos = $scope.todos;

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

            $scope.remaining = function() {
                var numDone = 0;
                angular.forEach($scope.todos, function(todo) {
                  numDone += !todo.done;
                });
                return numDone;
            };

            $scope.completeAll = function() {
                angular.forEach(todos, function(todo) {
                    todo.done = true;
                })
            };

            $scope.verb = function() {
                return ($scope.remaining() ===  1) ? 'item' : 'items';
            }

        }
    ]);
});