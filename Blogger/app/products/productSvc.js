(function(){
    function productSvc($http,$q){
       this.searchProducts= function(parameter){
           var url ="http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=jeans"

           var dfd=$q.defer();
            $http.get('/WM')
            .then(function(response){
                console.log(response);
                dfd.resolve(response);
            })
            .catch(function(response){
                console.log(response);
                dfd.reject(response);
            });
           return dfd.promise;
       }
        
    }
    angular.module("product")
    .service("productSvc",["$http","$q",productSvc])
    
})();