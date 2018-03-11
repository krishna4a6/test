$(function() {
	
	//middle menu--//
	
	$("div.myoffice").hover(function() {
     $("img", this).attr("src", "images/myoffice2.png");
	}, function() {
     $("img", this).attr("src", "images/myoffice1.png");
	});
	
	$("div.mywork").hover(function() {
     $("img", this).attr("src", "images/mywork2.png");
	}, function() {
     $("img", this).attr("src", "images/mywork1.png");
	});
	
	$("div.myself").hover(function() {
     $("img", this).attr("src", "images/myself2.png"); 
	}, function() {
     $("img", this).attr("src", "images/myself1.png");
	});
	
	$("div.mycompany").hover(function() {
     $("img", this).attr("src", "images/mycompany2.png");
	}, function() {
     $("img", this).attr("src", "images/mycompany1.png");
	});
	
	
//$('div').on('click', function(){
   // $('div.my_active').removeClass('my_active');
  //  $(this).addClass('my_active');
//});
	
		//submenu images--//
	
	$(".dropdown-menu li.new_feedback").hover(function() {
     $("img", this).attr("src", "images/new_feedback2.png");
	}, function() {
     $("img", this).attr("src", "images/new_feedback1.png");
	});
	$(".dropdown-menu li.viewfeedback").hover(function() {
     $("img", this).attr("src", "images/viewfeedback2.png");
	}, function() {
     $("img", this).attr("src", "images/viewfeedback1.png");
	});
	$(".dropdown-menu li.rating ").hover(function() {
     $("img", this).attr("src", "images/rating2.png");
	}, function() {
     $("img", this).attr("src", "images/rating1.png");
	});
	$(".dropdown-menu li.usermanual ").hover(function() {
     $("img", this).attr("src", "images/usermanual2.png");
	}, function() {
     $("img", this).attr("src", "images/usermanual1.png");
	});
	
});

//$(document).ready(function() {//use document not 'document'
 //   $("div.myself img").each(function() {
    //    if ($(this).hasClass('my_active')){
     //     this.src = this.src.replace("images/mycompany2.png", "images/mycompany1.png"); 
    //    }
  //  });
 //   $('.my_active').attr('src','images/myself2.png');
//});


	//myself page above and below links--//
	
	$(document).ready(function () {
        $('.below').hover(function () {
            $(this).addClass('cbp-tm-show cbp-tm-show-below');
        }, function () {
            $(this).removeClass('cbp-tm-show cbp-tm-show-below');
        });
    });
	$(document).ready(function () {
        $('.above').hover(function () {
            $(this).addClass('cbp-tm-show cbp-tm-show-above');
        }, function () {
            $(this).removeClass('cbp-tm-show cbp-tm-show-above');
        });
    });
	
	//menu hover--//
	
	$(document).ready(function () {
        $('.dropdown').hover(function () {
            $(this).addClass('dropdown open');
        }, function () {
            $(this).removeClass('dropdown open');
        });
    });

	
$(function() { 
    $('.nav-list').on('click','.btn-circle', function ( e ) {
        e.preventDefault();
        $(this).parents('.nav-list').find('.active_myself').removeClass('active_myself').end().end().addClass('active_myself');
        $(activeTab).show();	
		$('#active_myself').attr('src','images/myself2.png');
    });	
});

$(function() { 
$("#someone_referred_img").on('click', function() {
   $("#someone_referred").show();
   $("#referred_someone,#none").hide();
});
$("#referred_someone_img").on('click', function() {
   $("#referred_someone").show();
   $("#someone_referred,#none").hide();
});
$("#none_img").on('click', function() {
   $("#none").show();
   $("#someone_referred,#referred_someone").hide();
});

$("#someone_referred_img_r").on('click', function() {
   $("#someone_referred").show();
   $("#referred_someone,#none").hide();
});
$("#referred_someone_img_r").on('click', function() {
   $("#referred_someone").show();
   $("#someone_referred,#none").hide();
});
$("#none_img_r").on('click', function() {
   $("#none").show();
   $("#someone_referred,#referred_someone").hide();
});



$(".AssignedToMe_div").on('click', function() {
   $("#AssignedToMe").show();
   $("#AssignedByMe,#MySelf").hide();
});
$(".AssignedByMe_div").on('click', function() {
   $("#AssignedByMe").show();
   $("#AssignedToMe,#MySelf").hide();
});
$(".MySelf_div").on('click', function() {
   $("#MySelf").show();
   $("#AssignedToMe,#AssignedByMe").hide();
});



});


$(function() { 

$(".login-button").on('click', function() {
   $(".login_step2").show();
   $(".login_step1").hide();
});

});

