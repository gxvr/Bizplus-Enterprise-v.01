angular.module('bpApp').config(function ($stateProvider, $urlRouterProvider) {
    //    $locationProvider.html5Mode(true);
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: "views/home.html",
            controller: "homeController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            },
            access: {
                requiredLogin: false
            }
        })

        .state('sales', {
            url: '/sales',
            templateUrl: "views/sales.html",
            controller: "salesController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('expenses', {
            url: '/expenses',
            templateUrl: "views/expenses.html",
            controller: "expensesController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('inventory', {
            url: '/inventory',
            templateUrl: "views/inventory.html",
            controller: "inventoryController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('invoice', {
            url: '/invoice',
            templateUrl: "views/invoice.html",
            controller: "invoiceController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('contacts', {
            url: '/contacts',
            templateUrl: "views/contacts.html",
            controller: "contactsController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('report', {
            url: '/report',
            templateUrl: "views/report.html",
            controller: "reportController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('plugins', {
            url: '/plugins',
            templateUrl: "views/plugins.html",
            controller: "pluginsController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

        .state('settings', {
            url: '/settings',
            templateUrl: "views/settings.html",
            controller: "settingsController",
            resolve: {
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 150);
                    return delay.promise;
                }
            }
        })

    $urlRouterProvider.otherwise('/');

});

app.run(run);
run.$inject = ['$rootScope', '$location'];

function run($rootScope) {}
