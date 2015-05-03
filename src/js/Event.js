/*
 * Event.js
 * Copyright (C) 2015 Mirko van der Waal.
 * Distributed under terms of the MIT license.
 */

/* Globally track the keydown events made which will then trigger events. */
window.addEventListener('keydown', function(e){
    
    /* Here the code will be saved which is bound to a visual key. */
    var code = e.which || e.keycode;

    /*
     * A    = 65
     * S    = 83
     * D    = 68
     * F    = 70
     * P    = 80
     * ESC  = 27
     * */

    switch(code)
    {
        /* Default bind to key A */
        case 65:
            Bg.setColor(Colors.all.red)
        break;
        
        /* Default bind to key S */
        case 83:
            Bg.setColor(Colors.all.blue)
        break;
        
        /* Default bind to key D */
        case 68:
            Bg.setColor(Colors.all.green)
        break;

        /* Default bind to key F */
        case 70:
            Bg.setColor(Colors.all.orange)
        break;
    }
});

