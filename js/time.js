var timer = null;
$(function() {
  timer = setInterval(function(){autoplay(2016,11,11)},1000);//setInterval只调用一个函数名，所以用匿名函数把它包起来
	function autoplay(year,month,day) {
		console.log('time');
		var now = new Date(); 
	  var endDate = new Date(year, month-1, day); 
	  var leftTime = endDate.getTime()-now.getTime(); 
	  var leftsecond = parseInt(leftTime/1000); 

	  var day1 = Math.floor(leftsecond/(60*60*24)); 
		var hour = Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute = Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second = Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		document.getElementById("hour").innerHTML = hour;
		document.getElementById("minute").innerHTML = minute;
		document.getElementById("second").innerHTML = second;
	};
})
