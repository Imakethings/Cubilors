/*
 * Player.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/**
 * @description - Initialise the player with various attributes.
 * @argument {string} color - A valid hexidecimal code.
 * @argument {integer} xx - Position on the X axis.
 * @argument {integer} x - Height (size) on the X axis.
 * @argument {integer} yy - Position on the Y axis.
 * @argument {integer} y - Width (size) on the Y axis.
 */
Player = function(color, xx, yy, x, y)
{
    this.color = color;
    this.sizeX = x;
    this.posX = xx;
    this.sizeY = y;
    this.posY = yy;
};

/**
 * @description - Spawn the player on the canvas.
 * @argument {element} ctx - The canvas element to be addressed.
 */
Player.prototype.spawn = function(ctx)
{
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.sizeX, this.sizeY);
};
