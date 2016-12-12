//Directive Syntax

(
    function () {

        function nbBrandName() {
            return {
                template: '<a class="navbar-brand" href="#">{{brandName}}</a>'
            };
        }

        function nbHeader(){
            return{
                templateUrl:'app/header/header.html',
                restrict:"A,E,C,M"
            };
        }
        angular.module("components")
            .directive("nbBrandName", [nbBrandName])
            .directive("nbHeader",[nbHeader]);
    }
)();