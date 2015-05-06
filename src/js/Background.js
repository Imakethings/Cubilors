/*
 * Background.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/**
 * @description - Initialise a background object with a default color.
 * @argument {string} color - A hexidecimal code.
 */
Background = function(color, x, y)
{
    this.color = color;
    this.x = x;
    this.y = y;
};

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
    if (color.length === 4 || color.length === 7)
    {    
        this.color = color;    
        return true;
    }
    return false;
};

Background.prototype.draw = function(ctx)
{
    /* Draw the background. */
    if (this.x !== "undefined" && this.y !== "undefined")
    {
        var app = document.querySelector(".app");
        app.style.background = this.color;
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.x, this.y); 
        return true;
    } 
    return false;
};

