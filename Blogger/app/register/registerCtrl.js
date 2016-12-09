(function () {

    function registerCtrl(registerSvc,lookupSvc,$scope,lookupFac) {
        var vm=this;
        vm.countries =[];
        vm.userDetails = {};

        vm.register = function () {
            registerSvc.registerUser(this.userDetails)
            .then(function(response){
                  console.log(response);
            })
            .catch(function(response){
                console.log(response);
            })
        };
        
        lookupFac.getCountries()
        .then(function(response){
           vm.countries = response.data.countries;
            console.log(this.countries);
           
        }).catch(function(response){
            console.log(response);
        })
        .finally(function(response){
            console.log(response);
        });
        
    }
    angular.module("register")
        .controller("registerCtrl", ["registerSvc","lookupSvc","$scope","lookupFac",registerCtrl]);

})();
