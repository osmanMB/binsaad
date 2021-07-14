
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: 52.46405937114235, lng: -1.8770227594521778 },
      zoom: 17,
    });

    // The marker, positioned at city soft
  const marker = new google.maps.Marker({
    position: { lat: 52.46405937114235, lng: -1.8770227594521778 },
    map: map,
    label: {
        text: "Ben Saad Services",
        color: "#2a324e",
        fontSize: "16px",
        fontWeight: "bold"
      },
    // label: 'Ben Saad Services'
  });
  }

  $('#form').on('submit',function(e){
    e.preventDefault();
var formData = new FormData(this);
   $.ajax({
       type:'POST',
       url: $('#form').attr('action'),
       data:formData,
       cache:false,
       contentType: false,
       processData: false,
       success:function(result){
        $('#notification').show();
if(condition){}
else{}
}
})
});


function GetCookie(name) {
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen) {
	var j=i+alen;
	if (document.cookie.substring(i,j)==arg)
	  return "here";
	i=document.cookie.indexOf(" ",i)+1;
	if (i==0) break;
  }
  return null;
}
function testFirstCookie(){
	var offset = new Date().getTimezoneOffset();
	if ((offset >= -180) && (offset <= 0)) { // European time zones
		var visit=GetCookie("cookieCompliancyAccepted");
		if (visit==null){
		   $("#myCookieConsent").fadeIn(400);	// Show warning
	   } else {
			// Already accepted
	   }		
	}
}
$(document).ready(function(){
    $("#cookieButton").click(function(){
		console.log('Understood');
		var expire=new Date();
		expire=new Date(expire.getTime()+7776000000);
		document.cookie="cookieCompliancyAccepted=here; expires="+expire+";path=/";
        $("#myCookieConsent").hide(400);
    });
	testFirstCookie();
});
// Cookie Compliancy END

// Signup form
$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $('.radio-group .radio').click(function(){
  $(this).parent().find('.radio').removeClass('selected');
  $(this).addClass('selected');
  });
  
  $(".submit").click(function(){
  return false;
  })
  
  });

// nice scroll, keep at bottom
$("body").niceScroll({
    cursorcolor:"#f3763b",
    cursorwidth:"5px",
    horizrailenabled:false,
    cursorborder: "1px solid #f3763b"
  });

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// $('[data-toggle="tooltip"]').tooltip({
//     container: 'body',
//     placement: 'bottom'
//  });