/*
 * Main.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/* Various 'global' variables to be set. */
var canvas = document.querySelector(".canvas");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var baselineX = canvasWidth / 16;
var baselineY = canvasHeight / 2;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

var Bg = new Background(Colors.red);
var Pl = new Player(Colors.player, baselineX, baselineY, 50, 50);

function main()
{
    /* Create the context variable and assign the 2d platform. */
    var context = canvas.getContext('2d'); 
    
    /* Clean the frame. */
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    /* This will draw the background with specified color. */
    Bg.draw(context, canvasWidth, canvasHeight);
    Pl.draw(context);

    /* Attempt to (re)-load the canvas as many times
     * As your browser/computer can handle. */
    requestAnimationFrame(main)
}

if (Warning.size(720, 480) && Warning.supported())
    main();
