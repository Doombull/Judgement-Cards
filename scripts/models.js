//Create a new Opponant
function Hero (name, displayName, maxHealth)
{
	this.name = name;
    this.displayName = displayName;
    this.maxHealth = maxHealth;

    if (name == 'bastian' || name == 'thorgar')
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