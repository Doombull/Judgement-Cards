//Create a new Opponant
function Hero (name, displayName, maxHealth, damageMasks, multipleAdvancementPaths)
{
	this.name = name;
    this.displayName = displayName;
    this.maxHealth = maxHealth;
    this.multipleAdvancementPaths = multipleAdvancementPaths;

    this.damageMasks = [ [], [] ];
    this.damageMasks = this.damageMasks.concat(damageMasks);

    if (name == 'bastian' || name == 'skoll')
        this.selected = true;

    this.reset = function() {
        this.damage = [];
        this.defensiveItem = 0;
        this.levels = [true, true, false, false];
        this.maxSouls = 5;
        this.offensiveItem = 0;
        this.souls = [];
    }
    
    this.reset();

    this.getCurrentMaxHealth = function() {
        var currentMaxHealth = this.maxHealth;

        if (this.levels[2]) {            
            var currentMaxHealth = currentMaxHealth + this.damageMasks[2].length;

            if (this.levels[3]) {            
                var currentMaxHealth = currentMaxHealth + this.damageMasks[3].length;
            }
        }

        return currentMaxHealth;
    }

    this.toggleLevel = function(level) {
        //If setting level 3 to true, but level 2 is not true, dont do it
        if (level == 3 && !this.levels[3] && !this.levels[2])
            return false;
        
        //If setting level 2 to false, but level 3 is true, set both 2 and 3 to false
        if (level == 2 && this.levels[2] && this.levels[3])
            this.levels[3] = false;
        
        this.levels[level] = !this.levels[level];
        return true;
    }
}