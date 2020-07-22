/*//chapter #1
//Q1. Write a script to greet your website visitor using JS alert box.
alert("this is a alert ")

//2. Write a script to display following message on your web page: 
alert("Error! Please enter a valid password")

//3. Write a script to display following message on your web page: (Hint : Use line break
alert("welcome to js Land...\n Happy coding")

//4. Write a script to display following messages in sequence:
alert("Happy coding \n Prevent this page for aditional dialogs") 

//5. Generate the following message through browser’s developer console: 
alert("Hello...I can run JSthroughmy web browser's console")*/

/*chapter #2
 
Page 1 of 3  
1. Declare a variable called username.
2. Declare a variable called myName & assign to it a string that represents your Full Name.
3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.*/ 
/*var username
var myname = "Syed Burair Hussain Zaidi"
alert(myname)
var message = "Hello World"
alert(message)
alert("message")
var studentage =prompt('Enter your age')
alert("Age is" +  studentage)*/



/*var m, n,pizza;
for(m=1;m<=5;m++)
{
for(n=5;n>=m;n--)
{
document.write(pizza);
}
document.write("<br/>");
}*/
//5. Write a script to display the following alert using one JS variable: 
/*var i, j;
for(i=5;i>=1;i--)
 {
  for(j=1;j<=i;j++)
 {
   document.write('pizza');
   
  }
   document.write('<br/>');
 }*/

 //6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
 /*var email = "Zburair5@gmail.com"
 alert("my email is " + email)*/ 

 
//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
/*var book = "I'm tring to learn from book. A smarter way to learn JavaScript"
alert(book)*/

//8. Write a script to display this in browser through JS
//document.write('Yah! I can write HTML content throught JavaScript')

//9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
//alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//chapter #3
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
/*var age =21
alert("I am" +  age  +  "years old")*/ 

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

/*var birthYear = 1998
document.write("my birth year is" + birthYear)*/

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

/*var  Visitorsname = "John Doe";
var  Producttitle = "5 T-shirt(s)"
document.write(Visitorsname + "ordered" + Producttitle + " on XYZ Clothing store") */

//chapter #4

/*1. Declare 3 variables in one statement.
2. Declare 5 legal & 5 illegal variable names. 
3. Display this in your browser 
a)  A heading stating “Rules for naming JS variables” 
b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
d) Variable names are case _________ e) Variable names should not be JS _________   */

/*var a,b,c

document.write(" Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable")
document.write("Variables must begin with a ______, ______ or _____. For example $name, _name or name \n")
document.write("Variable names are case _________ e) Variable names should not be JS _________\n")*/

//chapter #5

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

/*var a = prompt("enter first number")
var b = prompt("enter second number")
var fun = prompt("enter  function")
if(fun === '+'){
  alert( (+a) + (+b) )
}
else if(fun === '-'){
  alert( a - b )
}
else if( fun === '*'){
  alert( a * b )
}
else if( fun === '/'){
  alert( a / b)
}*/

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

/*var cost = 600
var a = prompt("how many tickets do you req?")
var c = cost * a
alert("Total cost of by" + a + "tickets is" + c)*/

//5. Write a script to display multiplication table of any number in your browser. E.g
    
/*var i
var num = prompt("Enter a number to print the table:")
for(i=1;i<=10;i++){
  document.write(num + "x" + i + "=" + num*i + "<br>")
}*/

 
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”

/*var f = 70
var c = 25
var b = ((c * 5/9) + 32)
var a = (5/9) * (f-32)
document.write(f + '' + "F" + ' ' + "is" + ' ' + a + "C" + "<br>")
document.write(c + '' + "c" + ' ' + "is" + ' ' + b + "F")*/

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
//Compute the total cost & show the receipt in your browser.

/*var a = prompt("Enter price of item 1"  )
document.write("Price of item 1 is" + ' ' + a + ' ' + "<br/>")
var b = prompt("Enter Quantity of item 1")
document.write("Quantity of item 1 is" + ' ' + b + "<br>")
var c = prompt("Enter price of item 2" + "<br>" )
document.write("Price of item 2 is" + ' ' + c + ' ' + "<br/>")
var d = prompt("Enter Quantity of item 2")
document.write("Quantity of item 2 is" + ' ' + d + "<br>")
document.write(`Total = ${(+a) + (+b) + (+c) + (+d)}`)*/

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

