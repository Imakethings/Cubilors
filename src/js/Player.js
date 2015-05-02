/*
 * Player.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

Player = function(color, xx, yy, x, y)
{
    this.color = color;
    this.sizeX = x;
    this.posX = xx;
    this.sizeY = y;
    this.posY = yy;
}

Player.prototype.setAttribute = function(attribute, value)
{
    if (this[attribute] === "undefined")
        this[attribute] = value;
}

Player.prototype.getAttribute = function(attribute)
{
    return this[attribute]
}

Player.prototype.draw = function(context, x, y)
{
    context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.sizeX, this.sizeY)
}
