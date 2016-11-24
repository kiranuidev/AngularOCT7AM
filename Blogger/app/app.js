(function () {
    /*Module Creation*/
    /* Integratre ui.router*/
    angular.module("BlogFace", ["header", "ui.router", "blog","register"]);

    /*consuming the module*/
    angular.module("BlogFace")
        .config(["$stateProvider", "$urlRouterProvider",
             function ($stateProvider, $urlRouterProvider) {
                /*Blog View Integration
                   1. Creating the state object
                   2. registering the state object
                   3. Invoking the state
                */
                 
                var blogObj = {
                    templateUrl: "app/blog/blog.html",
                    controller: "blogCtrl",
                    name: "Blog"
                };

                var loginObj = {
                    templateUrl: "app/login/login.html",
                    name: "Login"
                };
                var registerObj = {
                    templateUrl: "app/register/register.html",
                    name: "register",
                    url:"/register"
                };
                var homeObj = {
                    templateUrl: "app/home/home.html",
                    name: "Home"
                };
                $stateProvider.state("Blog", blogObj);
                $stateProvider.state("Login", loginObj);
                $stateProvider.state("Register", registerObj);
                $stateProvider.state("Home", homeObj);



                console.log("Blog Face Module");
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
