/*
 * Enemies.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/**
 * Initialise the enemy object with a empty container of children.
 * 
 * @kind - function
 */
Enemies = function()
{
    this.enemies = [];
};

/**
 * Update the location of all the enemies.
 * 
 * @argument {element} ctx - The relevant ctx element to be written to.
 * @argument {number} plX - Player X axis coordinate.
 * @argument {number} plY - Player Y axis coordinate.
 * @argument {number} plW - Player width.
 * @argument {number} plH - Player height.
 * @argument {string} bgC - Current background color.
 * @kind - function
 */
Enemies.prototype.update = function(ctx, plX, plY, plW, plH, bgC)
{
    var removed ;
    var dead = false;

    /* Itterate over all the available enemies and rewrite their position. */
    for(var i=0; i<this.enemies.length; i++) 
    {
        var o = this.enemies[i];        
        /* Assign a color which matches the object & write it. */
        ctx.fillStyle = o.color;
        ctx.fillRect(o.posX, o.posY, o.sizeX, o.sizeY);

        /* Update the position by substracting the speed. 
         * Default to 0 when no speed is found. */
        o.posX -= o.speed || 0;

        /* When the object has COMPLETELY dissapeared, assign a removed variable
         * Outside the loop use splice to remove the object from the array.
         * This is done on purpose to prevent a empty frame to be rendered.
         * - o.sizeX is to detect the end of the object -- not the start. */
        if (o.posX < (0 - o.sizeX))
            var removed = i;

        /* When there is collision see if the background color matches
         * The current cube color. If that is NOT the case. You simply died. */
        if (this.collides(o.posX, o.posY, o.sizeX, o.sizeY, plX, plY, plW, plH))
            if (bgC !== o.color)
                dead = true;
    }
    
    /* Remove any object that is out of range of the canvas. */
    if (removed !== undefined)
    {
        this.enemies.splice(removed, 1);
        /* Empty the variable so we can re-use it. */
        removed = undefined;
    }

    /* Return true when the user is dead, that way we know when to restart the game. */
        return true ? dead : false;
};

/**
 * Calculate the collition between two specified objects.
 *
 * @argument {number} x1 - First square X axis coordinate.
 * @argument {number} y1 - First square Y axis coordinate.
 * @argument {number} w1 - First square width.
 * @argument {number} h1 - First square height.
 * @argument {number} x2 - Second square X axis coordinate.
 * @argument {number} y2 - Second square Y axis coordinate.
 * @argument {number} w2 - Second square width.
 * @argument {number} h2 - Second square height.
 * @kind - function
 */
Enemies.prototype.collides = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (w2 !== Infinity && w1 !== Infinity) 
    {
        w2 += x2;
        w1 += x1;
        if (isNaN(w1) || isNaN(w2) || x2 > w1 || x1 > w2) return false;
    }
    
    if (y2 !== Infinity && h1 !== Infinity) 
    {
        h2 += y2;
        h1 += y1;
        if (isNaN(h1) || isNaN(y2) || y2 > h1 || y1 > h2) return false;
    }
    return true;
};

/**
 * Add a new enemy to the child array.
 *
 * @argument {object} argv - Object containing further values.
 * @kind - function
 */
Enemies.prototype.add = function(argv)
{   
    /* Define the max-min size of the squares. */
    var MIN_SIZE = 50;
    var MAX_SIZE = 75;
    
    /* Define default values here.
     * These will be overwritten later when a valid key is found. */
    speed   = 1;
    uuid    = (new Date()%9e6).toString(36);
    color   = Colors.random();
    sizeX   = MIN_SIZE + Math.floor(Math.random() * MAX_SIZE);
    sizeY   = MIN_SIZE + Math.floor(Math.random() * MAX_SIZE);
    posX    = 0;
    posY    = 0 - (sizeY - MIN_SIZE);
 
    for(var arg in argv)
        switch(arg.toString().toLowerCase())
        {
            case "color":
                if (typeof argv[arg] === "string")
                    color = argv[arg];
            break;
            
            case "uuid":
                if (typeof argv[arg] === "string")
                    uuid = argv[arg];
            break;

            case "posx":
                if (typeof argv[arg] === "number")
                    posX = argv[arg];
            break;
            
            case "posy":
                if (typeof argv[arg] === "number")
                    posY = argv[arg] - (sizeY - MIN_SIZE);
            break;
            
            case "sizex":
                if (typeof argv[arg] === "number")
                    sizeX = argv[arg];
            break;

            case "sizey":
                if (typeof argv[arg] === "number")
                    sizeY = argv[arg];
            break;

            case  "speed":
                if (typeof argv[arg] === "number")
                    speed = argv[arg];
            break;
        }
   
    /* Add the enemy finally. */
    this.enemies.push({
        color: color, speed: speed,
        sizeX: sizeX, sizeY: sizeY, 
        posX: posX, posY: posY, 
        uuid: uuid,
    });
};
