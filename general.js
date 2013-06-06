// left-menu
google.load("jquery", "1.5.2")
google.setOnLoadCallback (function (){
// kerimine lehekülje algusesse
$("a[href='#content']").click(function(event) {
            if( $.browser.opera){ $('html').animate({scrollTop: $('#content').    offset().top}, 2000);} 
            else
            $('html, body').stop().animate({
             scrollTop: $('#content').offset().top
             }, 2000);   
            event.preventDefault();  
		});

    
// class fixed  lisamine 
var top = $('#menu').offset().top - parseFloat($('#menu').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#menu').addClass('fixed')
    } else {
      // otherwise remove it
      $('#menu').removeClass('fixed');
    }
  });
// menüüst linkimine
   
	   $('ul#menu a').bind('click',function(event){
	   $('ul#menu a').removeClass('blue');
	   var $anchor = $(this).addClass('blue');
	   if( $.browser.opera){ $('html').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1500); event.preventDefault();} else
      $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });

});