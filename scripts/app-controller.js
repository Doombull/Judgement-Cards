app.controller('appController', function ($scope) {
    
    $scope.callHome = function (message) {
        alert(message);
    };

    $scope.heros = {};
    $scope.heros.all = [
        {
            name: 'bastian',
            displayName: 'Bastian Oriel',
            maxHealth: 16
        },
        {
            name: 'brok',
            displayName: 'Brok',
            maxHealth: 20,
            selected: true
        },
        {
            name: 'doenrakkar',
            displayName: 'Doenrakkar',
            maxHealth: 25
        },
        {
            name: 'istariel',
            displayName: 'Istariel',
            maxHealth: 15
        },
        {
            name: 'kruul',
            displayName: 'Kruul',
            maxHealth: 17
        },
        {
            name: 'kvarto',
            displayName: 'Kvarto',
            maxHealth: 19
        },
        {
            name: 'piper',
            displayName: 'Piper',
            maxHealth: 15
        },
        {
            name: 'rakkir',
            displayName: 'Rakkir',
            maxHealth: 18
        },
        {
            name: 'marcus',
            displayName: 'Sir Marcus',
            maxHealth: 19
        },
        {
            name: 'skoll',
            displayName: 'Skoll Bonestorm',
            maxHealth: 27
        },
        {
            name: 'thorgar',
            displayName: 'Thorgar',
            maxHealth: 23
        },
        {
            name: 'thrommel',
            displayName: 'Thrommel Ironbeard',
            maxHealth: 22
        },
        {
            name: 'saiyin',
            displayName: 'Saiyin',
            maxHealth: 15
        },
        {
            name: 'zaron',
            displayName: 'Zaron Bogdan',
            maxHealth: 16
        }
    ];
});