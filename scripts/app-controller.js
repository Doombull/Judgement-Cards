angular.module('app', [])
.controller('controller', function ($scope) {

    $scope.flipCard = function($event) {
        console.log(Date.now() + ' Executing flipCard');
    };

    $scope.addDamage = function($event) {
        console.log(Date.now() + ' Executing addDamage');
        $event.stopPropagation();
    };
});