/*var marks = prompt("Enter your obtained Marks")
document.write("Obtained Marks" + ' ' + marks + "<br>")
var Total = prompt("Enter your Total Marks")
document.write("Total Marks" + ' ' + Total + "<br>")
var c = (marks/Total*100)
document.write("Percentage is" + ' ' + c +  ' ' + "%" )*/

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

/*var con = prompt("Enter rupiees to convert in $")
document.write(con * 140)*/

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

/*var a = 400
document.write( (a + 5 * 10)/2 )*/

 
// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”

/*var DOB = March 1, 1995
var millisecbetweenDOBand1970 = Date.parse(DOB)
var millisecbetweennowand1970 = Date.now();
var ageinmillisec = millisecbetweennowand1970-millisecbetweenDOBand1970;
var millisec = ageinmillisec;
var second = 1000;
var min = second*60;
var hour = min*24
var day = hour*24
var month = day*30
var year = day*365
var year = Math.round(millisec/year)
var months = years*12
var days = years*365
var hours = Math.round(millisec/hour)
var seconds = Math.round(milliseconds/second);
function printresult(){
  var message = "Age in years : "  +years+
  "<br> Age in Months : "+months+
  "<br> Age in Days : "+days+
  "<br> Age in Hours : "+hours+
  "<br> Age in Seconds : "+seconds+
  "<br> Age in Milliseconds : "+milliseconds+
  document.write(printresult)
   
}
window.onload = printresult;*/

//chapter #6
//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// document.write("a is" + a + "<br>")
// document.write("b is " + b + "<br>")
// document.write("Result is" + result)


//6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 

// var eng = prompt("Enter total marks of English")
// var phy = prompt("Enter total marks of Physics")
// var math = prompt("Enter total marks of Math")
// document.write("Total Marks of English is" + eng + "<br>")
// document.write("Total Marks of Physics is" + phy + "<br>")
// document.write("Total Marks of Math is" + math + "<br>")
// var engobt = prompt("Enter Obtained marks of English")
// var phyobt = prompt("Enter Obtained marks of Physics")
// var mathobt = prompt("Enter Obtained marks of Math")
// document.write("Obtained Marks of English is" + engobt + "<br>")
// document.write("Obtained Marks of Physics is" + phyobt + "<br>")
// document.write("Obtained Marks of Math is" + mathobt + "<br>")

// document.write("Total Marks is" + (+eng) + (+phy) + (+math))
// document.write("Obtained Marks is" + (+engobt) + (+phyobt) + (+mathobt))

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("Enter a city name")
// if(city === "karachi"){
//   alert("Welcome to the city of lights")
// }

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

// var m = prompt("enter gender")
// if(m === "male"){
//   alert("hello sir")
// }else if(m === "female")
//   {alert("hello mam")}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car

// var fuel = prompt("Enter current fuel in your car")
// if(fuel < 0.25){
//   alert("Please refill the fuel in your car")
// }
// else{
//   alert("Fuel is OK")
// }

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 

//  var a = 4; 
// if (++a === 5)
// { 
//   alert("given condition for variable a is true"); 
// }
// var b = 82;
// if (b++ === 83)
// { 
//    alert("given condition for variable b is true"); 
// }
// var c = 12;
// if (c++ === 13){ 
//   alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//   alert("condition 2 is true"); 
// } 
// if (++c < 14){
//    alert("condition 3 is true"); 
// } 
// if(c === 14){
//    alert("condition 4 is true"); 
// } 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//    alert("The cost equals"); 
// } 
// if (true){ 
//   alert("True");
// } 
// if (false){ 
//   alert("False"); 
// }
// if("car" < "cat"){ 
//   alert("car is smaller than cat"); 
// } 

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

// var sec = "5"
// var a = prompt("Enter a number between 1 to 10 ")
// if(a === sec){
//   alert("Bingo! Correct answer")
// }else if (a === "4"){
//   alert("Close enough to the correct answer")
// }else if( a === "6"){
//   alert("Close enough to the correct answer")
// }
// else {
//   alert("Wrong answer")
// }



// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var a = prompt("Enter a number ")
// if( "a / 3 ===0"){
//   alert("number is divisiable by 3")
// }else {
//   alert("not")
// }

// 9. Write a program that checks whether the given input is an even number or an odd number. 

