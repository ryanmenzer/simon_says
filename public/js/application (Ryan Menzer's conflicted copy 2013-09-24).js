$(document).ready(function(){
	$("a").click(function(event) {

		$.post('/color', function(data) {
			$("li:nth-of-type("+data.cell+")")
		}, 'json');

	});
});