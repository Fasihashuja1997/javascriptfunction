 /*FUNCTION ASSIGNMENT*/
 
 // Q1:********
// function currDat(){
//     document.write(new Date)
// }
// currDat()


// Q2:******** 
// function greet(firstName,lastName){
//     alert("Hello! " + firstName + " " + lastName )
// } 
// greet("Allama","Iqbal")


 // Q3:********
// function sumOfnumbers(fisrtNumber, secondNumber){
//     fisrtNumber = +prompt("Enter first Value")
//     secondNumber = +prompt("Enter second Value")
//     alert(fisrtNumber + secondNumber)
// }
// sumOfnumbers()


// Q4:******** 
// function calVaules(num1,num2,operator){
//     num1 = +prompt("Enter first Value")
//     num2 = +prompt("Enter second Value")
//     operator = prompt("Enter operator")
//     result = num1 + operator + num2
//     alert("Answer is " + eval(result))
// }
// calVaules()


 // Q5:********
// function squareNum(num){
//     alert(num * num)
// }
// squareNum(5)


 // Q6:******** 
// function factorial(value) {
//     return (value != 1) ? value * factorial(value - 1) : 1;
//   }
//   alert( factorial(8) )


// Q7:********

// var firstNum = +prompt("Enter the first Number");
// var lastNum = +prompt("Enter the last Number");
// function count(){
//   for (var i=firstNum ; i<=lastNum ; i++){
//     document.write(i + "<br>")
//   }
// }
// count()

// Q8:********

// var perp = prompt ("Enter the value of perpendicular")
// var base = prompt ("Enter the value of base")
// function calHypo(a,b){
//   return Math.sqrt((perp * perp) + (base * base))
// }
// alert (calHypo(perp , base));



// Q9:********

// function rectangle(l,b){
//   var area = l*b
//   alert (area);
// }
// rectangle(5, 8);

// Q10:********

// function palindrome(){
//   var word = prompt ("Enter your word")
//   var check = "";
//   for (var a = word.length -1 ; i>=0 ; a--){
//       check += word[i];

//   }
//   if (word === check){
//       alert (word + "is palidrome word")
//   }
//   else {
//       alert("your word is not palindrom")
//   }
// }
// palindrome();

// Q11:********

//  function xyz(str){
//   var sentence = str.toLowerCase().split('');
// for(var i = 0 ; i<sentence.length; i++){
//   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
// }
//   document.write(sentence.join(" "));
//   return sentence;

//  }
//  xyz("the quick brown fox");

// Q12:********

// function longestWord (string) {
//   var wordsArray = string.toLowerCase().split(" ");
//   var longest = wordsArray[0];
//   for (var a = 1 ; a < wordsArray.length ; a++) {
//     if(longest.length < wordsArray[a].length) { 
//       longest = wordsArray[a];
//     }
//   }
//   return longest;
// }
// var string = prompt ("Enter any string");
// var longest = longestWord (string);
// document.write("String:" + string + "<br>Longest word: " + longest);


// Q13:********
// function letter(str, count){
//   str = str.toLowerCase();
//   var count = (str.match(/o/g)).length;
//   document.write(count)
// }
// letter("JSResources.com" , "o");

