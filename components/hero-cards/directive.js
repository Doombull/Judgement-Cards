app.directive("heroCards",  function() {
    return {
        templateUrl : "components/hero-cards/template.html",
        scope: {
            hero: "@",
            recordDamage: "&"
        }
    };
 });