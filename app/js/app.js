define(['angular'], function(angular) {
    return angular.module('todoapp', ['ui']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', { templateUrl: 'views/mainview.html', controller: 'TodoCtrl' });
    }]);
});