app.controller('appController', function ($scope) {

    $scope.flipCard = function($event) {
        console.log(Date.now() + ' Executing flipCard');

        document.querySelector(".card-container").classList.toggle("flipped");
    };

    $scope.addDamage = function($event) {
        console.log(Date.now() + ' Executing addDamage');
        $event.stopPropagation();
    };
});