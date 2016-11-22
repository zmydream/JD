var reTop = document.getElementById("return");
var list = document.getElementById("left_list");
var hight = [2100,2770,3300,3810,4330,4850,5370,5890,6410,6930,0];
var nowHeight = 0;

function Roll() {
	//滚动条距离顶部的距离
	var goTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  nowHeight = goTop;
 
  if(goTop >= 2100) {
  	list.style.display = "block";
    var i = Math.floor((goTop - 2250)/520) ;
    var index;
    // console.log(goTop +'&&' + i );
    if(i >= 0 && i <= 9) {
      $("#left_list li").removeClass('cur');
      $("#left_list li:eq(" + i +")").addClass('cur');

      $("#left_list li").mouseover(function() {
        $(this).addClass('cur');
      }).mouseleave(function() {
        if($(this).index() != i && $(this).index() != index){
       
          $(this).removeClass('cur');
        }
      }).click(function() {
        index = $(this).index();
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
$("#left_list li").click(function() {
  var index = $(this).index();
  if(nowHeight >  hight[index]) {
    ReturnTop(hight[index], "-");//滚动条点击何处返回何处(形成滚动动画)
  } else {
    ReturnTop(hight[index], "+");
  }
});

//改变窗口大小,事件的改变
$(window).resize(function() {
	//获取屏幕宽度
  var width = document.documentElement.clientWidth; 
  if (width <= 1390) {
  	list.style.left="10px";
  }
  else {
  	list.style.left = (width - 1190) / 2 - 75 + "px";
  	// console.log((width - 1190) / 2 - 75);
  }
});

var v = 1, time = null;
function ReturnTop(site,direction) {
  // console.log("site");
	window.scrollTo(0, nowHeight);//滚动条置顶
	time = setTimeout(function() { ReturnTop(site, direction)}, 10);
  if(direction == "-") {
    if (nowHeight <= site) {
      window.scrollTo(0, site);//滚动条置顶
      v = 1;
      clearTimeout(time);//清除延迟消息触发事件
    }
    v++;
    nowHeight -=(50 + v);
  } 
  else if(direction == "+") {
    if (nowHeight >= site) {
      window.scrollTo(0, site);//滚动条置顶
      v = 1;
      clearTimeout(time);//清除延迟消息触发事件
    }
    v++;
    nowHeight +=(50 + v);
  } else {
    alert("参数错误");
  }
}
window.onscroll = Roll;

