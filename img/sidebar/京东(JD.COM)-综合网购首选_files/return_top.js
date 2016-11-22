var reTop = document.getElementById("return");
var list = document.getElementById("left_list");
var hight = [2100,2770,3300,3810,4330,4850,5370,5890,6410,6930];
var nowHeight = 0;
function Roll() {
	//滚动条距离顶部的距离
	var goTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  nowHeight = goTop;
 
  if(goTop >= 2100) {
  	list.style.display = "block";
    var i = Math.floor((goTop - 2250)/520) ;
    var index;
    console.log(goTop +'&&' + i );
    if(i >= 0 && i <= 9) {
      $("#left_list li").removeClass('cur');
      $("#left_list li:eq(" + i +")").addClass('cur');
      $("#left_list li").mouseover(function() {
        $(this).addClass('cur');
      });
      $("#left_list li").mouseleave(function() {
        if($(this).index() != i && $(this).index() != index)
          $(this).removeClass('cur');
      });
      $("#left_list li").click(function() {
        index = $(this).index();
        window.scroll(0, hight[index],2000);
        $("#left_list li:eq(" + index +")").addClass('cur');
      })
    }
    if(i > 9) { i == 9;} 
  }
  else {
    $("#left_list li:eq(0)").addClass('cur');
  	list.style.display = "none";
   
  }
  
}
//改变窗口大小,事件的改变
$(window).resize(function() {
	//获取屏幕宽度
  var width = document.documentElement.clientWidth; 
  if (width <= 1390) {
  	list.style.left="10px";
  }
  else {
  	list.style.left = (width - 1190) / 2 - 75 + "px";
  	console.log((width - 1190) / 2 - 75);
  }
});

var v = 1;
function ReturnTop(x) {
	window.scrollTo(x, nowHeight);//滚动条置顶
	var time = setTimeout(ReturnTop, 10);
	if (nowHeight <= 0) {
		clearTimeout(time);//清除延迟消息触发事件
	}
	v++;
	nowHeight -=(50 + v);
}
reTop.onclick = function() {
	ReturnTop(0);//滚动条返回顶部函数(形成滚动动画)
}
window.onscroll = Roll;