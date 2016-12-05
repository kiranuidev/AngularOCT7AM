(function(){
    function productSvc($http,$q){
        function productMapper(input){
            var output={};
            output.name =input.name;
            output.shortDescription=input.shortDescription?input.shortDescription:input.longDescription;
            output.salePrice =input.salePrice;
            output.thumbnailImage = input.thumbnailImage;
            return output;
        };
       this.searchProducts= function(parameter){
          // var url ="http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=jeans"

           var dfd=$q.defer();
            $http.get('/WM/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query='+parameter)
            .then(function(response){
                 var productArray =[];
                 angular.forEach(response.data.items,function(item){
                     productArray.push(productMapper(item));
                 });

                 console.log(productArray);
                dfd.resolve(productArray);
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