/*
 * Main.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/* A lot of assignments straight away, most of these are used everywhere. */
var canvas = document.querySelector(".canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var baselineX = canvasWidth / 16;
var baselineY = canvasHeight / 2;
var ctx = canvas.getContext("2d"); 

/* State if the animation is currently playing. */
var request;
var interval;
var amount;

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

/* Create a new (E)nem(y) object */
var Ey = new Enemies();

var vendors = ["ms", "moz", "webkit", "o"];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) 
{
    window.requestAnimationFrame= window[vendors[x]+"RequestAnimationFrame"];
    window.cancelAnimationFrame = window[vendors[x]+"CancelAnimationFrame"] || 
                                  window[vendors[x]+"CancelRequestAnimationFrame"];
}

function loop()
{
    /* Clean the frame. */
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    /* Will draw the background with specified color. */
    Bg.draw(ctx);   
    
    if (Ey.update(ctx, Py.posX, Py.posY, Py.sizeX, Py.sizeY, Bg.color))
        die();
    
    /* Spawn the player on specified ctx. */
    Py.spawn(ctx);

    request = window.requestAnimationFrame(loop);
}

function start(timeout, amt)
{    
    if(!request) 
        loop();

    if(!interval)
    {
        amount = amt;

        interval = setInterval(function(){
            Ey.add({posx: canvasWidth, posy: baselineY, speed: 5});
            amount -= 1;
            if (amount === 0)
            {
                clearInterval(interval);
                interval = undefined;
            }
        }, timeout);
    }
}

function pause()
{
    if(request)
    {
        window.cancelAnimationFrame(request);
        request = undefined;
    }
}

function stop()
{
    Ey.enemies = [];
}

function die()
{
    alert("You died.");
    stop();
    start();
}

start(2500, 128);
