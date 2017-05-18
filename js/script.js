// Click and smooth scroll to id
$('a[href^="#"]').on('click', function(event){
    var target = $(this.getAttribute('href'));
    if(target.length){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top 
        }, 2000);
    }
});

// Vertical nav circle colors
var enterColor = '#5d985d',
    exitColor = '#fff';

// Offset to avoid two colors active at once
inView.offset(380);
inView('.section1').on('enter', function(){
    $('#dot1').css('background-color', enterColor);
});
inView('.section1').on('exit', function(){
    $('#dot1').css('background-color', exitColor);
});
inView('.section2').on('enter', function(){
    $('#dot2').css('background-color', enterColor);
});
inView('.section2').on('exit', function(){
    $('#dot2').css('background-color', exitColor);
});
inView('.section3').on('enter', function(){
    $('#dot3').css('background-color', enterColor);
});
inView('.section3').on('exit', function(){
    $('#dot3').css('background-color', exitColor);
});
inView('.section4').on('enter', function(){
    $('#dot4').css('background-color', enterColor);
});
inView('.section4').on('exit', function(){
    $('#dot4').css('background-color', exitColor);
});
inView('.section5').on('enter', function(){
    $('#dot5').css('background-color', enterColor);
});
inView('.section5').on('exit', function(){
    $('#dot5').css('background-color', exitColor);
});    

// Set Features Boolean
var featuresScroll = false;

// Features section slide in from left/right
inView('.section2').on('enter', function(){
    if(featuresScroll === false){
        $('.feature').removeClass('hidden').delay(1000).slideDown(1000);
        featuresScroll = true;
    };
});

// Set Benefits Boolean
var benefitsScroll = false;

// Benefits section fade in
inView('.section3').on('enter', function(){
    if(benefitsScroll === false){
        $('.benefit').removeClass('hidden').delay(1000).fadeIn(1000);
        benefitsScroll = true;
    };
});

// Images fade in


// Arrow fades at top
$(window).scroll(function(){
    if($(this).scrollTop() < 100){
        $('.arrow-to-top').fadeOut(300);
    }else{
        $('.arrow-to-top').fadeIn(300);
    }
});

// Scroll bottom function
$.fn.scrollBottom = function(){
    // console.log($(document).height() - this.scrollTop() - this.height());
    return $(document).height() - this.scrollTop() - this.height();
};

 // Arrow moves up above social media icons at bottom
$(window).scroll(function(){
    if($(this).scrollBottom() < 100){
        //console.log('move up');
        $('.arrow-to-top').stop().animate({
            bottom: '+90'
        }, 100);
    }else{
        //console.log('move down');
        $('.arrow-to-top').stop().animate({
            bottom: '+45'
        }, 100);
    }
});

// Countdown



// Set date for launch, calculate date now, display countdown

// add debounce 

