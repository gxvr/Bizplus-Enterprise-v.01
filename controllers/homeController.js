"USE STRICT";
app.controller('homeController', function ($scope) {
    $scope.business = {
        'name': 'Mangi Groceries & Supply',
        'owner': 'Edward Moshi',
        'key': '12300'
    };

    $scope.stats = {
        'sales': '120000',
        'expenses': '321000',
        'balance': '52000',
        'transactions': '1284'
    };


});
