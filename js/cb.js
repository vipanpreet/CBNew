        // Cursor Follow
$(document).on('mousemove', function(e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    // console.log(xPos, yPos);
    $('.pointer').css({
        'top': yPos,
        'left': xPos
    });
    });

$(document).ready(function(){
    // $("body").niceScroll({
    //     scrollspeed: 200, // scrolling speed
    //     mousescrollstep: 60 // scrolling speed with mouse wheel (pixel)
    // });
    vip = new vip({
        offset: 180
    })
    vip.init();
    $(document).ready(function(){       
        var scroll_pos = 0;
        var bodyHeight = window.innerHeight - 120;

            var sectionUs = $('.section-us').offset().top - 120;
            
         
        function navDark() {
            $(".navigation__button").css('background-color', '#363a4b');
            $(".navigation__icon").css('background-color', '#fff');
            $(".navigation__background").css('background', '#363a4b');
            $(".navigation__icon *").css('background-color', '#fff');
            $(".navigation__link ").css('color', '#fff');
            $(".navigation__nav__extras * ").css('color', '#fff');
            $(".navigation__nav--menu").css('color', '#fff');
            $(".header__logo").css('color', '#363a4b'); 
            $(".me-scroll").css('color', '#363a4b'); 
            $(".me-scroll span").css('background', '#363a4b'); 
            $(".logo").css('color', '#363a4b'); 

        }
        function navWhite(){
            $(".navigation__button").css('background-color', '#fff');
            $(".navigation__icon").css('background-color', '#363a4b');
            $(".navigation__background").css('background', '#fff');
            $(".navigation__icon *").css('background-color', '#363a4b');
            $(".navigation__link").css('color', '#363a4b');
            $(".navigation__nav__extras * ").css('color', '#363a4b');
            $(".navigation__nav--menu").css('color', '#363a4b');
            $(".header__logo").css('color', '#fff');            
            $(".me-scroll").css('color', '#fff'); 
            $(".me-scroll span").css('background', '#fff'); 
            $(".logo").css('color', '#fff'); 

        }

        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos >= bodyHeight) {
                navDark();
            }
            if(scroll_pos < bodyHeight) {
                navWhite();
            }
            if(scroll_pos >= sectionUs) {
                navWhite();
            }
        });

        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
      
            if(scroll_pos > 200) {
                $('.logo-text').css({display: 'none'})
                $('.logo-dark').css({display: 'block'})
                $('.logo-white').css({display: 'none'})
            }
            if(scroll_pos < bodyHeight) {
                $('.logo-text').css({display: 'none'})
                $('.logo-dark').css({display: 'none'})
                $('.logo-white').css({display: 'block'})
            }
            if(scroll_pos >= sectionUs) {
                $('.logo-text').css({display: 'none'})
                $('.logo-dark').css({display: 'none'})
                $('.logo-white').css({display: 'block'})
            }
        });
    });

    $(".btn--primary").hover(
        function () {
            $(this).removeClass('btnanimationOut').addClass('btnanimationIn');
        },
        function () {
            $(this).removeClass('btnanimationIn').addClass('btnanimationOut');
        }
    );



});
