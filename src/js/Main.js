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

function main()
{   
    /* Clean the frame. */
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    /* This will draw the background with specified color. */
    Bg.draw(context);
    
    /* Update the position of the enemies. 
     * Also pass along the location of the player for collition detection. */
    Ey.update(context, Py.posX, Py.posY, Py.sizeX, Py.sizeY, Bg.color)

    /* Spawn the player on specified context. */
    Py.spawn(context);

    /* Attempt to (re)-load the canvas as many times as your browser can handle. */
    requestAnimationFrame(main)
}

if (Warning.size(720, 480) && Warning.supported())
{
    /* Create the context variable and assign the 2d platform. */
    var context = canvas.getContext('2d'); 

    /* Create a new (B)ack(g)round object and assign: 
     * A default color that represents the background. 
     * The height and width of the canvas being played on. */
    var Bg = new Background(Colors.random(), canvasWidth, canvasHeight);
    
    /* Create a new (P)la(y)er object and assign:
     * A default color that represents the player,
     * The baseline position on both the X & Y axis,
     * The width and height. 
     */
    var Py = new Player("#FFFFFF", baselineX, baselineY, 50, 50);
    
    /* Create a new (E)nem(y) object ans assign:
     */
    var Ey = new Enemies();

    setInterval(function(){
        Ey.add(canvasWidth, baselineY, 1)
    }, 5000);

    main();
}
