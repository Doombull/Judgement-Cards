app.controller('appController', function ($scope) {
    
    $scope.callHome = function (message) {
        alert(message);
    };

    $scope.heros = {};
    $scope.heros.all = [
        {
            name: 'Bastian Oriel',
            maxHealth: 16
        },
        {
            name: 'Brok',
            maxHealth: 20,
            selected: true
        },
        {
            name: 'Doenrakkar',
            maxHealth: 25
        },
        {
            name: 'Istariel',
            maxHealth: 15
        },
        {
            name: 'Kruul',
            maxHealth: 17
        },
        {
            name: 'Kvarto',
            maxHealth: 19
        },
        {
            name: 'Piper',
            maxHealth: 15
        },
        {
            name: 'Rakkir',
            maxHealth: 18
        },
        {
            name: 'Sir Marcus',
            maxHealth: 19
        },
        {
            name: 'Skoll Bonestorm',
            maxHealth: 27
        },
        {
            name: 'Thorgar',
            maxHealth: 23
        },
        {
            name: 'Thrommel Ironbeard',
            maxHealth: 22
        },
        {
            name: 'Saiyin',
            maxHealth: 15
        },
        {
            name: 'Zaron Bogdan',
            maxHealth: 16
        }
    ];
});