// var a = prompt("Enter a number ")
// if( a / 2 == 0){
//   alert("number is even")
// }else {
//   alert("number is odd")
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// var T = prompt("Enter Temperature");
// if( T > 40 ){
//   alert( " “It is too hot outside.” ");
// }else if(T > 30){
//   alert(" “The Weather today is Normal.”");
// }


// chapter 12-13
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// var ch = prompt("enter an alphabet")
// if (ch >= 'A' && ch <= 'Z'){ 
//         alert(" is an UpperCase character\n"); 
// }  
//     else if (ch >= 'a' && ch <= 'z'){ 
//     alert(" is an LowerCase character\n");               
// }  
// else{
//     alert(" is not an aplhabetic character\n");
// }    


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var a, b;
// a = (prompt("Enter first number "));
// b = (prompt("Enter Second number"));
// cas_1 = a > b;
// cas_2 = a < b;
// if (cas_1 == true){

// while(cas_1 == true){
// alert("A is max with this number " + ''+ a);
// break;
// }

// }else{
// alert("B is with this number " + '' + b );
// }

//  3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num=prompt("Enter a number: ");
// if(num == 0.0){
//   if(num == 0.0){
//     alert("you enter zero")
//   }else {
//     alert("you enter a - num")
//   }
// }else{
//   alert("you enter + num")
// }

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var num = prompt("enter a single alphabet")
// if(num === a || e ||i || o || u ){
//   alert(true)
// }else  {
//   alert(false)
// }


// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwis
// var a = prompt("enter current password");
// if ( a=== ' '){
//   alert("please enter password")
// }break;
// var b = prompt("Enter new password")
// var c = prompt("enter again")
// if(b===c){
//   alert("password is correct")
// }else{
//   alert("you enter a wrong password")
// }

// 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; 

// var greeting;
// var hour = 13; 
// if (hour < 18) { 
//   greeting = "Good day";
// }else{ 
//    greeting = "Good evening"; 
// } 


// chapter #14

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var a= ["ali"]
// var b = ["burair"]
// var c = ["hassan"]
// var d = [300]
// var e = [200]
// var f = [400]
// document.write("score of" + ' ' + a + ' ' + "is" + ' ' + d + "<br>" )
// document.write("score of" + ' ' + b + ' ' + "is" + ' ' + e + "<br>" )
// document.write("score of" + ' ' + c + ' ' + "is" + ' ' + f + "<br>" )



// var array = ["black","white","blue","green"]
// document.write(array)

// chapter #21
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name

// var Fname = prompt("enter first name")
// var Lname = prompt("enter last name")
// document.write(Fname + ' ' + Lname)

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var a = prompt("enter your favrite mobile")
// document.write(a.length)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 

// var ages = [pakistan];


// function myFunction() {
//    ages.findIndex(n);
// }
// myFunction()

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('Hello World', 'i'));


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write(str + ' ' + "afte change"+ "<br>")
// document.write(res)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.

// var message = ("Ali and Sami are best friends They play cricket and football together.");
// document.write(message.replace("and" , "&"))

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var num1 = 472;
// var num2 = '472';
// if (num1 === num2) {
//     document.write("number");
// } else {
//     document.write("string");
// }

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var a = prompt("enter a word in lowercase")
// document.write("you enter " + a + "<br>")
// document.write("In uppercase" + ' ' +  a.toUpperCase())


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
 
// var a = prompt("enter user name")
// if(a === "@" || "!" || "." || "," ){
//     alert("invalid")

