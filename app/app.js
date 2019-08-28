var app = angular.module('bpApp', ['ui.router', 'pascalprecht.translate', 'angularUtils.directives.dirPagination']);

app.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "views/home.html",
            controller: "homeController",
            access: {
                requireLogin: false
            },
            access: {
                requiredLogin: false
            }
        })

        .state('sales', {
            url: '/sales',
            templateUrl: "views/sales.html",
            controller: "salesController",
        })

        .state('expenses', {
            url: '/expenses',
            templateUrl: "views/expenses.html",
            controller: "expensesController",
        })

        .state('inventory', {
            url: '/inventory',
            templateUrl: "views/inventory.html",
            controller: "inventoryController",
        })

        .state('invoice', {
            url: '/invoice',
            templateUrl: "views/invoice.html",
            controller: "invoiceController",
        })

        .state('contacts', {
            url: '/contacts',
            templateUrl: "views/contacts.html",
            controller: "contactsController",
        })

        .state('report', {
            url: '/report',
            templateUrl: "views/report.html",
            controller: "reportController",
        })

        .state('plugins', {
            url: '/plugins',
            templateUrl: "views/plugins.html",
            controller: "pluginsController",
        })

        .state('settings', {
            url: '/settings',
            templateUrl: "views/settings.html",
            controller: "settingsController",
//            resolve: {
//                delay: function ($q, $timeout) {
//                    var delay = $q.defer();
//                    $timeout(delay.resolve, 50);
//                    return delay.promise;
//                }
//            }
        })

    $urlRouterProvider.otherwise('/');


    //angular-translate using json files in /languages folder
    $translateProvider
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    })

    $translateProvider.preferredLanguage('en');

});

app.run(run);
run.$inject = ['$rootScope', '$location'];



function run($rootScope) {}
