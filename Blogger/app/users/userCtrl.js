(
    function () {

        function userCtrl($scope, userSvc) {

            userSvc.getUsers()
                .then(function (response) {
                    $scope.users = response.data.users;
                })
                .catch(function (response) {
                    console.log(response);
                });


        }
        angular.module("user")
            .controller("userCtrl", ["$scope", "userSvc", userCtrl]);
    }

)();