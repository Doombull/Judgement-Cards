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
        {
            name: 'bastian',
            displayName: 'Bastian Oriel',
            maxHealth: 16,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'brok',
            displayName: 'Brok',
            maxHealth: 20,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'doenrakkar',
            displayName: 'Doenrakkar',
            maxHealth: 25,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'istariel',
            displayName: 'Istariel',
            maxHealth: 15,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'kruul',
            displayName: 'Kruul',
            maxHealth: 17,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'kvarto',
            displayName: 'Kvarto',
            maxHealth: 19,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'piper',
            displayName: 'Piper',
            maxHealth: 15,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'rakkir',
            displayName: 'Rakkir',
            maxHealth: 18,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'marcus',
            displayName: 'Sir Marcus',
            maxHealth: 19,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'skoll',
            displayName: 'Skoll Bonestorm',
            maxHealth: 27,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'thorgar',
            displayName: 'Thorgar',
            maxHealth: 23,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'thrommel',
            displayName: 'Thrommel Ironbeard',
            maxHealth: 22,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'saiyin',
            displayName: 'Saiyin',
            maxHealth: 15,
            offensiveItem: 0,
            defensiveItem: 0
        },
        {
            name: 'zaron',
            displayName: 'Zaron Bogdan',
            maxHealth: 16,
            offensiveItem: 0,
            defensiveItem: 0
        }
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
            displayName: 'Boots of Agility',
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
