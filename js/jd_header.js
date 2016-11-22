$(function() {
    $(".fr li").bind('mouseover', function(e) {
      var index = $(this).val();
      if (index == 3|| index == 6||index == 7||index == 8||index == 9) {
      	console.log(index);
        $(this).css({
		  		"background": "#fff",
		  		"border-left":"1px solid #ddd",
		  		"border-right":"1px solid #ddd",
	  		});
		    $("#fr"+index+"_li").show();
		    $(".fr"+index+" i s").css("top", "-14px");	
		    if(index == 6) {
		    	$("#img").css("background", "url(img/jd_phone.png) -1px -26px no-repeat");
		    }        
      }
    });

    $(".fr li").bind('mouseleave', function(e) {
      var index = $(this).val();
      if (index == 3|| index == 6||index == 7||index == 8||index == 9) {
        $(this).css({
		  		"background": "",
		  		"border-left":"0px solid #ddd",
		  		"border-right":"0px solid #ddd",
	  		});
		    $("#fr"+index+"_li").hide();
		    $(".fr"+index+" i s").css("top", "-8px");	
		    if (index == 6) {
      		$("#img").css("background", "url(img/jd_phone.png) -1px -1px no-repeat");
      	}
      }
    });

  	$(".fr0").mouseover(function(){
  		$(this).css({
  			"background": "#fff",
  			"border-left":"1px solid #ddd",
  			"border-right":"1px solid #ddd",
  		});
      $("#fr0_li").show();
      $(".fr0 i s").css("top", "-14px");
	  });
	  $(".fr0").mouseleave(function(){
	  	$(this).css({
  			"background": "",
  			"border-left":"0px solid #ddd",
  			"border-right":"0px solid #ddd",
  		});
      $("#fr0_li").hide();
      $(".fr0 i s").css("top", "-8px");
	  });

	  $(".clear").bind('click', function(e) {
	  	$("#top_img").hide();
	  })
	  $(".logo_shop").bind('mouseover', function(e) {
	  	$(".shop_div").show();
	  	$(this).css({
	  		'background':"#FFF",
	  		'border-bottom':"0px"
	  	});
	  });
	  $(".logo_shop").bind('mouseleave', function(e) {
	  	$(".shop_div").hide();
	  	$(this).css({
	  		'background':"",
	  		'border-bottom':"1px solid #ddd"
	  	});
	  })
  });

  $("#grid_more_inner .grid_more_list li").bind('mouseover',function(e) {
  	var index = $(this).index();
  	$('#grid_more_inner .more_info p:eq('+ index * 2 +')').addClass('curclass').siblings().removeClass("curclass")
  })
  $("#grid_more_inner .grid_more_list li").bind('mouseleave',function(e) {
  	var index = $(this).index();
  	$('#grid_more_inner .more_info p:eq('+ index * 2 +')').removeClass("curclass")
  })