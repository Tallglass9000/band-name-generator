$(function() {
	$("#submitWords").on("submit", function(e) {
		e.preventDefault();
		var adjective = $("input[name=adjective]").val();
		var adjPost;

		if (adjective) {
			adjPost = {word: adjective};
			$.post("adjective", adjPost, function(response) {
				var adjectiveRes = response.msg;
				var confirm = response.message;
				$("#adjectiveRes").html(confirm);
			});
		}
	});

	$("#name").click(function() {
		$.get("adjective", function(response) {
			var adjective = response.word;
			$("#adjective").text(adjective);
		});

		$.get("verb", function(response) {
			var verb = response.word;
			$("#verb").text(verb);
		});

		$.get("noun", function(response) {
			var noun = response.word;
			$("#noun").text(noun);
		});
	});
	
	$("#adj").on("click", function() {
		console.log("Hi!");
		$.get("http://localhost:3000/adjectives", function(response) {
			$("#ajax-text").html(response);
		});
	});

	$("#verby").on("click", function() {
		console.log("Hello!");
		$.get("http://localhost:3000/verbs", function(response) {
			$("#verbtext").html(response);
		});
	});

	$("#nouny").on("click", function() {
		console.log("Hey!");
		$.get("http://localhost:3000/nouns", function(response) {
			$("#nountext").html(response);
		});
	});
});