var myArray = ["String One", "String Two", "String Three"];
 
var returnRandomString = function(array) {
	var getRandomNumber = Math.floor(Math.random() * array.length);
	return array[getRandomNumber];
}
console.log(returnRandomString(myArray));
 
$("button").click(function() {
	$("p").text(returnRandomString(myArray));
});
