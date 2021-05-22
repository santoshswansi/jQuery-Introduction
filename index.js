// $(document).ready(function(){  
     // when document is ready
// });

// If we try to load the bootstrap or jQuery file we get the minified version
// of css or JavaScript

/*
    document.querySelector("h1").style.color = "red";  // Using  Vanilla JS 
    $("h1").css("color", "red");             // Using jQuery 
*/

/*

     Getting the css property of an HTML element
    ---------------------------------------------------------------------
     console.log($('element').css('property'));

     Setting the css property of an HTML element
    ---------------------------------------------------------------------
     $('element').css('property', 'value');

*/

// WARNING :
// ---------------------------------------------------------------------
// -> Dont use them because we need to separate our CSS code from JS
// -> To do the same functionalityh we can create CSS class and add those
//    class when we need them 


// Adding CSS class to an HTML element
// ---------------------------------------------------------------------
// $("h1").addClass('big-heading');


/*
     Removing CSS class from an HTML element
    ------------------------------------------------------------------------
     $('element').removeClass('className');

     Adding multiple CSS classes to an HTML element
    ---------------------------------------------------------------------
     $('element').addClass('className1 className2 ...');


     CSS class is present or not
    --------------------------------------------------------------------
     $('element').hasClass('className');  

*/


// Manipulating text of HTML element using jQuery
// --------------------------------------------------------------------

/*
     Changing text
    -------------------------------------
     element.text('new text');

     
     Changing "innerHTML" of an element
    --------------------------------------
     element.html('new HTML'); 


*/



// Manipulating attributes of an HTML element using jQuery
// ----------------------------------------------------------------------
/*
     Get the attribute
    ----------------------------------
    element.attr('attributeName');

    # e.g.
    console.log($("a").attr('href'));     // http:\\google.com


     Set the attribute
    ----------------------------------------------------
    element.attr('attributeName', 'attributeNewValue'); 

    # e.g.
    $("a").attr('href', 'http:\\www.yahoo.com');  // change href to mentioned

*/


// Adding eventListener to an HTML element 
// --------------------------------------------------------------------

/*
    element.click(function(){
        this.css('color', 'purple');
    })

*/

$('h1').click(function(){
    $('h1').css('color', 'purple');
})


// logging the the char pressed in the keyboard
/*
    document).keypress(function(event){
      console.log(event.key);
    ;

    document).keydown(function(event){
      console.log(event.keyCode);
    ;
*/

// change the header to the char pressed
/*
    $(document).keypress(function(){
        $('h1').text(event.key);
    });
*/


// MORE USEFUL METHOD FOR ADDING EVENT LISTENERS
// ---------------------------------------------------------------------
/*
    SYNTAX
   --------
    element.on('event', callback function);

    EXAMPLE
   --------- 
    $('h1').on('mouseover', function(){
        $('h1').css('color', 'purple');
    });
*/


// ADDING & REMOVING ELEMENTS USING JQUERY
// ---------------------------------------------------------------------
/*
     adding methods
    ---------------------
    1.) element.before() 
         -> Add HTML element before the starting tag of the selected
            element

    2.) element.after()
         -> Add HTML element after the ending tag of the selected
            element

    3.) element.append()    
         -> Add HTML element just after the text of the selected
            element

    4.) element.prepend()    
         -> Add HTML element just before the text of the selected
            element

     EXAMPLES
    -------------
        $('h1').before('<button>Click Me!</button>');
        $('h1').after('<button>Click Me!</button>');
        $('h1').append('<button>Click Me!</button>');
        $('h1').prepend('<button>Click Me!</button>');        
*/



// ANIMATIONS USING JQUERY
// -----------------------------------------------------------------------
/*
    METHODS
    -----------
    1.) show()
    2.) hide()
    3.) toggle()
    4.) slideUP()
    5.) slideDown()
    6.) slideToggle()
    7.) fadeIn()
    8.) fadeOut()
    9.) fadeToggle()
    10.) animate({ put CSS property that have a numeric value})


    # Chaining animations
    ----------------------------
    element.slideUp().slideDown().fadeIn().animate();


    # EXAMPLE-1 : show/hide "h1" when we click any 'button' element
    ---------------------------------------------------------------------
     
    $('button').click(function(){
        $('h1').toggle();
    });

*/


$('button').click(function(){
    $('h1').slideUp().slideDown().animate({fontSize: "200%", opacity: "0.2"});
});