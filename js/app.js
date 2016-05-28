var app =   angular.module('myApp', []);

app.controller("myCtrl", function ($scope, $log) {
    $scope.name = "Manoj";
    $scope.email = "manoj@gmail.com";
    $log.info("This is test info");
    $log.warn("warning");
    $log.debug("error");
    $log.error("error ayi");
});
app.controller("myNewCtrl", function ($scope) {
    $scope.name = "new controller";    
});