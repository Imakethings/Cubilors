/*
 * Warning.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

Warning = {};

Warning.size = function(x, y)
{
    /* Set default values for when nothing is passed along. */
    var x = x || 960;
    var y = y || 480;

    /* Validate those values to be bigger than the current size. */
    if (window.innerWidth < x || window.innerHeight < y)
        return false;
    return true;
}

Warning.supported = function()
{
    /* Require support of the canvas element. */
    if (!document.createElement('canvas').getContext)
        return false;
    return true;
}
