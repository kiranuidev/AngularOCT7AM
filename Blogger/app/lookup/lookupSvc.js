(function(){
    function lookupSvc($http){
        this.getCountries=function(){
            return $http.get("app/api/countries.json");
        };
        
    }
    angular.module("lookup")
    .service("lookupSvc",["$http",lookupSvc])
    
})();