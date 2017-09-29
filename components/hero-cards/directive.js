angular.module("app").directive("heroCards",  function() {
    return {
        templateUrl : "components/hero-cards/template.html",
        scope: {
            hero: "=",
            items: "=",
            manageItems: "&"
        },
        link : function(scope, element, attrs) {
            scope.hero.damage = [];

            scope.recordDamage = function($event, increase) {
                $event.stopPropagation();

                if (increase && scope.hero.damage.length < scope.hero.maxHealth)
                    scope.hero.damage.push({});
                else if (!increase && scope.hero.damage.length > 0)
                    scope.hero.damage.splice(0, 1);                    
            };
        }
    };
 });