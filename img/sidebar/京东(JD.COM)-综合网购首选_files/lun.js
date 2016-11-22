var timer = null;
$(function() {
  timer = setInterval(autoplay,3000);
	$("#next").bind('click', function() {
		clearInterval(timer);
	  timer = null;
	  var s = $(".lun_div img").attr("src").slice(9,10);
	  s++;
	  if(s > 6) s = 1;
	  $(".lun_div img").attr("src","img/inner"+ s +".jpg");

    $("#lun_img ul").children("li").removeClass('cur');
    var index = s - 1;
	  $("#lun_img ul li:eq(" + index + ")").addClass('cur');
	  
	});
	$("#lun_img ul li").bind('mouseover',function() {
		clearInterval(timer);
	  timer = null;
	  $("#lun_img ul").children("li").removeClass('cur');
	  $(this).addClass('cur');
	  var index = $(this).val();
	  $(".lun_div img").attr("src","img/inner"+ index +".jpg");
	})
	$("#pre").bind('click', function() {
		clearInterval(timer);
	  timer = null;
	  var s = $(".lun_div img").attr("src").slice(9,10);
	  s--;
	  if(s < 1) s = 6;
	  $(".lun_div img").attr("src","img/inner"+ s +".jpg");

	  $("#lun_img ul").children("li").removeClass('cur');
    var index = s - 1;
	  $("#lun_img ul li:eq(" + index + ")").addClass('cur');
	});
	$("#lun_img").mouseover(function() {
		$("#pre").show();
		$("#next").show();
	});
	$("#lun_img").mouseleave(function() {
		$("#pre").hide();
		$("#next").hide();
	});

	$("#lun_img ul li").mouseleave(function() {
		timer = setInterval(autoplay,2000);
	});
	
	$("#pre").mouseleave(function() {
		timer = setInterval(autoplay,2000);
	});
	$("#next").mouseleave(function() {
		timer = setInterval(autoplay,2000);
	});
	function autoplay() {
	  var s = $(".lun_div img").attr("src").slice(9,10);
	  s++;
	  if(s > 6) s = 1;
	  $(".lun_div img").attr("src","img/inner"+ s +".jpg");
	  var nav = $("#lun_img ul li");
	  for (var i = 0; i < nav.length; i++) {
	  	// console.log(nav.length);
	  	nav[i].removeAttribute("class");
	  	nav[s - 1].setAttribute('class', "cur");
	  }
	};
})