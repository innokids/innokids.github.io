/* ==== HELPER FUNCTIONS ==== */

function validatedata($attr, $defaultValue) {
    if ($attr !== undefined) {
        return $attr
    }
    return $defaultValue;
}

function parseBoolean(str, $defaultValue) {
    if (str == 'true') {
        return true;
    }
    return $defaultValue;
    //return /true/i.test(str);
}

jQuery(window).load(function () {
/* ============================= */
/* ==== ANIMATED BACKGROUND ==== */
    jQuery('#parallax .cloud1')
        .parallax({
            decay: 0.5,
            width: 100,
            height: 100,
            yorigin: 0.15,
            xorigin: 0.03,
            yparallax: '20px',
            xparallax: '100px'
        });


    jQuery('#parallax .cloud2')
        .parallax({
            decay: 0.9,
            width: 200,
            height: 50,
            yorigin: 0.08,
            xorigin: 0.9,
            yparallax: '50px',
            xparallax: '50px'
        });

    jQuery('#parallax .cloud3')
        .parallax({
            decay: 0.97,
            width: 600,
            height: 50,
            yorigin: 0.7,
            xorigin: 0,
            yparallax: '50px',
            xparallax: '200px'
        });
    jQuery('#parallax .cloud4')
        .parallax({
            decay: 0.97,
            width: 600,
            height: 50,
            yorigin: 0,
            xorigin: 0.9,
            yparallax: '50px',
            xparallax: '200px'
        });
    jQuery('#parallax .cloud5')
        .parallax({
            decay: 0.70,
            width: 600,
            height: 50,
            yorigin: 0.0,
            xorigin: 0.26,
            yparallax: '10px',
            xparallax: '10px'
        });
    jQuery('#parallax .cloud6')
        .parallax({
            decay: 0.70,
            width: 600,
            height: 50,
            yorigin: 0.52,
            xorigin: 0.95,
            yparallax: '50px',
            xparallax: '100px'
        });

    jQuery("body").mouseenter();

if ((jQuery().flexslider())){
/* ============================ */
/* ==== FLEXSLIDER CONTENT ==== */

jQuery(".flexslider.std-slider .object").each(function (){
    var $this = jQuery(this);
    if($this.hasClass("absolute")){
        $this.css({
            "top": $this.data("top"),
            "bottom": $this.data("bottom"),
            "left": $this.data("left"),
            "right": $this.data("right"),
            "margin-top": $this.data("margin-top"),
            "margin-bottom": $this.data("margin-bottom"),
            "margin-left": $this.data("margin-left"),
            "margin-right": $this.data("margin-right")
        });
    } else {
        $this.css({
            "margin-top": $this.data("top"),
            "margin-bottom": $this.data("bottom"),
            "margin-left": $this.data("left"),
            "margin-right": $this.data("right")
        });
    }
})



/* ==================================== */
/* ==== FLEXSLIDER WITH ANIMATIONS ==== */

if (jQuery(".flexslider.std-slider").length > 0) {

    $('.flexslider.std-slider').each(function () {
        var $this = jQuery(this);
        $this.find(".slides > li .inner").each(function () {
            var $container = jQuery(this);
            $container.css('min-height', $this.attr('data-height') + "px");
        })
        // initialize
        $this.find(".slides > li").each(function () {
            var $slide_item = $(this);
            var bg = validatedata($slide_item.data('bg'), false);
            if (bg) {
                $slide_item.css('background-image', 'url("' + bg + '")');
            }
            $slide_item.css('min-height', $this.attr('data-height') + "px");

            // hide slider content due to fade animation
            //$slide_item.find(".inner").hide();
            /*
             $slide_item.find(".inner [data-fx]").each(function () {
             $(this).removeClass("animated");
             })
             */
            $slide_item.find('.inner').fadeOut("slow");
        })

        var direction = validatedata($this.attr('data-direction'), "horizontal");
        var animation = validatedata($this.attr('data-animation'), "fade");
        var loop = validatedata(parseBoolean($this.attr("data-loop")), false);
        var smooth = validatedata(parseBoolean($this.attr("data-smooth")), false);
        var slideshow = validatedata(parseBoolean($this.attr("data-slideshow")), false);
        var speed = validatedata(parseInt($this.attr('data-speed')), 7000);
        var animspeed = validatedata(parseInt($this.attr("data-animspeed")), 600);
        var controls = validatedata(parseBoolean($this.attr('data-controls')), false);
        var dircontrols = validatedata(parseBoolean($this.attr('data-dircontrols')), false);

        $this.flexslider({
            direction: direction,        //String: Select the sliding direction, "horizontal" or "vertical"
            animation: animation,              //String: Select your animation type, "fade" or "slide"
            animationLoop: loop,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: smooth,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            slideshow: slideshow,                //Boolean: Animate slider automatically
            slideshowSpeed: speed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: animspeed,            //Integer: Set the speed of animations, in milliseconds
            touch: false,

            // Primary Controls
            controlNav: controls,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: dircontrols,             //Boolean: Create navigation for previous/next navigation? (true/false)
            manualControls: ".flex-control-nav li",

            pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            prevText: " ",           //String: Set the text for the "previous" directionNav item
            nextText: " ",
            useCSS: false,

            // Callback API
            start: function () {
                $this.removeClass("loading-slider");

                setTimeout(function () {
                    $this.find(".slides > li.flex-active-slide .inner").fadeIn("slow");
                    $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                        var $content = $(this);
                        setTimeout(function() {
                            $content.addClass($content.data('fx')).addClass("activate");
                        }, $content.data('time'));
                    })
                }, 650);

            },
            before: function () {

                $this.find(".slides > li .inner").fadeOut("slow");
                $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                    var $content = $(this);
                    $content.removeClass($content.data('fx')).removeClass("activate");
                })
            },           //Callback: function(slider) - Fires asynchronously with each slider animation
            after: function () {
                setTimeout(function () {
                    $this.find(".slides > li.flex-active-slide .inner").fadeIn("slow");
                    $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                        var $content = $(this);
                        setTimeout(function() {
                            $content.addClass($content.data('fx')).addClass("activate");
                        }, $content.data('time'));
                    })
                }, 150);
            },            //Callback: function(slider) - Fires after each slider animation completes
            end: function () {
            },              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
            added: function () {
            },            //{NEW} Callback: function(slider) - Fires after a slide is added
            removed: function () {
            }           //{NEW} Callback: function(slider) - Fires after a slide is removed
        });
    });
}
}

