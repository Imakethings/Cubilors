/*
 * Colors.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

Colors = {};

/**
 * @description - Assign all colors to their callnames.
 * @kind - object
 */
Colors.all = {
    orange: '#F39C12',
    green:  '#27AE60',
    blue:   '#2980B9',
    red:    '#C0392B',
}

/**
 * @description - Take a random color from a predefined object of colors.
 * @kind - function
 */
Colors.random = function()
{
    return this.all[Object.keys(this.all)[Math.floor(Math.random() * Object.keys(this.all).length)]]
}
