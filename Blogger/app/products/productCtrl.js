(
    function () {

        function productCtrl($scope, productSvc,$rootScope) {
            $scope.search=function(){
                  productSvc.searchProducts($scope.searchProduct)
                .then(function (response) {
                    $scope.products = response;
                })
                .catch(function (response) {
                    console.log(response);
                });
            };
            $scope.addProductToCart = function(product){
                product.addedToCart = true;
                $rootScope.$broadcast("PROUDCT-ADDED");
            };
          
        }
        angular.module("product")
            .controller("productCtrl", ["$scope", "productSvc","$rootScope", productCtrl]);
    }

)();