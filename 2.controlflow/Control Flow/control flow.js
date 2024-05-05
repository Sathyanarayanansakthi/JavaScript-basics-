//control flow

//conditonal statemnets

//if  if the condition is true it will excute the code

let a=10; //if we change the value we can c the output clearly
let b=10;
if( a > b) {
 console.log('a is greather then b');
}
//else if the  if coniditon  fails it will excute else if statement
else  if( a < b){
    console.log('a is less than b');
}
//else 
else{
    console.log('a is equal to b');
} 

// ex1 create variable name password store nothing
let password; //here change the values  near the password  and it will works
//ex2 if password is equal to 8 print 'Welcome'
if (password===8){
    console.log("welcome");
}
//ex3 if password is less than or equal to 8 print "Passqord is small"
else if(password<=8){
    console.log('passowrd is too small');
}
//ex4 if password is greater  than or equql to 8 pront "too long password and "password should be 8 charaters
else if(password>=8){
console.log('too long password');  
console.log('passworwd should be 8 characters');
}
//ex5 if all fails print "please provide a password"
else {
    console.log('please enter your password');
}

//switch statements  statement  to select one of many code block to executed
let x=0;    
let bulb;
switch (x) {
    case 0:
     bulb="off";
     console.log(bulb);
     break;
    case 1:
        text="on";
        console.log(bulb);
        break;
     default:
        bulb="no value found";
        console.log(bulb);
}


let day="monday"; // change the day to  ur wish in thisn line
switch (day){
    case "monday":
        console.log("today in monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    case "wednesday":
        console.log("today is wednesday");
        break;
    case "thus":
        console.log('today is thus');
        break;
    case "fri":
        console.log('today is thus')
        break;
    case "sat":
        console.log('today is thus')
        break;    
    case "sun":
        console.log('today is thus')
        break;
    default:    // if u  a new word it will return the default value
        console.log('dont know what day it is')    
        
}



//ex1 create variable name fruit store 'banana'
let fruit="banana";
switch (fruit){
//ex2 case 'banana' print 'banana isa good'
case 'banana':
    console.log('banana is good');
    break;
//ex3 case 'orange' print 'orange is not good'
case "orange":
    console.log('orange is not good')
    break;
//ex4 case 'apple' print 'how you like apple '
case "apple":
console.log('how you like  apple')
break;
//ex5 defult 'i have never heard of that furit'
default:
    console.log('i have never heard of that furit');
}

//looping
//for loop  used to repeat the  set of code
for (let index = 0; index <= 5; index++) {  //in index we can give an value thatis starting value 
 console.log('hello world' , index);
}
//ex1 print ur name and number from 0 through 10
for (let ind=0;  ind<=5; ind++) {
    console.log('sn' ,ind);
    
}
//nested loop
for (let i=1; i<=5; i++){
    console.log('outer loop',i) ;
    //nested loop
    for (let j=1;  j<= 5; j++) {
        console.log('inner loop' ,j);
    }
}


//while loop
let y =1;
while (y <= 3) {
    console.log('hello world ',y);
    y++; //without y++ it will excute countless times and it will crash the broswer
}
//ex 1 
let Sn=5;
while(Sn <=10){
    console.log('Hi Soilders' ,Sn)
    Sn++;
}
//do while loop
let z=5;
do{
    console.log('hello ',z)
    z++;
}while(z <=8);

//ex1 
let q=4;
do{
    console.log('Sn' ,q)
    q++;
}while(q <= 7);



