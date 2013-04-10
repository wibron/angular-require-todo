require.config({
    paths: {
        angular: 'vendor/angular',
        jquery: 'vendor/jquery',
        angularui: 'vendor/angular-ui.min',
        jqueryui: 'vendor/jquery-ui.min'
    },
    priority: [
        'jquery',
        'jqueryui',
        'angular',
        'angularui'
    ],
    shim: {
        angular: {
            exports: 'angular'
        },
        angularui: {
            deps: ['angular']
        }
    }
});

require(['jquery', 'jqueryui'], function($) {
    require(['angular', 'angularui', 'app', 'controllers/todo'], function(angular) {
        // Have control over the bootstrapping of the app, 
        // instead of manually init it with ng-app on <html>
        angular.bootstrap(document, ['todoapp']);
    });
});