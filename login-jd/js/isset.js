$(document).ready(function () {
	$("#reset").click(function() {
		$("*").removeAttr("style");
	});
	$("input[type=button]").click(function(){
		if($("#isreset").is(":checked")){
			$("#reset").click();
		}
	});
})