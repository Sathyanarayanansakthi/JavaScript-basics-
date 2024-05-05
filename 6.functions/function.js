//functions is a block of code used to perform a specific task
//fuction makes code reuseablity
//DRY dont repeat yourself
//increase readabilty  //fuction fname(){code} call the function

//function declearion
function greet() {
 console.log('Hi Soilders');
}
greet();
greet(); //calling the functions


//passing arugments into the function
function sayhello(name) {
    console.log(`hello ${name}`);  //for parameter u need to use `` this one
}
sayhello("huxn");
sayhello('alex');

//return keyword in function
function add(x,y) {
    return x + y;
}
                        //console.log is only for dev not for client 
const res1= add (10,30);
const res2=add(100,200);
console.log(res1);
console.log(res2);

//ex1 create a function

//ex2 this function will take 2 parameters
//ex3 any number we pass as arugumnets it will mulitply that number
function FavNumber(a,b){
    return a * b;
}
//ex4 as argument pass your favnumvber
const nub = FavNumber(2,1);
//ex5 log the value
console.log(nub);


//3:40:00
//function expression a function expression is a way to define a function as a value and assign it to a variable. Unlike function declarations, which are hoisted to the top of their scope, function expressions are not hoisted, meaning they cannot be called before they are defined.
const greeting=function (user) {
    console.log(`hello ${user}`)
}
greeting('jhon')

//callback function