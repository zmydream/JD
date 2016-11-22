$(function() {
	$('#sidebar .toolbar div').mouseover(function(){
		$(this).css({
			'background':'#C81623'
		})
		var i = $(this).index();
		$("#sidebar .toolbar div em:eq("+ i +")").show().css({
			'background':'#C81623'
		}).animate({'width':"62px",'left':'-60px'},10);
	}).mouseleave(function(){
		$(this).css({
			'background':''
	  })
		var i = $(this).index();
		$("#sidebar .toolbar div em:eq("+ i +")").hide().animate({'width':'30px','left':'-30px'},0);
	}).click(function(){
		$("#sidebar").animate({right:'0px'},1000);
	});

  // $('body:not(#sidebar .toolbar div)').click(function() {
  // 	console.log('body');
  //   $("#sidebar").animate({right:'-270px'},1000);
  // });

  $('#sidebar .jdm-toolbar-panel3 h3 span').click(function() {
  	$("#sidebar").animate({right:'-270px'},1000);
  })
  $('#sidebar .head-tip span').click(function() {
  	$("#sidebar .head-tip").hide();
  });

  $('#sidebar .panel-mian .tabnav ul > li').mouseover(function() {
  	var i = $(this).index();
  	$('#sidebar .panel-mian .tabnav ul > li a').css({
  		'color':'#928a8a'
  	})
  	$('#sidebar .panel-mian .tabnav ul > li a:eq('+ i +')').css({
  		'color':'#c81623'
  	})
  	$(this).addClass('cur-tab').siblings().removeClass('cur-tab');
  	$("#sidebar .jd-tbar-content").animate({left: i * -270+'px'},200)
  });
  $('#focus .list .ul > li').mouseover(function() {
  	var index = $(this).index();
  	$('#focus .list .ul0 > li:eq('+ index +')').show().siblings().hide();
  }).mouseleave(function() {
  	$('#focus .list .ul0 > li').hide();
  });
	$('#focus .list .ul0 > li').mouseover(function() { 
		$(this).show();
	}).mouseleave(function() {
		console.log('hide');
		$('#focus .list .ul0 > li').hide();
	})
})