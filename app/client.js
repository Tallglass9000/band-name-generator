$(function() {
	console.log("Hi!");
	$("#adj").on("click", function() {
		$.get("http://localhost:3000/adjective", function(response) {
			$("#ajax-text").html(response);
		});
	});

	$("#verb").on("click", function() {
		console.log("Hello!");
		$.get("http://localhost:3000/verb", function(response) {
			$("#verbtext").html(response);
		});
	});

	$("#noun").on("click", function() {
		console.log("Hey!");
		$.get("http://localhost:3000/noun", function(response) {
			$("#nountext").html(response);
		});
	});
});