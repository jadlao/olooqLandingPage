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

// Features section slide in


// Benefits section slide in


// Arrow fades at top
$('.arrow-to-top');

// Add arrow move up at bottom


// Countdown code
// Set date for launch, calculate date now, display countdown