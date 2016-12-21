(function () {
    /*Module Creation*/
    /* Integratre ui.router*/
    angular.module("BlogFace", ["header", "user",
        "ui.router", "product", "register", "login", "lookup",
        'ngTouch', 'ui.grid', "components", "pascalprecht.translate"
    ]);

    /*consuming the module*/
    angular.module("BlogFace")
        .config(["$stateProvider", "$urlRouterProvider", "$translateProvider",
            function ($stateProvider, $urlRouterProvider, $translateProvider) {
                /*Blog View Integration
                   1. Creating the state object
                   2. registering the state object
                   3. Invoking the state
                */
                $translateProvider.translations('de', {
                    "HOME":"Zuhause",
                    "PRODUCT":"PRODUKT",
                    "REGISTER":"Neu registrieren",
                    "LOGIN":"Anmeldung",
                    "USERS":"Benutzer",
                    "CART":"Karte"
                });
                    $translateProvider.translations('en', {
                    "HOME":"Home",
                    "PRODUCT":"Product",
                    "REGISTER":"Register",
                    "LOGIN":"Login",
                    "USERS":"Users",
                    "CART":"Cart"
                });

                var productObj = {
                    templateUrl: "app/products/product.html",
                    controller: "productCtrl",
                    name: "Product"
                };

                var loginObj = {
                    templateUrl: "app/login/login.html",
                    name: "Login",
                    controller: "loginCtrl"
                };
                var registerObj = {
                    templateUrl: "app/register/register.html",
                    name: "register",
                    url: "/register"
                };
                var homeObj = {
                    templateUrl: "app/home/home.html",
                    name: "Home"
                };
                var userObj = {
                    templateUrl: "app/users/user.html",
                    name: "Users",
                    controller: "userCtrl"
                };
                $stateProvider.state("Product", productObj);
                $stateProvider.state("Login", loginObj);
                $stateProvider.state("Register", registerObj);
                $stateProvider.state("Home", homeObj);
                $stateProvider.state("Users", userObj);



                console.log("Blog Face Module");
                 $translateProvider.preferredLanguage('en');
            }])
        .run([function () {
            console.log("Blog Face run function");
        }]);


})();

/*
 config
 run
 controller
 service
 factory
 filter
 directive
 provider
 constant
 value
 component.
 

*/
