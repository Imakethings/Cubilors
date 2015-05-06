/*
 * Warning.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

Warning = {};

/**
 * Detect the current browser and version. 
 * You see, readability is not required -- merely usefull. 
 */
Warning.browser = function(){
    var ua = navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE ',version:(tem[1]||'')};
    } 
        
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/);
        if(tem!==null) {return {name:'Opera', version:tem[1]};}
    }   
    
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!==null) {M.splice(1,1,tem[1]);}
    
    return {
      name: M[0],
      version: M[1],
    };
};

/**
 * Request the browser to be a minimal size.
 * 
 * @argument {number} x - The minimal width on the x axis.
 * @argument {number} y - The minimal height on the y axis.
 */
Warning.size = function(x, y)
{
    /* Set default values for when nothing is passed along. */
    var x = x || 960;
    var y = y || 480;

    /* Validate those values to be bigger than the current size. */
    if (window.innerWidth < x || window.innerHeight < y)
    {
        messg.warning('It is recommended to play on a higher resolution.', 120000);
        return false;
    }
    return true;
};

/**
 * Validate that your browser supports the canvas.getContext.
 */
Warning.canvas = function()
{
    /* Require support of the canvas element. */
    if (!document.createElement('canvas').getContext)
    {
        messg.error('Your browser does not support the canvas element.');
        return false;
    }
    return true;
};