// }else{
//     alert(a)
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var a = prompt("Enter password")
// function(password) {
//     var lowerCaseLetters = /[a-z]/g;
//     if(a.match(lowerCaseLetters)) { 
//       a.remove("invalid");
//       a.add("valid");
//     } else {
//       a.remove("valid");
//       a.add("invalid");
//   }
//   var upperCaseLetters = /[A-Z]/g;
//   if(a.match(upperCaseLetters)) { 
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   var numbers = /[0-9]/g;
//   if(a.match(numbers)) { 
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   if(a.length >= 8) {
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   function(password)

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var str = '“University of Karachi”'
// var array = str.split(" ",1);
// document.write(array);

// Write a program to display the last character of a user input.
// var i = prompt("enter a word")
// var str
// if(i == i.length() - 1){
//     alert(str.CharAt(i))
// }
// if (i.charAt(i) == ' ') { 
//     alert(i.charAt(i - 1) 
//                      + " "
//                      + i.charAt(i + 1)); 
// }

// chapter #26
// 1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var a = prompt("enter a +ve number")
// document.write("Number:" + ' ' + a + "<br>")
// document.write("round off value:" + ' '  + Math.round(a) + "<br>")
// document.write("floor value:" + ' '  + Math.floor(a) + "<br>")
// document.write("ceil value:" + ' '  + Math.ceil(a) + "<br>")

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
// var a = prompt("enter a -ve number")
// document.write("Number:" + ' ' + a + "<br>")
// document.write("round off value:" + ' '  + Math.round(a) + "<br>")
// document.write("floor value:" + ' '  + Math.floor(a) + "<br>")
// document.write("ceil value:" + ' '  + Math.ceil(a) + "<br>")

// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var a = prompt("Enter a number to find its absolute value")
// document.write("Absloute value of" + ' ' + a +' ' + "is" + ' ' + Math.abs(a))

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
// var a = prompt("enter a number")
// document.write(Math.floor( Math.random() * 6 ))

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var heads = 0
// var tails = 0

// function toss(){

//     if(Math.random() >  0.5){
//     alert("heads")
// }else {
//     alert("tails")
// }
// }

// toss();

// 6. Write a program that shows a random number between 1 and 100 in your browser. 

// var r = Math.floor(Math.random() * 100) + 1;
// document.write("the number between 1 to 100 is :" + r)

// var a = prompt("enter your weight in kg")
// document.write("The weight of user is" + ' ' + a)

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var r = Math.floor(Math.random() * 10) + 1
// var a = prompt("enter a number between 1 to 10")
// if(a === r){
//     alert("you win")
    
// }else{
//     alert("you lose")

// }

// chapter 31 to 34

//  1. Write a program that displays current date and time in your browser

// var d = new Date();
// document.write(d)

// 2. Write a program that alerts the current month in words. For example December.

// var d = new Date() 
// var n = d.getMonth();
// if(n === 1){
//     alert("january")
// }else if(n === 2){
//     alert("february")
// }else if(n === 3){
//     alert("march")
// }else if(n === 4){
//     alert("april")
// }else if(n === 5){
//     alert("may")
// }else if(n === 6){
//     alert("june")
// }else{
//     alert("fail")
// }

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];
// alert(dayName)

// Assignment # 38-44

// Write a custom function power ( a, b ), to calculate the value of a raised to b.

// var a = 2
// var b = 3
// var power
// if (b == 0){ 
// alert("1")
// } else if (b%2 == 0){ 
//  alert (power(a, b/2)*power(a, b/2));} 
// else{
// alert (a*power(a, b/2)*power(a, b/2));} 
// document.write(power(a,b))

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 

// // function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions 

// var a = 2,b = 3,c = 4
// var s = (a+b+c)/2
// area = (s*(s-a) * (s-b) * (s-c))
// document.write(area)

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction

// var m = 50
// var c = 60
// var p = 90

