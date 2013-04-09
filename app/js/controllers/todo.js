define(['app'], function(app) {
    return app.controller('TodoCtrl', ['$scope', 
        function TodoCtrl ($scope) {
            $scope.todos = [{title: 'foo'}];
        }
    ]);
});