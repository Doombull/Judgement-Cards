app.controller('appController', function ($scope) {
    
    $scope.addDamage = function($event) {
        console.log(Date.now() + ' Executing addDamage');
        $event.stopPropagation();
    };
    
    $scope.callHome = function (message) {
        alert(message);
    };
});