(
    function () {

        function productCtrl($scope, productSvc) {
            productSvc.searchProducts("ipod")
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
        angular.module("product")
            .controller("productCtrl", ["$scope", "productSvc", productCtrl]);
    }

)();