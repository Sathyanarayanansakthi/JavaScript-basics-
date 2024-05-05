/*number=10 
string'10 stores series of characters*/ 
//used to clear the console area
console.log('hi');
console.log('hi');
console.log('hi');
console.clear();


//used tos shown like regulator 
console.log('hi soilders');  

//used to show like an error
console.error('this an error');

//used to create table
console.table(
    {name:"sn" , age:"19"}
);

//used to shown like warnning
console.warn('this an warrning');


//comments that will not run
 //single line comment
/*multiline comment

*/

//keywords means reseverd words we cant use 

//variables like a box used to store data
/*let,const,var are types in js
var-(not used in web tecnology)
let-
const-
*/

//variable declear
let name;

//variable assigning values
let number='1,2,34,5';
console.log(number);

//or another way
let num;
num='1,1,2,3,454';
console.log(num);
/*WE  CANT USE
WE
u cant write assign values liker sathya-narayanan (usage of - ) thats an error
u cant use that like  and 
u cant use - at the beginof the varaiable like -sathyanarayanan

 WE USE 
u mostly use  declear variable sathyaNarayanan like camele case
u can use $,_ at the begin of the variable like
$sathyanaryanan or _sathyanaryanan
u can UPPERCASE or lowercase also to declear variable like SATHYANARAYANAN OR sathyanrayanan
*/

let college='skasc';
college='psg tech';
console.log(college);

//var
var school='sgnhss';
console.log(school);
//or
var school;
school='psg';
console.log(school);
// we can change the values in let and var after assining the values


//const
const youtube='A2D';
console.log(youtube);
//const means constant we cant change the values umless u cant use like  var and let


//ex1. create variable name and store ur name
let sn='sathya';
console.log(sn);
//ex2. create variable name (yt) and store programmer
let yt;
yt='programmer'
console.log(yt);
//ex3. crete variable name (gender) and store your gender
var gender;
gender='male';
console.log(gender);
//ex 4 create vaiable name (twiier) and store your unsername
var twitter='sathyanrayanansakthi';
console.log(twitter);


/*primitive data  types
1.number
*/
let a=100;
console.log(a);

//basic math opertors
console.log(2+2); //add
console.log(2-2); //sub
console.log(2*2); //multiple
console.log(2/2); //divison 
console.log(2%2); //modules divident
console.log(2**2); //exponent power


//increment operator  used to increase the value
let counter=0;
counter++;
console.log(counter);

let increase=100;
increase++;
console.log(increase)

//decrement operator used to decrese the value 
let dec=10;
dec--;
console.log(dec);

let decrese=100;
decrese--;
console.log(decrese);


//ex1 cretae a varible name (firtsNumber) and store ur fav.number
let firstNumber=46;
//ex2 create a varibale name (secondNumber) and store ur fav.number
let secondNumber=45;
//ex3 add the both the numbers
console.log(firstNumber+secondNumber);
//ex4 subtract the numbers
console.log(firstNumber-secondNumber);
//ex5 multiple the numbers
console.log(firstNumber*secondNumber);
//ex6 divide the numbers
console.log(firstNumber/secondNumber);
//ex7 check the values
console.log(firstNumber%secondNumber);
//ex8 check the power of first value
console.log(firstNumber**secondNumber);


//booleans => means true or false
/*
falsy values means false values  false,null,undefinded,0,-0,NaN,'',"",
*/
//ex for time stanp 1:00:00 refer and do that


//comparsion operator 2 types of operators
 /*
->relational operator 
->eqality operator
*/

/*relational operators
greater than >
less than  <
greater then or equal to >=
less then or equal to <=
*/
console.log(10>10); //false 
console.log(10>10); //false
console.log(10>=10); //true
console.log(10<=10); //true


//equality operators
/*
=== strict equality (type+value)
!==strict non-equlity operator
==lose eqality operator
!==lose not equality operator
*/
 
//strict equlity operator triple ===
console.log(10==='sn');  //false
console.log(101 ===101); //true
console.log(101 === 1); //false
console.log(10==='10'); //false

//strict non equlity operator !==
console.log(10!==10); //false 
console.log(10!=="10") ; //true
console.log(10!=='sn');  //false

//lose equlity operator
console.log(10==10); //true
console.log(10=='10');// true

//lose not equal operator
console.log(10!==10); //false
console.log(10=='20');// false


//ex on timestamp 1:22:00 look on it it will he use full


//strings
//text use strings a we can use  '',""  for strings
let fName='sathya';
console.log(fName);

let Sname="kp";
console.log(Sname);

//string concatenate  means linking together in one unit
let fN='sn';
let Sn="kp";
let fullName=fN+Sn;
console.log(fullName);  
//for space in between we have 2 types adding  EX:fN+''+Sn at the last let


//Append operator
let FN='sn';
FN += 'S';
console.log(FN);

//Length operator is used to check the lenght of the variable
console.log(fName.length);
 
//cases  used to convert all lower to upper case all lower to upper case 
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//slice operator  use to cut the string  (starting value ,ending value )
console.log(fName.slice(0,3));  //sathya is the string 
console.log(fName.slice(1,2));

//split ana join operator
//spilt is used to split the string  joinis used to join a string

//split
console.log(fName.split(''));
console.log(fName.split(""));



//includes if use the lwtter it will diaplay true if not it will display false
console.log(fName.includes('s'));



//trim use to remove the empty space
let str='Sathya      ';
console.log(str.trim());


//backticks is used to write code in multiple line and double and single quotes are use to in single line only
let desc=`This is some random text used 

for this code`
console.log(desc); //this will repeat same as we written 
//in backticsk we can use append also

//ex1 create a varaible name and store ur fav name
let favFname='Karthik';
console.log(favFname);
//ex2 create a variable name and store ur fav lastename
let favLame='Prakash'
console.log(favLame);
//ex3  concatnate both variable
let favName=favFname+favLame;
console.log(favName);
//ex4 uppercase 
console.log(favName.toUpperCase());
//ex5  refer 1:45:00
//ex6
//ex7

//type conversion  
let coin=1;
console.log(typeof coin);

let note='10';
console.log(typeof note);  


//convert string to number or sting to number
let page='10';
page=parseInt(page)   //this used to convert string to number and number to string
console.log(typeof page);

//second way  this way disnt work to me
let pag='10';
pag = +pag;
console.log(typeof pag);
//third wayin 1:48:00

//convert string to decimal 
let toss='10.0239';
toss=parseFloat(toss);
console.log(toss);

