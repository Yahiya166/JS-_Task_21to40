//********** Chapter # 21-25 *************




// Question #1
// var fname=prompt("Enter your first name :");
// var lname=prompt("Enter your last name :");
// var fullName= fname + lname;
// alert("Welcome" + " " + fullName);

// Question #2
// var favouritePhone=prompt("What is your favourite Phone ?");
// document.write("My Favourite Phone is : " + favouritePhone + "<br>");
// var a=favouritePhone.length;
// document.write("Length of string is : " + a)

// Question #3
// var a="Pakistani";
// document.write("String : " + a + "<br>")
// var b=a.indexOf("n");
// document.write("Index of “n” is : " + b)

// Question #4
// var a="Hello World";
// document.write("String : " + a + "<br>")
// var b=a.lastIndexOf("l");
// document.write("Last Index of “l” is : " + b)

// Question #5
// var a="Pakistani";
// document.write("String : " + a + "<br>")
// var b=a.charAt(3);
// document.write("Character at index 3 : " + b)

// Question #6
// var fname=prompt("Enter your first name :");
// var lname=prompt("Enter your last name :");
// var fullName= fname.concat(lname);
// alert("Welcome" + " " + fullName);

// Question #7
// var a="Hyderabad";
// document.write("City : " + a + "<br>")
// var b=a.replace("Hyder","Islam")
// document.write("After replacement : " + b)

// Question #8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Messege : " + message + "<br>")
// var afterRepaceMessege=message.replace(/and/g,"&")
// document.write("After replacement : " + afterRepaceMessege)

// Question #9
// var a="472";
// document.write("Value: " + a + "<br>");
// document.write("Type: " + typeof a + "<br>");
// var b=Number(a);
// document.write("Value: " + b + "<br>");
// document.write("Type: " + typeof b);

// Question #10
// var a=prompt("Enter Any Dryfruit name");
// document.write("User Input: " + a + "<br>")
// var b=a.toUpperCase();
// document.write("Upper Case: " + b + "<br>")

// Question #11
// var a=prompt();
// document.write("User Input: " + a + "<br>")
// var b =a[0]
// document.write("Tittle Case: " + a[0].toUpperCase() + a.slice(1).toLocaleLowerCase())

// Question #12
// var num = 35.36;
// document.write("Number :" + num + "<br>")
// num= num.toString().replace(".","");
// // document.write(typeof num)
// document.write("Result: " + num + "<br>")

// Question #13
// var a=64;                                                                                                    //Not In Book :,(
// var b=String.fromCharCode(a);
// document.write(b);
// var userName=prompt("Enter Username: ")
// if(userName!=String.fromCharCode(a)){

// alert("Enter Valid username")
// }

// Question #14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a=prompt("Welcome to ABC bakery.What do you want to order sir/ma'am? ");
// var a =a.toLowerCase();
// var b =items.indexOf(a)
// for (i=0;i<items.length;i++){
//     if(a==items[i]){
//         document.write(a + " is available at index " + b+ " in our bakery")
//     }else{
//         document.write("We are sorry "+ a +" is not available in our bakery")
//     }
//     break
// }

// Question #15
//Not In Book :,(

// Question #16
// var university="University of Karachi";
// var arr= university.split("");
// for (i=0;i<university.length;i++){
//     document.write(arr[i] + "<br>  ")
// }

// Question #16
// var a=prompt("Enter Input");
// document.write("User Input: " + a + "<br>");
// a=a.slice(-1);
// document.write("Last Character: " + a);

// Question #16
// var str="The quick brown fox jumps over the lazy dog";                                                    //dont know
// var word="The";
// var strLen=str.length;




//********** Chapter # 26-34 *************





// Question #1
// var a=prompt("Enter an Integer: ","3.45214");
// document.write("Number: " + a + "<br>");
// b =Math.round(a)
// document.write("Round off value: " + b + "<br>");
// c =Math.floor(a)
// document.write("Floor value: " + c + "<br>");
// d =Math.ceil(a)
// document.write("Ceil value: " + d + "<br>");

// Question #2
// var a=prompt("Enter a Negative floating point Number: ","-2.673");
// document.write("Number: " + a + "<br>");
// b =Math.round(a)
// document.write("Round off value: " + b + "<br>");
// c =Math.floor(a)
// document.write("Floor value: " + c + "<br>");
// d =Math.ceil(a)
// document.write("Ceil value: " + d + "<br>");

// Question #3
// var num=-3;
// b =Math.abs(num)
// document.write("The absolute value of " + num + " is " + b)

// Question #4
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("Random dice value: " + numberOfStars + "<br>");
// document.write("Random dice value: " + numberOfStars);

// Question #5
// var coin=Math.floor(Math.random()*2)+1;
// console.log(coin);
// if(coin==1){
//     document.write(coin + "<br>" + "Random coin value:Tails")
// }
// if(coin==2){
//     document.write(coin + "<br>" + "Random coin value:Heads")
// }

