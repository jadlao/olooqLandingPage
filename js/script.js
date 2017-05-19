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
function navDotColor(enterDiv, navDot){
    var enterColor = '#5d985d',
        exitColor = '#fff';
    
    // Offset to avoid two colors active at once
    inView.offset(380);
    inView(enterDiv).on('enter', function(){
        $(navDot).css('background-color', enterColor);
    });
    inView(enterDiv).on('exit', function(){
        $(navDot).css('background-color', exitColor);
    });
};

// Execute function
navDotColor('.section1', '#dot1');
navDotColor('.section2', '#dot2');
navDotColor('.section3', '#dot3');
navDotColor('.section4', '#dot4');
navDotColor('.section5', '#dot5');

// Set Features Boolean
var featuresScroll = false;

// Features section slide in from left/right
inView('.section2').on('enter', function(){
    if(featuresScroll === false){
        $('.left .feature').removeClass('hidden').delay(1000).toggle().toggleClass('animated bounceInLeft');
        $('.right .feature').removeClass('hidden').delay(1000).toggle().toggleClass('animated bounceInRight');
        featuresScroll = true;
    };
});

// Set Benefits Boolean
var benefitsScroll = false;

// Benefits section fade in
inView('.section3').on('enter', function(){
    if(benefitsScroll === false){
        $('.benefit:nth-child(1)').removeClass('hidden').delay(1000).fadeIn(1000);
        $('.benefit:nth-child(2)').removeClass('hidden').delay(1500).fadeIn(1000);
        $('.benefit:nth-child(3)').removeClass('hidden').delay(2000).fadeIn(1000);
        benefitsScroll = true;
    };
});

// Images fade in


// Set signup Boolean
var signupScroll = false;

// Sign up section fade in
inView('.section5').on('enter', function(){
    if(signupScroll === false){
        $('.signupText').removeClass('hidden').delay(1000).fadeIn(1000);
        $('#signupForm').removeClass('hidden').delay(1000).fadeIn(1000);
        signupScroll = true;
    };
});

// Countdown
// Set date for launch
var countdownDate = new Date('Oct 5, 2017 14:00:00').getTime();

var countDown = setInterval(function(){
    // Today's date and time
    var now = new Date().getTime();
    
    // Current countdown time
    var currentTime = countdownDate - now;
    
    // Days, hours, minutes, seconds
    var days = Math.floor(currentTime / (1000 * 60 * 60 * 24) ),
        hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((currentTime % (60 * 1000)) / 1000);
    
    // print countdown on page
    document.getElementById('countdown').innerHTML = days + " days " + hours + "hours " + minutes + "minutes " + seconds + "seconds till launch<br>get notified for launch";
    
    // when countdown is finished, display alternate text
    if(currentTime < 0){
        clearInterval(countDown);
        document.getElementById('countdown').innerHTML = "Welcome to Olooq!";
    }
    
}, 1000);

// Arrow fades at top
$(window).scroll(_.debounce(function(){
    if($(this).scrollTop() < 100){
        $('.arrow-to-top').fadeOut(300);
    }else{
        $('.arrow-to-top').fadeIn(300);
    }
}, 100));

// Scroll bottom function
$.fn.scrollBottom = function(){
    // console.log($(document).height() - this.scrollTop() - this.height());
    return $(document).height() - this.scrollTop() - this.height();
};

// Arrow moves up above social media icons at bottom
$(window).scroll(_.debounce(function(){
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
}, 100));