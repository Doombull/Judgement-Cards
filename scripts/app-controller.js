angular.module("app").controller('appController', function ($scope) {

    $scope.shouldShowOverlay = function () {
        if ($scope.showEditHeros || $scope.showEditItems)
            return true;

        return false;
    };

    $scope.hideEditScreens = function () {
        $scope.showEditHeros = false;
        $scope.showEditItems = false;
    };

    $scope.showManageItems = function ($event, hero) {
        $event.stopPropagation();
        $scope.showEditItems = true;

        for (var i=0, len=$scope.heros.all.length; i<len; i++) {
            if ($scope.heros.all[i].name == hero.name) {
                $scope.items.hero = i;
            }
        }
    };

    $scope.heros = {};
    $scope.heros.all = [
        new Hero('allandir', 'Allandir', 14, [[[5,1]],[[6,1]]]),
        new Hero('bastian', 'Bastian Oriel', 14, [[[5,1]],[[6,1]]]),
        new Hero('brok', 'Brok', 16, [[[7,1],[8,1]],[[0,2],[1,2]]]),
        new Hero('doenrakkar', 'Doenrakkar', 20, [[[2,2],[3,2]],[[4,2],[5,2],[6,2]]]),
        new Hero('istariel', 'Istariel', 13, [[[4,1]],[[5,1]]]),
        new Hero('kruul', 'Kruul', 15, [[[6,1]],[[7,1]]]),
        new Hero('kvarto', 'Kvarto', 16, [[[7,1],[8,1]],[[0,2]]]),
        new Hero('loribela', 'Loribela Runeflask', 16, [[[7,1]],[[8,1],[0,2]]]),
        new Hero('nephenee', 'Nephenee', 14, [[[5,1]],[[6,1]]]),
        new Hero('piper', 'Piper', 13, [[[4,1]],[[5,1]]]),
        new Hero('rakkir', 'Rakkir', 15, [[[6,1]],[[7,1],[8,1]]]),
        new Hero('marcus', 'Sir Marcus', 16, [[[7,1]],[[8,1],[0,2]]]),
        new Hero('skoll', 'Skoll Bonestorm', 21, [[[3,2],[4,2],[5,2]],[[6,2],[7,2],[8,2]]], true),
        new Hero('thorgar', 'Thorgar', 18, [[[0,2],[1,2]],[[2,2],[3,2],[4,2]]]),
        new Hero('thrommel', 'Thrommel Ironbeard', 18, [[[0,2],[1,2]],[[2,2],[3,2]]]),
        new Hero('saiyin', 'Saiyin', 13, [[[4,1]],[[5,1]]]),
        new Hero('xyvera', 'Xyvera', 16, [[[7,1],[8,1]],[[0,2],[1,2]]]),
        new Hero('zaron', 'Zaron Bogdan', 14, [[[5,1]],[[6,1]]])
    ];
    $scope.heros.monsters = [
        new Hero('ashtooth', 'Ashtooth', 12),
        new Hero('gloom', 'Gloom', 8),
        new Hero('inferno', 'Inferno', 12)
    ];

    $scope.items = {};
    $scope.items.offensive = [
        {
            displayName: 'None',
            cost: 0,
            description: ''
        },
        {
            displayName: 'Armour Shredder',
            cost: 1,
            description: 'Reduce targets RES by 1.'
        },
        {
            displayName: 'Boots of Elvenkind',
            cost: 1,
            description: 'Pathfinder.'
        },
        {
            displayName: 'Boots of Speed',
            cost: 1,
            description: '+1 MOV.'
        },
        {
            displayName: 'Heart Seeker',
            cost: 1,
            description: '+1 RNG.'
        },
        {
            displayName: 'Ring of Power',
            cost: 1,
            description: '+1 MAG.'
        },
        {
            displayName: 'Vorpal Blade',
            cost: 1,
            description: '+1 MEL'
        }
    ];
    $scope.items.defensive = [
        {
            displayName: 'None',
            cost: 0,
            description: ''
        },
        {
            displayName: 'Blood Sucker',
            cost: 1,
            description: 'Leech(1).'
        },
        {
            displayName: 'Boots of Agility',
            cost: 1,
            description: '+1 AGI.'
        },
        {
            displayName: 'Elixir of Life',
            cost: 1,
            description: 'When reduced to 0 health, heal 1. One use only.'
        },
        {
            displayName: 'Gift of the Gods',
            cost: 1,
            description: 'Spend 1 Fate to force opponent to reroll attack or ability.'
        },
        {
            displayName: 'Glyph of Warding',
            cost: 2,
            description: '+1 RES. Cannot be used by Defenders.'
        },
        {
            displayName: 'Healing Surge',
            cost: 2,
            description: 'Spend an action to fully heal self or b2b ally. One use only.'
        },
        {
            displayName: 'Minotaur Essence',
            cost: 1,
            description: 'Regeneration(1).'
        }
    ];
});
