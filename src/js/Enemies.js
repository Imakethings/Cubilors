/*
 * Enemies.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/**
 * @description - Initialise the enemy object with a empty container of children.
 * @kind - function
 */
Enemies = function()
{
    this.enemies = [];
}

/**
 * @description - Update the location of all the enemies.
 * @argument {element} context - The relevant context element to be written to.
 * @kind - function
 */
Enemies.prototype.update = function(context, plX, plY, plW, plH, bgC)
{
    var self = this;
    var dead = false;
    /* Itterate over all the available enemies and rewrite their position. */
    self.enemies.forEach(function(o, i){
        
        /* Assign a color which matches the object & write it. */
        context.fillStyle = o.color;
        context.fillRect(o.posX, o.posY, o.sizeX, o.sizeY);

        /* Update the position by substracting the speed. 
         * Default to 0 when no speed is found. */
        o.posX -= o.speed || 0;

        /* When the object has COMPLETELY dissapeared, stop tracking it
         * - o.sizeX is to detect the end of the object -- not the start. */
        //BUG: Removes all the elements magically.
        if (o.posX < (0 - o.sizeX))
            self.enemies = self.enemies.splice(i, i)   

        /* When there is collision see if the background color matches
         * The current cube color. If that is NOT the case. You simply died. */
        if (self.collides(o.posX, o.posY, o.sizeX, o.sizeY, plX, plY, plW, plH))
            if (bgC != o.color)
                dead = true;
        });

    /* Return true when the user is dead, that way we know when to restart the game. */
    return true ? dead : false
}

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
}

/**
 * @description - Add a new enemy to the child array.
 * @argument {integer} xx - The position on the X axis.
 * @argument {integer} yy - The position on the Y axis.
 * @argument {integer} [speed] - A value to substract from the xx.
 * @argument {integer} [x] - The height of the element.
 * @argument {integer} [y] - The width of the element.
 * @argument {string} [color] - The color of the element.
 * @argument {string} [uuid] - A unique value to id every element.
 * @kind - function
 */
Enemies.prototype.add = function(xx, yy, speed, x, y, color, uuid)
{   
    speed   = speed || 1;
    uuid    = uuid || (new Date%9e6).toString(36)
    color   = color || Colors.random()
    sizeX   = x || 50 + Math.floor(Math.random() * 50)  
    sizeY   = y || 50 + Math.floor(Math.random() * 50) 
    posX    = xx;
    posY    = yy - (sizeY - 50);
    
    this.enemies.push({
        color: color, 
        speed: speed,
        sizeX: sizeX, 
        sizeY: sizeY, 
        uuid: uuid,
        posX: posX, 
        posY: posY, 
    });
}
