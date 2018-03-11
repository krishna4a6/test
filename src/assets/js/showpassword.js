$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
	
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});


$(document).ready(function(){
    $(".pwd").click(function(){
		$(".reveal").css("display", "block"); 
    });
});


$('.pwd').click(function(event){
    event.stopPropagation();
});