
 // Javascript - Assignment # 7
 
 // chapter (35 to 38) "Functions" - Starts
 
 /* 1. Write a function that displays current date & time in your 
browser. */

function currentDate(){
    var current = new Date();
    console.log(current);

currentDate();

/* 2. Write a function that takes first & last name and then it 
greets the user using his full name. */

function fullName(){
    var firstname = prompt("Enter your first name");
    var lastname = prompt("Enter your last name");
    console.log(firstname + lastname)
}
fullName();


/* 
3. Write a function that adds two numbers (input by user) 
and returns the sum of two numbers.
 */
 
function add(){
var a = +prompt("Enter num1");
var b = +prompt("Enter num2");
    return a+b;
}
console.log(add());

/* 
4. Calculator:
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser.
 */

    function calculator(num1, num2, opr) {
      var result;

      if (opr === '+') {
        result = num1 + num2;
      } else if (opr === '-') {
        result = num1 - num2;
      } else if (opr === '*') {
        result = num1 * num2;
      } else if (opr === '/') {
        result = num1 / num2;
      } else {
        result = 'Invalid operator';
      }

      document.write("Result: " + result);
      return result;
    }

 var num1 = +prompt("Enter a number")
    var num2 = +prompt("Enter a number")
    var opr = prompt("Enter the operator");
    

calculator(num1,num2,opr);


/*  
5. Write a function that squares its argument.
*/

function squarenum(num){
    return num ** 2;
}
var num = +prompt("Enter any number you want to square");
console.log(squarenum(num));


/*  6. Write a function that computes factorial of a number. */

function factorial(n) {
  if (n < 0) {
    return "Factorial not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
var userNum = +prompt("Enter num");
alert(factorial(userNum));

/*
7. Write a function that take start and end number as inputs 
& display counting in your browser.
  */
  
function counting(num1,num2) {
   var output = "";
    for(var i = a; i <= b; i++){
        output += i + " ";
    }
    return output;
}
 var a = +prompt("Enter first num");
 var b =  +prompt("Enter last num");
document.write(counting(a, b));


/* 8. Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
 */
 
 function calculateHypotenuse() {
    // Inner function to calculate square
    function calculateSquare(x) {
        return x * x;
    }

    // Take inputs
    var base = parseFloat(prompt("Enter base:"));              
    var perpendicular = parseFloat(prompt("Enter perpendicular:")); 

    // Calculate hypotenuse squared
    var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);

    // Final hypotenuse value 
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return ("Hypotenuse = " + hypotenuse);
}

console.log(calculateHypotenuse());



/* 9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */

    function areaOfRectangle(width, height) {
      return width * height;
    }

    // i. Arguments as values
    console.log(areaOfRectangle(5, 10));

    // ii. Arguments as variables
    var w = 7;
    var h = 3;
    console.log(areaOfRectangle(w, h));
    

 /*  10. Write a JavaScript function that checks whether a passed 
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam. */

function isPalindrome(str) {
      var cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      var reversed = cleaned.split('').reverse().join('');
      return cleaned === reversed;
    }

    console.log(isPalindrome("madam")); 
    console.log(isPalindrome("hello")); 
    
    
  /* 11. Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */


function capitalizeWords(str) {
 var string = str.split(' ').map
 (word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      return string;
    }

    console.log(capitalizeWords("the quick brown fox"));
    

/*  12. Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

function findLongestWord(str) {
      var words = str.split(' ');
      var longest = words.reduce((a, b) => a.length > b.length ? a : b);
      return longest;
    }

    console.log(findLongestWord("Web Development Tutorial"));
    
    
    
  /* 13. Write a JavaScript function that accepts two arguments, a

string and a letter and the function will count the number of occurrences of the specified letter within the string.

Sample arguments : 'JSResourceS.com', 'o'.
Answer?

 */
    
    function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

var result = countLetter('Hello World', 'l');
console.log(result); 
    
    
    /* 14. The Geometrizer
Create 2 functions that calculate properties of a circle, using 
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

    // For circumference:
    function calcCircumference(radius) {
      let circumference = 2 * Math.PI * radius; //2πr
      return ("The circumference is " + circumference.toFixed(2));
    }

    // For calculate area:   
    function calcArea(radius) {
      var area = Math.PI * radius * radius; //πr²
      return ("The area is " + area.toFixed(2));
    }

    var radius = 7;
    console.log(calcCircumference(radius));
    console.log(calcArea(radius));


    // chapter (35 to 38) "Functions" - Ends



 /*  chapter (38 to 42) "FUNCTIONS, SWITCH STATEMENTS, WHILE… LOOPS,DO-WHILE LOOPS" - Starts */
 
 
 /* 1. Write a custom function power ( a, b ), to calculate the value of 
a raised to b */


function power(a, b) {
    return Math.pow(a, b);
}
console.log("Power:", power(2, 3));

/* 2. Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not. */

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is Leap Year:", isLeapYear(2024));

/* 3. If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */

function getSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function getArea(a, b, c) {
    let s = getSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log("Triangle Area:", getArea(3, 4, 5));

/* 4. Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction. */

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction(m1, m2, m3) {
    console.log("Average:", average(m1, m2, m3));
    console.log("Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(80, 70, 90);

/* 5. You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now. */

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}
console.log("Custom indexOf:", customIndexOf("hello", "e"));

/* 6. Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long. */

function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log("Without Vowels:", removeVowels("This is a test sentence"));

/* 7. Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence “Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */


function countVowelPairs(text) {
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();
        switch (pair) {
            case 'aa': 
            case 'ae': 
            case 'ai': 
            case 'ao': 
            case 'au':
            case 'ea': 
            case 'ee': 
            case 'ei': 
            case 'eo': 
            case 'eu':
            case 'ia': 
            case 'ie': 
            case 'ii': 
            case 'io': 
            case 'iu':
            case 'oa': 
            case 'oe': 
            case 'oi': 
            case 'oo': 
            case 'ou':
            case 'ua': 
            case 'ue': 
            case 'ui': 
            case 'uo': 
            case 'uu':
                count++;
                break;
        }
    }
    return count;
}
console.log("Vowel Pairs:", countVowelPairs("Pleases read this application and give me gratuity"));

/* 8. The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters. */

function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}
let km = 2;
console.log(`Distance Conversions for ${km} km:`);
console.log("Meters:", toMeters(km));
console.log("Feet:", toFeet(km));
console.log("Inches:", toInches(km));
console.log("Centimeters:", toCentimeters(km));

/* 9. Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour. */

function calculateOvertime(hoursWorked) {
    if (hoursWorked > 40) {
        return (hoursWorked - 40) * 12;
    }
    return 0;
}
console.log("Overtime Pay:", calculateOvertime(45));

/* 10. A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer. */

function currencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let fifties = Math.floor((amount % 100) / 50);
    let tens = Math.floor((amount % 50) / 10);
    console.log("Currency Notes Breakdown:");
    console.log("100s:", hundreds, "50s:", fifties, "10s:", tens);
}
currencyNotes(370);
 
 
 /*  chapter (38 to 42) "FUNCTIONS, SWITCH STATEMENTS, WHILE… LOOPS,DO-WHILE LOOPS" - Ends */
 
 
 

/*  chapter (38 to 42) "FUNCTIONS, SWITCH STATEMENTS, WHILE… LOOPS,DO-WHILE LOOPS" - Starts */

// Q # 3

var students = ["Ali", "Sara", "John", "Aisha", "Ahmed", "Mina", "Hassan", "Fatima", "Omar", "Lara"];

  students.forEach(name => {
  document.write(`<tr><td>${name}</td><td>10</td><td><button onclick="deleteRow(this)">Delete</button></td></tr>`);
        });
        
function deleteRow(button) {
        var row = button.parentNode.parentNode;
        row.remove();
    }
    
    
// Q # 5

let counter = 0;
    function changeCounter(change) {
        counter = counter + change;
        document.getElementById("counterValue").innerText = counter;
    }


/*  chapter (38 to 42) "FUNCTIONS, SWITCH STATEMENTS, WHILE… LOOPS,DO-WHILE LOOPS" - Ends */




