$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            console.log('Clicked link with hash:', hash); // Log the hash value
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        }
    });

    // Smooth scrolling for navbar brand
    $('a.navbar-brand').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            console.log('Clicked navbar brand with hash:', hash); // Log the hash value
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        }
    });

    // Parallax effect
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        console.log('Scrolled:', scrolled); // Log the scrolled value
        $('.main-bg').css('top', -(scrolled * 0.1) + 'px'); // Adjust the scroll speed of main background
        
        // Adjust the scroll speed of each section background
        $('.section').each(function() {
            const sectionScrolled = $(this).offset().top - $(window).scrollTop();
            $(this).find('.section-bg').css('top', -(sectionScrolled * 0.2) + 'px');
            $(this).find('.content').css('transform', 'translateY(' + -(sectionScrolled * 0.2) + 'px)'); // Adjust the scroll speed of content
        });
    });
});

