"USE STRICT";
app.controller("salesController", function ($scope, $location, dbService) {
    $scope.sub = {
        'title': 'Sales Orders'
    }

    $scope.listSales = function () {
        dbService.runAsync("SELECT * FROM sales WHERE active = 1", function (data) {
            $scope.sales = data;
            //COMPUTE Sum
        });

    }

    $scope.save = function () {
        if ($scope.sale.id) {
            //Edit
            var id = $scope.sale.id;
            delete $scope.sale.id;
            delete $scope.sale.$$hashKey;
            dbService.update('sales', $scope.sale, {
                id: id
            });
        } else {
            //Save
            dbService.insert('sales', $scope.sale);
        }
        $scope.sale = {};
        $scope.listSales();
    }


    $scope.delete = function (data) {
        if (confirm("Are you sure you want to delete this sale?")) {
            dbService.update('sales', {
                active: 0
            }, {
                id: data.id
            });
            $scope.listSales();

        }
    }


});
