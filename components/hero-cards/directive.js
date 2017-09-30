angular.module("app").directive("heroCards",  function() {
    return {
        templateUrl : "components/hero-cards/template.html",
        scope: {
            hero: "=",
            items: "=",
            manageItems: "&"
        },
        link : function(scope, element, attrs) {
            scope.hero.reset();

            scope.recordDamage = function($event, increase) {
                $event.stopPropagation();

                if (increase && scope.hero.damage.length < scope.hero.getCurrentMaxHealth())
                    scope.hero.damage.push({});
                else if (!increase && scope.hero.damage.length > 0)
                    scope.hero.damage.splice(0, 1);                    
            };
            
            scope.recordSoul = function($event, increase) {
                $event.stopPropagation();

                if (increase && scope.hero.souls.length < scope.hero.maxSouls)
                    scope.hero.souls.push({});
                else if (!increase && scope.hero.souls.length > 0)
                    scope.hero.souls.splice(0, 1);                    
            };
            
            scope.getDamageMaskPosition = function(mask) {
                var left = mask[0] * 26.2;
                var top = mask[1] * 18.4;

                return 'left:' + left + 'px; top:' + top + 'px';
            };
            
            scope.toggleLevel = function($event, level) {
                if (scope.hero.toggleLevel(level))
                    $event.stopPropagation();
            };
        }
    };
 });