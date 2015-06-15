"use strict";

function postStoredName(word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "We already have: " + word;
  } else {
    wordObject[word] = true;
    console.dir(wordObject);
    msg = "Thanks for submitting: " + word + "!";
  }

  return {message: msg, confirm: word};
}

module.exports = postStoredName;
