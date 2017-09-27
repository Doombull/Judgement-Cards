app.controller('appController', function ($scope) {
    
    $scope.addDamage = function($event, increase) {
        console.log(Date.now() + ' Executing addDamage');
        console.log(Date.now() + (increase ? ' Add damage' : ' Remove damage'));
        $event.stopPropagation();
    };
    
    $scope.callHome = function (message) {
        alert(message);
    };
});