//            CHAPTER 17 TO 20

// QUESTION NO 1: Declare and initialize an empty multidimensional array. (Array of arrays)

// ANSWER:

// var array=[[],[],[]];

// QUESTION NO: 2 Declare and initialize a multidimensional array representing the following matrix:

// ANSWER: 

// var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// QUESTION NO: 3 Write a program to print numeric counting from 1 to 10.

// ANSWER:

// for(var i=1;i<=10;i++){
//     document.write(i);
//     document.write("<br>");
// }

// QUESTION NO: 4 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// ANSWER:
// var a =prompt("enter the no u want to print the table");
// var b=prompt("enter the length of the multiplcation table");
// document.write("the table is <br>");
// for (var i=1;i<=b;i++){
//     var c=a*i;
//     document.write(a+"\t"+"*"+"\t"+i+"\t"+"="+c);
//     document.write("<br>");
// }

// QUESTION NO: 5 Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// ANSWER:

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"\t"+"is in index no"+"\t"+i);
//     document.write("<br>");
// }

// QUESTION NO:6 Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANSWER:

// document.write("Counting<br>");
// for(var a=1;a<=15;a++){
//     document.write(a+",");
// }

// document.write("<br><br>");
// document.write("Reverse counting<br>");
// for(var b=10;b>=1;b--){
//     document.write(b+",");
// }

// document.write("<br><br>");
// document.write("Even <br>");
// for(var c=0;c<=20;c++){
//     document.write(c+",");
// }

// document.write("<br><br>");
// document.write("Odd <br>");
// for(var d=1;d<=19;d++){
//     document.write(d+",");
// }

// document.write("<br><br>");
// document.write("Series <br>");
// for(var e=2;e<=20;e++){
//     document.write(e+"k"+",");
// }

// QUESTION NO: 7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example

// ANSWER:

// var a = ["cake","apple","pie", "cookie", "chips","patties"]
// var c=0;
// var s=prompt("enter the item u want to search in an bakery! ");
// for(var i=0;i<a.length;i++){
//         if (s===a[i]){
//             document.write("the item found in the bakery at index "+i);
//             break;
//         }
//         c=c+1;
// }
// if(c==a.length){
//     document.write("we sorry "+s+"\t"+"is not available in our bakery!");
// }

// QUESTION NO: 8 Write a program to identify the largest number in the given array. a = [24, 53, 78, 91, 12].

// ANSWER:

// var a = [24, 53, 78, 91, 12];
// var largest=a[0];
// for(var i=1;i<a.length;i++){
//     if (a[i]>largest){
//         largest=a[i];
//         continue;
//     }
// }
// document.write("the largest no is "+largest);


// QUESTION NO: 9 Write a program to identify the smallest number in the given array.
// a = [24, 53, 78, 91, 12]

// ANSWER:

// var a = [24, 53, 78, 91, 12];
// var smallest=a[0];
// for(var i=1;i<a.length;i++){
//     if (a[i]<smallest){
//         smallest=a[i];
//         continue;
//     }
// }
// document.write("the smallest no is "+smallest);

// QUESTION NO:10 Write a program to print multiples of 5 ranging 1 to 100.

// ANSWER:

// var a=5;
// for(var i=1;i<=20;i++){
//     c=a*i;
//     document.write(c+",")
// }

//                      Chapter 21 to 25

// QUESTION NO: 1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// ANSWER: 

// var first_name=prompt("enter the your first name");
// var last_name=prompt("enter your last name");
// var full_name=first_name+last_name;
// document.write(" Welcome"+"\t"+full_name);

// QUESTION NO: 2  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// ANSWER:

// var mobile=prompt("enter your favourite mobile , phone model. ");
// var b=mobile.length;
// document.write("my favourite phone is "+mobile+"<br>");
// document.write("the length of the phone is "+b);

// QUESTION NO: 3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// ANSWER:

// var word="pakistani";
// document.write("string:"+word+"<br>");
// for(var i=0;i<word.length;i++){
//     if (word[i]=="n"){
//         document.write("index of n is "+i);
//         break;
//     }
// }

