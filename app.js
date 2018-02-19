(function(){


var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.
    when("/home",{
    	templateUrl: "home.html"
    }).
    otherwise ({
    	redirectTo: "index.html"
    });
});
})();