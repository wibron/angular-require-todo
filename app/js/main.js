require.config({
    paths: {
        angular: 'vendor/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controllers/todo'], function(angular) {
    angular.bootstrap(document, ['todoapp']);
});