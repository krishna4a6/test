var fixmeTop = $('#wrapnav').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('#wrapnav').attr("style", "position:fixed;top:0px;left:0px;width:100%;");
		$('#header').attr("style", "padding-bottom:130px;");
		
    } else {
		 $('#wrapnav').removeAttr("style");
		 $('#header').removeAttr("style");
    }
});
	
$('#mywokslide').click(function () {
            $('div[id^=mslide]').hide();
            $('#mslide1').show();
        });
$('#myselfslide').click(function () {
            $('div[id^=mslide]').hide();
            $('#mslide2').show();
        });

$("[id$='circle']").percircle();
	
	$('.mainslider').slick({
  //dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  mobileFirst:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },	
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});		
$(".selLabel").click(function () {
    $('.dropdown-pfl').toggleClass('active');
	$('.dropdown-pfl-list').toggleClass('enab-pf');
	
  });

  $(".dropdown-pfl-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown-pfl').removeClass('active');
	$('.dropdown-pfl-list').removeClass('enab-pf');
    $('.selected-item p span').text($('.selLabel').text());
  });		


	$(".txt4").click(function(e){
			e.stopPropagation();
			$("#feedback-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			
			$("#communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			//	$(this).toggleClass('active').siblings().removeClass('active'); 
			
			
});	

	$(".txt3").click(function(e){
			e.stopPropagation();
			$("#communi-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
			
		});	

	$(".txt1").click(function(e){
			e.stopPropagation();
			$("#information-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
	
		});	
		
	$(".txt2").click(function(e){
			e.stopPropagation();
			$("#measures-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
			

		});		

	$(".txt9").click(function(e){
			e.stopPropagation();
			$("#escalation-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
			

		});	
		
	$(".txt5").click(function(e){
			e.stopPropagation();
			$("#people-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
			

		});	
	$(".txt7").click(function(e){
			e.stopPropagation();
			$("#hardassets-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #softassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
			

		});	
	$(".txt6").click(function(e){
			e.stopPropagation();
			$("#softassets-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #value-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active'); 
		

		});	
	$(".txt8").click(function(e){
			e.stopPropagation();
			$("#value-submenu").fadeToggle( "slow, 1000" ).css("margin-left",$(this).offset().left);
			$("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu").hide();
			$(this).toggleClass('active').siblings().removeClass('active');
		

		});	   
	
$('body').click(function() {
    if (!$(this.target).is('#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu')){
       $("#feedback-submenu, #communi-submenu, #information-submenu, #measures-submenu, #escalation-submenu, #people-submenu, #hardassets-submenu, #softassets-submenu, #value-submenu").hide();
    }
});	


$( ".hact" ).mouseover(function()
        {
           // $(".tree-text").addClass("display-none");
            $("#tree-men").addClass("active");
        });
$( ".hact" ).mouseout(function()
        {
            //$(".tree-text").removeClass("display-none");
            $("#tree-men").removeClass("active");
});
		
$( ".hact2" ).mouseover(function()
        {
           // $(".tree-text2").addClass("display-none");
            $("#tree-men2").addClass("active");
        });
$( ".hact2" ).mouseout(function()
        {
            //$(".tree-text2").removeClass("display-none");
            $("#tree-men2").removeClass("active");
 });
 $( ".hact3" ).mouseover(function()
        {
            //$(".tree-text3").addClass("display-none");
            $("#tree-men3").addClass("active");
        });
$( ".hact3" ).mouseout(function()
        {
            //$(".tree-text3").removeClass("display-none");
            $("#tree-men3").removeClass("active");
});
$( ".hact4" ).mouseover(function()
        {
           // $(".tree-text4").addClass("display-none");
            $("#tree-men4").addClass("active");
        });
$( ".hact4" ).mouseout(function()
        {
           // $(".tree-text4").removeClass("display-none");
            $("#tree-men4").removeClass("active");
 });
  $( ".hact5" ).mouseover(function()
        {
           // $(".tree-text5").addClass("display-none");
            $("#tree-men5").addClass("active");
        });
$( ".hact5" ).mouseout(function()
        {
            //$(".tree-text5").removeClass("display-none");
            $("#tree-men5").removeClass("active");
});
$( ".hact6" ).mouseover(function()
        {
            //$(".tree-text6").addClass("display-none");
            $("#tree-men6").addClass("active");
        });
$( ".hact6" ).mouseout(function()
        {
            //$(".tree-text6").removeClass("display-none");
            $("#tree-men6").removeClass("active");
 });
  $( ".hact7" ).mouseover(function()
        {
           // $(".tree-text7").addClass("display-none");
            $("#tree-men7").addClass("active");
        });
$( ".hact7" ).mouseout(function()
        {
            //$(".tree-text7").removeClass("display-none");
            $("#tree-men7").removeClass("active");
});
$( ".hact8" ).mouseover(function()
        {
            //$(".tree-text8").addClass("display-none");
            $("#tree-men8").addClass("active");
        });
$( ".hact8" ).mouseout(function()
        {
            //$(".tree-text8").removeClass("display-none");
            $("#tree-men8").removeClass("active");
 });
  $( ".hact9" ).mouseover(function()
        {
            //$(".tree-text9").addClass("display-none");
            $("#tree-men9").addClass("active");
        });
$( ".hact9" ).mouseout(function()
        {
            //$(".tree-text9").removeClass("display-none");
            $("#tree-men9").removeClass("active");
});



$(".selLabelpunch").click(function () {
    $('.dropdown-pflpunch').toggleClass('active');
	$('.dropdown-pfl-listpunch').toggleClass('enab-pf');
	
  });

  $(".dropdown-pfl-listpunch li").click(function() {
    $('.selLabelpunch').text($(this).text());
    $('.dropdown-pflpunch').removeClass('active');
	$('.dropdown-pfl-listpunch').removeClass('enab-pf');
    $('.selected-item p span').text($('.selLabelpunch').text());
  });	
  
 	$(".bell1").click(function(){
        $(".bellcontent").slideToggle( "slow" );
    });
	$(".notification-icon").click(function(){
        $(".comment-box").slideToggle( "slow" );
    });


 $('.punch-out-box.dropdown-menu').on('click', function(event){
    //The event won't be propagated to the document NODE and 
    // therefore events delegated to document won't be fired
    event.stopPropagation();
});


var nbOptions = 8;
var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('span,label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
				  
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}


setTimeout(function() { toggleOptions('.selector'); }, 10);


$('.maincommon').mouseover(
  function(){
  	   $('.mainsugg').addClass('mainsuggover');
   }, 
   function() { 
       $('.mainsugg').addClass('mainsuggover');
});
$('.maincommon').mouseout(
  function(){
  	   $('.mainsugg').removeClass('mainsuggover');
   }, 
   function() { 
       $('.mainsugg').removeClass('mainsuggover');
});


 $(window).scroll(function() {
        if ($(document).scrollTop() > 40) {
            $('.logoanima').addClass('logoch');
        }
        else {
            $('.logoanima').removeClass('logoch');
        }
    });

	
	
// Interactiveness now

(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('timer').innerHTML = h + ":" + m + "<span class='sec-timer'>" + s + "</span>";
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();