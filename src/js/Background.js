/*
 * Background.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/**
 * @description - Initialise a background object with a default color.
 * @argument {string} color - A hexidecimal code.
 */
Background = function(color)
{
    this.color = color;
}

/**
 * @description - Set a new color for the background object.
 * @argument {string} color - A hexidecimal code.
 * @return - boolean
 */
Background.prototype.setColor = function(color)
{
    /* Require a minimal length of 7 or 4 as those
     * Are valid hexidecimal lengths.
     * I could potentially validate hexidecimal characters
     * As well -- but that seems useless as I wrote the code.
     */ 
    if (color.length == 4 || color.length == 7)
        this.color = color;    
        return true;
    return false
}

/**
 * @description - Obtain the current color of the background object.
 * @return - string
 */
Background.prototype.getColor = function()
{
    return this.color;
}

Background.prototype.draw = function(context, x, y)
{
    x = x || "undefined";
    y = y || "undefined";
    
    /* Draw the background. */
    if (x != "undefined" && y != "undefined")
    {
        context.fillStyle = this.color;
        context.fillRect(0, 0, x, y); 
        return true;
    } 
    return false;
}

