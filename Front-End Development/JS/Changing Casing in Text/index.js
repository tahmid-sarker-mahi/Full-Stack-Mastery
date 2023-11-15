var name = prompt("Enter your name: ");
var firstChar = name.slice(0,1);
firstChar = firstChar.toUpperCase();
var restChar = name.slice(1,name.length); 
restChar = restChar.toLocaleLowerCase();
alert("Hello, " + firstChar + restChar);