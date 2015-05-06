/*
 * Path.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

Hash = {};

Hash.pages = [
    ".color",
];

Hash.active = function(el)
{
    /* Iterate over all the pages. */
    for(var i = 0; i < this.pages.length; i++) 
        for(var j = 0; j < document.querySelector(this.pages[i]).classList.length; j++)
        {
            var current = document.querySelector(this.pages[i]).classList;   
            if (current[j] === "active")
            {
                current.remove("active");
                current.add("passive");
            } 
        }
    try
    {
        document.querySelector(el).classList.remove("passive");
        document.querySelector(el).classList.add("active");
    }  
    catch (TypeError)
    { return null; }
};

Hash.load = function()
{
    switch(window.location.hash)
    {
        case "#color":
            this.active(".color");
        break;

        default: 
        break;
    }
};
