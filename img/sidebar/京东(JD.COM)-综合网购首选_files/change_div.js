$(function() {
	$(".top_bd .top_bd_two div:first").show();
	// $(".top_bd .top_bd_two li").bind('mouseover', function(e) {
	// })
	var oLi = document.getElementById("top_bd_one").children;
	var oDiv = document.getElementById("top_bd_two").children;
	console.log(oDiv.length+"qqqq");
	for(var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
			for(var j = 0; j < oLi.length; j++) {
				oDiv[j].style.display ="none";
			}
			console.log(this.index);
			$('#top_bd_active').css("transform","translateX("+(75*this.index)+"px)")
			oDiv[this.index].style.display ="block";
		}
	}
})