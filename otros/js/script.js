/*COLLAPSE CATEGORIAS*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/*TERMINA COLLAPSE DE CATEGORIAS */
//MENU DESPLEGABLE Y LO DE DETALLE DE PRODUCTO

$(document).ready(function () {

    $('#burger').click(function () {
        $('#nava').slideToggle();
        $('#searchform').slideUp();
        $('#mega-menu').slideUp();
    });
    
    $('#search-click').click(function () {
    
        $('#mega-menu').slideUp();
        $('#nava').slideUp();
        $('#searchform').slideToggle();
    });
    
    $('#search-click-list').click(function () {
        $('#mega-menu').slideUp();
        $('#searchform').slideToggle();
    });
    
    $('#mega-menu-btn').click(function () {
        $('#searchform').slideUp();
        $('#mega-menu').slideToggle();
    });
    
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $("#main-image").elevateZoom({
        scrollZoom: true
    });
    
    $('.side-picture').click(function () {
        var showing = $(this).find("img").attr("src");
        $('.side-picture').removeClass('active');
        $(this).addClass('active');
        $('#main-image').fadeOut(function () {
            $(this).attr('src', showing);
            $(this).fadeIn();
            $(this).elevateZoom({
                scrollZoom: true
            });
        });
    
    });
    
    });

//ZIPPER
const flightPath = {
    curviness: -0.5,
    autoRotate: false,
    values: [
        {
            x: (window.innerHeight/102), y: 90
        },
        {
            x: (window.innerHeight/200), y: 200
        },
        {
            x: (window.innerHeight/200), y: 350
        },
        {
            x: (window.innerHeight/200), y: 450
        },
        {
            x: (window.innerHeight/200), y: 550
        },
        {
            x: (window.innerHeight/200), y: 650
        },
        {
            x: (window.innerHeight/200), y: 750
        },
        {
            x: (window.innerHeight/200), y: 850
        },
        {
            x: (window.innerHeight/200), y: 2450
        },

    ]
    }

    const tween = new TimelineLite()

    tween.add(
    TweenLite.to('.paper-plane' , 3, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
    )

    const controller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1500,
    triggerHook: 0
    })

    .setTween(tween)
    .setPin('.animation')
    .addTo(controller)


//TERMINA ZIPPER
function myhref(web) {
    window.location.href = web;
}
/*ANIMACIONES */
$(document).ready(function() {
    ScrollToInit();
    ActiveSectionNavigation();
    InitWaypointAnimations({
        offset: "60%",
        animateClass: "wp-animated",
        animateGroupClass: "wp-animated-group"
    });
    InitCounterWayPointAnimation();
  });
  function ScrollToInit() {
    $(document).on("click", "a[href^='#']", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
  }
  function ActiveSectionNavigation() {
    function getNavItemsMap() {
        const navItemsMap = $("#main-nav").find(".nav-item").map((index, item) => {
            const $item = $(item);
            const name = $item.find(".nav-link").attr("href").substring(1);
            return {
                key: name,
                val: $item
            };
        })
        .toArray()
        .reduce((map, obj) => {
            map[obj.key] = obj.val;
            return map;
        }, {});
  
        return navItemsMap;
    }
    function deactivateCurrentNavItem() {
        $("#main-nav").find(".nav-item.active").removeClass("active");
    }
    const navItemsMap = getNavItemsMap();
    $("section").each((index, element) => {
        const $element = $(element);
        const sectionName = $element.attr("id");
        if(sectionName in navItemsMap) {
            
            $element.waypoint((direction) => {
                if(direction === "down") {
                    deactivateCurrentNavItem();
                    navItemsMap[sectionName].addClass("active");
                }
            },{
                offset: "50%"
            });
            
            $element.waypoint((direction) => {
                if(direction === "up") {
                    deactivateCurrentNavItem();
                    navItemsMap[sectionName].addClass("active");
                }
            },{
                offset: "-20%"
            })
        }
    });
  }
  function InitCounterWayPointAnimation() {
    $('.counter').each(function () {
        var $this = $(this);
        var stop = parseInt($this.text().replace(/,/g, ""));
        $this.text(0);
        $this.waypoint(function (direction) {
            animateNumbers($this, 0, stop);
            this.destroy();
        },{
            triggerOnce: true,
            offset: "80%"
        });
    });  
  }
  function animateNumbers(element, start, stop, commas, duration, ease) {
    var $this = element;
    commas = (commas === undefined) ? true : commas;
    $({value: start}).animate({value: stop}, {
        duration: duration == undefined ? 4000 : duration,
        easing: ease == undefined ? "swing" : ease,
        step: function() {
            $this.text(Math.floor(this.value));
            if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
        },
        complete: function() {
           if (parseInt($this.text()) !== stop) {
               $this.text(stop);
               if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
           }
        }
    });
  }
  /* TERMINA ANIMACIONES */