// Question #6
// var random=Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 and 100 is " + random);

// Question #7                                                                                  //dont know what is parse?:,(

// Question #8
// var random=Math.floor(Math.random()*10)+1;
// var userInp=prompt("Enter a number between 1 to 10: ");
// if(userInp==random){
//     alert("Congrats")
// }else{
//     alert("Try again")
// }




//********** Chapter # 35-38 *************





// Question #1
// function date(a){
//     var a=new Date();
//     console.log(a);
// }
// date();

// Question #2
// function greet(fName,lName){
//     console.log("Welcome " + fName + " " + lName)
// }
// fName=prompt("Enter First Name :")
// lName=prompt("Enter Last Name :")
// greet(fName,lName);

// Question #3
// num1=prompt("Enter a number");
// num2=prompt("Enter a number");
// function sum(num1,num2){
//     console.log(Number(num1)+Number(num2));
// }
// sum(num1,num2);

// Question #4
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));
// var result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(result);

// Question #5
// function square(a){
//     console.log(a*a);
// }
// a=Number(prompt("Enter A number :"))
// square(a);

// Question #6
// function factorial(num){
//     var answer=1;
//     for(i=num;i>0;i--){
//         answer = answer*i;
//     }
//     return answer;
// }
// var num=Number(prompt("Enter a number"));
// answer=factorial(num);
// console.log(answer);

// Question #7
// function count(a,b){
//     for (i=a;i<=b;i++){
//         console.log(i);
//     }
// }
// var a=parseFloat(prompt("Enter a First number :"));
// var b=parseFloat(prompt("Enter a second number :"));
// count(a,b);

// Question #8
// function rightAngleTriangle(hyp,base,per){                                                       //Later ;)
//     function calSquare(){
//         var base=base*base;
//         var per =per*per;
//         return answer;
//     }
//     answer=calSquare();
//     answer1=base+per;
// }
// var hyp="Hypotenuse";
// var base=parseFloat(prompt("Enter Base :"))
// var per=parseFloat(prompt("Enter Perpendicular :"))

// answer = rightAngleTriangle(hyp,base,per);
// console.log(answer);

// var base,hyp,perp,x,y;
// var result,final;
// base =+prompt("Enter the value of base");
// perp =+prompt("Enter the value of perpendicular");
// result =hypt(base,perp);
// final=result.toString();
// document.write("Hypotneus = " + final.slice(0,4));

// function hypt(base,perp){
//     hyp=sqrt(base,perp);
//     y=sqrt(hyp);
//     return y;
// }

// function sqr(base,perp){
//     return ((base*base)+(perp*perp))
// }

// function sqrt(hyp){
//     x=Math.sqrt(hyp);
//     return x;
// }

// Question #9
// function areaOfTriangle(width,height){
//     console.log("Area Of Triangle is = " + "width" + ' * ' + "height")
//     console.log("Area Of Triangle is = " + width * height)
// }
// var width=10;
// areaOfTriangle(width,5)

// Question #10
// function palindrome(a){
//     var b=a.split("");
//     var c=b.reverse();
//     var d=c.join('');
//     if (a==d){
//         console.log("It is Palindrome")
//     }else{
//         console.log("It is not Palindrome")
//     }
// }
// var a=prompt("Enter a Palindrome");
// palindrome(a);

// Question #11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// var str="the quick brown fox";
// console.log(uppercase(str));

// Question #12
// function longestString(a){

// }
// var a=prompt('Enter a String :');                                                                //Dont Know :(

// Question #13
// function counting(string,letter){
//     var strLen=string.length;
//     var counter=0;
//     for (var i=0;i<strLen;i++){
//         if(string[i]==letter){
//             counter++;
//         }
//     }
//     return counter;
// }
// var string=prompt("Enter a string");
// var letter=prompt("Enter a latter");
// console.log("There are " + counting(string,letter) + " " +letter +" in " + string);




//********** Chapter # 38-42 *************






// Question #1
// var a = +prompt("Enter a number :");
// var b = Number(prompt("Enter power of first number :"));
// console.log(Math.pow(a,b));

// Question #2
// function check_leapyear(){
//     var year;
//     year = +prompt("Enter Leap Year")
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");
//     }
//     else
//     {
//         alert(year+" is not a leap year");
//     }
// }
// check_leapyear()

// Question #3
//var s;
// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// function semi_perimeter(side1, side2, side3) {
//    s = (side1 + side2 + side3) / 2;
// }
// semi_perimeter(side1, side2, side3);

// function areaOfTriangle(s,side1,side2,side3) {
//     var area =  s*(s-side1)*(s-side2)*(s-side3);
//     console.log(area);
// }
// areaOfTriangle(s,side1,side2,side3);



