;
(function ($) {
    $(function () {
        
        if ($(window).width() > 767) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop isSticky")),
                $fixedHeader = $('.fixedTop'),
                $headerHeight = $fixedHeader.outerHeight() + 5,
                lastPos = 0;


            $(window).resize(function () {
                if ($(window).width() < 768) {
                    $(".fixedTop").css('display', 'none');
                } else {
                    $(".fixedTop").css('display', 'block');
                }
            });

            $(window).on("scroll", function () {
                var fromTop = $(window).scrollTop();
                if (fromTop > $headerHeight + 15) {
                    $fixedHeader.css({
                        top: 0
                    });
                    
                    if(fromTop < lastPos){
                        $fixedHeader.css('top', '-' +$headerHeight+ 'px');
                    }
                    lastPos = fromTop;
                    
                    
                } else {
                    $fixedHeader.css('top', '-' + $headerHeight + 'px') + 10;
                }
            });

        }
        
        
        
        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.


        if ($('.about').length) {
            $('body').addClass('about-page')
        }

        if ($('.alt-page').length) {
            $('body').addClass('alt-body-page')
        }
        if ($('.alt-home').length) {
            $('body').addClass('alt-home-body')
        }

//        if ($('a.scrolldown').length) {
//            $('a.scrolldown').click(function (e) {
//                e.preventDefault()
//                var id = $(this).attr('href')
//                $('html, body').stop(true, true).animate({
//                    scrollTop: $('#inner-section').offset().top
//                }, 1500);
//
//            })
//        }

        

        if ($(window).width() < 767) {
            //var heroHeight = $(".hero-wrap").outerHeight();
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 1) {
                    $('body').addClass("mobiSticky")
                } else {
                    $('body').removeClass("mobiSticky")
                }
            })
            if($('.alt-page').length){
                $(window).on('scroll', function () {
                    if ($(window).scrollTop() > 1) {
                        $('body').addClass("AltSticky")
                    } else {
                        $('body').removeClass("AltSticky")
                    }
                })
            }
        }

        
        
        
        
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navopen")
        })
        
        


        $(".tab-nav ul li").each(function (i) {
            $('a',this).prepend(i < 9 ? '<span>' + '0' + (i + 1) + '</span>' : '<span>' +(i + 1) +'</span>');
        })

         if ($('.phone').length){
                /*var input = document.querySelector(".phone");
                window.intlTelInput(input,({

                }));*/
                $(".phone").intlTelInput({
                    separateDialCode: true,
                    preferredCountries: [ "ZA"],

                });  
            } 


        if ($(window).width() < 768) {
            if($("#partner-carousel").length){
                $('#partner-carousel').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                });
                
            }
        }


     
        
    $('#tabed > li').eq(0).addClass("active")
    $('.container-tab').hide()
    $('.container-tab').eq(0).show()

    $('#tabed > li').each(function(i){
        $(this).click(function(){

            if( $(this).hasClass("active") ) return false

            else{
                $("#tabed > li.active").removeClass("active")
                $(this).addClass('active')
                 $('.container-tab').hide()
                $('.container-tab').eq(i).show()
            }
        })
    })
        
        
        $('.view-profile').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var title = $(this).parents('.team-info-item').find(" > h4").text(),
                    designation = $(this).parents('.team-info-item').find('> span').text();
                console.log(title, designation);
                $(this).parents('.team-info-item').find('.profile-content > h3').text(title);
                $(this).parents('.team-info-item').find('.profile-content > h4').text(designation);
                $('.modal-content-inner > div').html($(this).parents('.team-info-item').find('.profile-content').clone());
                $('.modal').addClass('show');
            });
        });
       
        $('#modal-close, body').on('click', function(){
            $('.modal').removeClass('show');
        });
       
        $('.modal-content').on('click', function(e){
            e.stopPropagation();
        });
        
        
        
       // This function for scroll from bottom animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function

        
        // $(".acordian-item h3").each(function (i) {
        //     $(this).click(function () {
        //         $(".accordion-content").slideUp()
        //         $(".acordian-item").removeClass("active")

        //         if ($(this).parent().find(".accordion-content:visible").length) {
        //             $(this).parent().find(".accordion-content").slideUp()
        //             $(this).parent().removeClass("active")
        //             $("#feature-row-thum img").hide();
        //         } else {
        //             $(this).parent().find(".accordion-content").slideDown()
        //             $(this).parent().addClass("active");

        //         }


        //         if ($(this).hasClass("active")) return false

        //         else {
        //             $(".acordian-item h3.active").removeClass("active")
        //             $(this).addClass('active')

        //         }

        //     })
        // })
        




    }) // End ready function.









})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"] = jQuery.easing["swing"]; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function (a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function (a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b + c; return -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function (a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b + c; return d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function (a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function (a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c; return -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function (a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c; return d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function (a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function (a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function (a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function (a, b, c, d, e) { return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function (a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function (a, b, c, d, e) { if (b == 0) return c; if (b == e) return c + d; if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c; return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function (a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function (a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c; return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c }, easeOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c }, easeInOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e / 2) == 2) return c + d; if (!g) g = e * .3 * 1.5; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c; return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c }, easeInBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c; return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function (a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function (a, b, c, d, e) { if ((b /= e) < 1 / 2.75) { return d * 7.5625 * b * b + c } else if (b < 2 / 2.75) { return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c } else if (b < 2.5 / 2.75) { return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c } else { return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c } }, easeInOutBounce: function (a, b, c, d, e) { if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c; return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c } })