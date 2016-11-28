(function () {

    function registerCtrl(registerSvc,lookupSvc) {
        /*this.countries = [{
                "name": "India",
                "code": "IN"
            },
            {
                "name": "United States",
                "code": "US"
            }];
*/
        this.userDetails = {};

        this.register = function () {
            registerSvc.registerUser(this.userDetails);
        };
        
        lookupSvc.getCountries()
        .then(function(response){
           this.countries = response.data.countries;
        }).catch(function(response){
            console.log(response);
        })
        .finally(function(response){
            console.log(response);
        });
        
    }
    angular.module("register")
        .controller("registerCtrl", ["registerSvc","lookupSvc",registerCtrl]);

})();
