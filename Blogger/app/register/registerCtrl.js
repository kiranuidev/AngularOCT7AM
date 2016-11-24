(function () {

    function registerCtrl() {
        this.countries = [{
                "name": "India",
                "code": "IN"
            },
            {
                "name": "United States",
                "code": "US"
            }];

        this.userDetails = {};

        this.register = function () {
            console.log(this.userDetails);
        }
    }
    angular.module("register")
        .controller("registerCtrl", [registerCtrl]);

})();
