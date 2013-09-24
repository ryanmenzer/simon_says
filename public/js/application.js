$(document).ready(function(){
	$("a").click(function(event) {

		$.post('/color', function(data) {
			$("li:nth-of-type("+data.cell+")").css('background-color', data.color);
		}, 'json');

	});
});

// '/color' is where to send the data, function(data) is what I'm sending, and the next line is what to do with the data when I get it back.