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
        angular.bootstrap(document, ['todoapp']);
    });
});