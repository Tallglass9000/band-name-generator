"use strict";

$(function() {
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

  $("#storedName").click(function() {
    $.get("storedName", function(response) {
      var storedName = response.word;
      $("#storedNameRes").text(storedName);
    });
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();
    var adjective = $("input[name=adjective]").val();
    var verb = $("input[name=verb]").val();
    var noun = $("input[name=noun]").val();
    var storedName = adjective + " " + verb + " " + noun;

    var adjPost;
    var verbPost;
    var nounPost;
    var storedNamePost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var confirm = response.message;
        $("#adjectiveRes").html(confirm);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var confirm = response.message;
        $("#verbRes").html(confirm);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var confirm = response.message;
        $("#nounRes").html(confirm);
      });
    }

    if (storedName) {
      console.log(storedName);
      storedNamePost = {word: storedName};
      $.post("storedName", storedNamePost, function(response) {
        var confirm = response.message;
        $("#storedNameRes").html(confirm);
      });
    }

    $("input[name=adjective], input[name=verb], input[name=noun]").val("");
  });
});