// function mainFunction(){
// percentage()
// average()
// }
// function percentage(){
//   var a = (m*p*c)/100
// }
// function average(){
//   var b = (m+p+c)/3
// }
// mainFunction()

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   switch (str) {
//     case 'a':
//         count++;
//     case 'A':
//         count++
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//         return 1;
//     default:
//         return 0;
// }
// }

// findOccurrences();



// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 

// var a = prompt("enter distance in km")
// var m = a * 1000
// var cm = a*1000*100
// var f = a* 3280.84
// var inches = a * 39370.08
// document.write("km = " + ' ' + a + "<br>")
// document.write("m = " + ' ' + m + "<br>")
// document.write("cm = " + ' ' + cm + "<br>")
// document.write("f = " + ' ' + f + "<br>")
// document.write("inches = " + ' ' + inches + "<br>")


// Assignment # 43-48 

// 1. Show an alert box on click on a link.

// function myFunction() {
//   alert("I am an alert box!");
// }

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user. 

// function alert(){
//   alert(alert)
// }

// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted

// function myFunction() {
//   document.getElementById("myTable").deleteRow(0);
// }

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. 

// function bigImg(x) {
//   x.style.height = "500px";
//   x.style.width = "500px";
// }
// function normalImg(x) {
//   x.style.height = "300px";
//   x.style.width = "300px";
// }

// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// function clickCounter() {
//   if (typeof(Storage) !== "undefined") {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//     } else {
//       localStorage.clickcount = 1;
//     }
//     document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//   }
// }

// Assignment # 49-52

// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }

// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

// var arrHead = new Array();
// arrHead = ['', 'Emp. Name', 'Designation', 'Age']; 

// function createTable() {
//     var empTable = document.createElement('table');
//     empTable.setAttribute('id', 'empTable');  

//     var tr = empTable.insertRow(-1);

//     for (var h = 0; h < arrHead.length; h++) {
//         var th = document.createElement('th'); 
//         th.innerHTML = arrHead[h];
//         tr.appendChild(th);
//     }

//     var div = document.getElementById('cont');
//     div.appendChild(empTable);   
//    }


// function addRow() {
//     var empTab = document.getElementById('empTable');

//     var rowCnt = empTab.rows.length;        var tr = empTab.insertRow(rowCnt); // table row.
//     tr = empTab.insertRow(rowCnt);

//     for (var c = 0; c < arrHead.length; c++) {
//         var td = document.createElement('td');         
//         td = tr.insertCell(c);

//         if (c == 0) {   
//             var button = document.createElement('input');

            
//             button.setAttribute('type', 'button');
//             button.setAttribute('value', 'Remove');

//                        button.setAttribute('onclick', 'removeRow(this)');

//             td.appendChild(button);
//         }
//         else {
           
//             var ele = document.createElement('input');
//             ele.setAttribute('type', 'text');
//             ele.setAttribute('value', '');

//             td.appendChild(ele);
//         }
//     }
// }
// function removeRow(oButton) {
//     var empTab = document.getElementById('empTable');
//     empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
// }


// function submit() {
//     var myTab = document.getElementById('empTable');
//     var arrValues = new Array();

    
//     for (row = 1; row < myTab.rows.length - 1; row++) {
        
//         for (c = 0; c < myTab.rows[row].cells.length; c++) {
//             var element = myTab.rows.item(row).cells[c];
//             if (element.childNodes[0].getAttribute('type') == 'text') {
//                 arrValues.push("'" + element.childNodes[0].value + "'");
//             }
//         }
//     }
    
    
//     console.log(arrValues);
// }

// Assignment # 58-67JAVASCRIPT


// 1. Consider you have following code snippet: (Copy it in your HTML file) <div> <h1> DOM </h1> <div id=”form-content” class=”content”> <label for=”first-name”>First Name</label> <input type=”text” id=”first-name” /> <label for=”last-name”>Last Name</label> <input type=”text” id=”last-name” /> <label for=”email”>Email</label> <input type=”text” id=”email” /> </div> <div id=”main-content” class=”content”> <p class=”render”> First Name : Alex</p> <p class=”render” id=”lastName”>Last Name: Bank</p> <p class=”render”> Email : alexbank@example.com</p> <p class=”render”> Country : Pakistan </p> <p class=”render”> contact : +92 300 1234567</p> </div> </div> i. Get element of id “main-content” and assign them in a variable. ii. Display all child elements of “main-content” element. iii. Get all elements of class “render” and show their innerHTML in browser. iv. Fill input value whose element id first-name using javascript. v. Repeat part iv for id ”last-name” and “email”.

// var maincon = document.getElementById('main-content')
// console.log(document.childNodes[1].childNodes[2].childNodes[17])

// var ren = document.getElementsByClassName('render')
// console.log(ren)

// function myFunction() {
//   var x = document.getElementById("first-name").name;
  
// }

// function myFunction() {
//   var x = document.getElementById("last-name").name;
  
// }function myFunction() {
//   var x = document.getElementById("email").name;
  
// }


//   2.  use HTML code of question 1 and  show the result on browser. i. What is node type of  element having id “form-content”. ii. Show node type of element having id “lastName” and its child node. iii. Update child node of element having id “lastName”. iv. Get First and last child of id “main-content”. v. Get next and previous siblings of id “lastName”. vi. Get parent node and node type of element having id “email”

// function myFunction() {
//   var x = document.getElementById("form-content").nodeType;
// }


// function myFunction() {
//   var x = document.getElementById("last-name").nodeType[1].childNode;
// }

// var x = document.getElementById("main-content").firstChild.innerHTML;
// var x = document.getElementById("main-content").lastChild.innerHTML;

// function myFunction() {
//   var x = document.getElementById("last-name").previousSibling.innerHTML; 
  
// }
// function myFunction() {
//   var x = document.getElementById("last-name").nextSibling.innerHTML; 
  
// }

function myFunction() {
  var x = document.getElementById("email").parentNode.nodeName;
  
}