/* =================================== */
/* ==== SPRITELY - ANIMATE FOOTER ==== */

if(jQuery().spritely){
    jQuery('#wave1').pan({fps: 60, speed: 0.6, dir: 'left'});
    jQuery('#wave2').pan({fps: 60, speed: 0.4, dir: 'right'});
    jQuery('#wave3').pan({fps: 60, speed: 0.3, dir: 'left'});
}

});


jQuery(document).ready(function() {
    jQuery(".iphone.scrollme").mouseover(function(){
        var $image = jQuery(this).find(".inner img");

        var $distance = $image.height() - $image.parent().height();
        $image.stop().animate({ marginTop: -$distance}, 3000, 'linear');
    }).mouseout(function(){
        var $image = jQuery(this).find(".inner img");
        $image.stop().animate({ marginTop: '0'}, 300);
    });
    jQuery(".ipad.scrollme").mouseover(function(){
        var $image = jQuery(this).find(".inner img");

        var $distance = $image.height() - $image.parent().height();
        $image.stop().animate({ marginTop: -$distance}, 1200, 'linear');
    }).mouseout(function(){
        var $image = jQuery(this).find(".inner img");
        $image.stop().animate({ marginTop: '0'}, 300);
    });
    jQuery(".ibook.scrollme").mouseover(function(){
        var $image = jQuery(this).find(".inner img");

        var $distance = $image.height() - $image.parent().height();
        $image.stop().animate({ marginTop: -$distance}, 900, 'linear');
    }).mouseout(function(){
        var $image = jQuery(this).find(".inner img");
        $image.stop().animate({ marginTop: '0'}, 300);
    });

});
