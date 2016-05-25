var monkey = {

eyes: "blue",
bananaCount: 10,
arms: 3,
favoriteQuote: "ooh aah",
mutant: true,

favoriteFoods: ["bananas", "beer", "whiskey"],
homeConditions: {
location: "Jungle",
house: "tree",
},
speech: function(quote) {
	console.log(quote);

}

};

//function

var sum = function(a,b) {

var added = a + b;
return added;

}
//both of these work setting to variable has something to do with hoisting
function(a,b) {

var added = a + b;
return added;

}

mokey.speech(monkey.favoriteQuote);

var answer = sum(2,7); //  if you put in a variable, the returned value goes somewhere

math.random();
// creates random number
math.round();
//round number generated
console.log(math.round(math.random()));
console.log(math.ceil(31.55)); // .ceil or .floor round up or down
math.sqrt();

// conditionals ==, ====, <, >, !=, <=, >= but == will be true for 31 vs "31" whereas === checks type
// !== checks value and type but != checks value or type
parseInt() //  changes string to number? The parseInt() function parses a string argument and returns an integer of the specified radix

// && || are and or used in conditionals 
// truthie or falsie checking for if something has a legitimate value... null, undefined, "0", "", false, NaN
//  will pass as false in a conditional statement
if (somethingfalse) { // if any of the falsie conditions it is error, so checking for if there is a legitimate value
} // best foe checking on API requests looking at data like on giffy it sent a bunch of objects and object values
// but if some of the values had nothing need to check for a truthie
// remember commas in object definitions

switch(num) { // can go through an array // has a global scope like an if statement  
	case 23:
	console.log("number is 23");
	break;
	case 42
	break;
// dont use a lot of switch statements
}

//scope why some are local vs global

var array [1,5,8,10];

for (index=0; index<array.length; index++) {
}
// to reverse 
for (index=array.length-1; index >= 0; index--) {

}

for (var key in monkey) { //
if (monkey[key] === "ooh aah") {
	console.log(key); // this outputs 

}
}

//for in is to move through object values
//forEach is a method on the array class array.forEach
//similar to .map but forEach does not output a new array
// why do this instead of for loop and a .map not really sure
var arr = [1,2,3,45,96];
var newarr =[];

ararr.forEach(function(i){
  var newNum = i + 5;

arr.forEach(callback);

});
  console.log(newarr);