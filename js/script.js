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

// Vertical nav circle color
$(document).on('scroll', function(){
    if($(this).scrollTop() >= $('#section1').position().top){
        console.log('hello');
    }
});

// Features section slide in


// Benefits section slide in

// Scroll bottom function
$.fn.scrollBottom = function(){
    return $(document).height() - this.scrollTop() - this.height;
};

// Arrow fades at top
$(window).scroll(function(){
    // Arrow fades at top
    if($(this).scrollTop() < 100){
        $('.arrow-to-top').fadeOut(300);
    }else{
        $('.arrow-to-top').fadeIn(300);
    }
});

 // Arrow moves up above social media icons at bottom
//$(window).scroll(function(){
//    if($(this).scrollBottom() < 100){
//        $('.arrow-to-top').animate({
//            bottom: '+90'
//        }, 200);
//    }else{
//        $('.arrow-to-top').animate({
//            bottom: '+45'
//        }, 200);
//    }
//});

// Countdown code
// Set date for launch, calculate date now, display countdown