// QUESTION NO: 4   Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

// ANSWER:

// var a ="hello world";
// document.write("the string is "+a+"<br>");
// document.write("last index of l is "+a.lastIndexOf("l"))

// QUESTION NO: 5  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// ANSWER:

// var word="pakistani";
// document.write("the string is "+word+"<br>");
// document.write("the element at the 3 index is "+word[3]);

// QUESTION NO: 6 . Repeat Q1 using string concat() method.

// ANSWER:

// var first_name=prompt("enter the your first name");
// var last_name=prompt("enter your last name");
// var full_name=first_name.concat(last_name);
// document.write("welcome "+full_name);

// QUESTION NO: 7  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// ANSWER:

// var city="hyderabad";
// var c=city.replace("hyder","Islam");
// document.write("first the string is "+city+"<br>");
// document.write("after replaceent the string is "+c);

// QUESTION NO: 8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// ANSWER:

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var a=message.replace(/and/g,"&");
// document.write("the message after replacement  is <br>");
// document.write(a);

// QUESTON NO:9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// ANSWER:

// var value="472";
// document.write("value = "+value+"<br>"+"type: String"+"<br>");
// var str=parseInt(value);
// document.write("value = "+str+"<br>"+"type : number ")

// QUESTION NO: 10 Write a program that takes user input. Convert and show the input in capital letters.

// ANSWER:

// var input=prompt("enter the value");
// var a =input.toUpperCase();



// document.write("the input is "+input+"<br>");
// document.write("the input in upper case is "+a);

// QUESTION NO: 11 Write a program that takes user input. Convert and show the input in title case.

// ANSWER:

// var str=prompt("enter the value");
// str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
// str.join(' ');
// document.write(str);

// QUESTION NO: 12 Write a program that converts the variable num to string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// ANSWER:

// var num=35.36;
// var b=num.toString().replace(".","");
// document.write(b);

// QUESTION NO: 13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// ANSWER:

// var input=prompt("enter the value ");
// var b=input.length;
// for(var i=0;i<b;i++){
//     if (input[i].charCodeAt(0)==33 || input[i].charCodeAt(0)==44|| input[i].charCodeAt(0)==46|| input[i].charCodeAt(0)==64){
//         alert("please enter a valid username!");
//     }
// }

// QUESTION NO: 14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// ANSWER:


// var a = ["cake","apple","pie", "cookie", "chips","patties"]
//  var c=0;
// var s=prompt("enter the item u want to search in an bakery! ");
// var q=s.toLowerCase();
// for(var i=0;i<a.length;i++){
//     if (q===a[i]){
//         document.write("the item found in the bakery at index "+i);
//         break;
//     }
//     c=c+1;
// }
// if(c==a.length){
//     document.write("we sorry "+s+"\t"+"is not available in our bakery!");
// }

// QUESTION NO: 15 Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// ANSWER:

// var input=prompt("enter the password !");
// var b=input.length;
// for(var j=48;j<=57;j++){
//     if (input[0].charCodeAt(0)==j){
//         document.write("your password is "+input+"<br>");
//         document.write("password cannot begin with number<br>");
//         document.write("please eneter valid password!");
//         break;
//     }
//     else if(b<6){
//         document.write("your password is "+input+"<br>");
//         document.write("password cannot be less than six <br>");
//         document.write("please eneter valid password!");
//         break;
//     }
// }

// QUESTION NO: 16  Write a program to convert the following string to anarray using string split method.var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var b=university.split("");
// for(var i=0;i<b.length;i++){
//     document.write(b[i]+"<br>");
// }

// QUESTION NO:17 Write a program to display the last character of a user input.

// ANSWER:

// var n =prompt("enter the value");
// for(var i=0;i<n.length;i++){
//     if( i== n.length-1){
//         document.write("user input is :"+n+"<br>");
//         document.write("last character of input is "+n[i]);
//     }
// }

// QUESTION NO: 18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// ANSWER:

// var str="the quick brown fox jumps over the lazy dog";
// document.write("TEXT :"+str+"<br>");
// document.write("the no of times occurnace of the is "+(str.split("the").length-1));