//logical operator determine equality or difference between variables or values.
//refer 2.40.00
// logical AND &&   This operator returns true if both operands are true; otherwise, it returns false.
const abc=true;
const bbd=false;
const cde=4;
console.log (abc && bbd);

const ads=true;
const fps=true;
console.log(ads && fps );
//logical OR ||    This operator returns true if both operands are true; otherwise, it returns false.
const qq=true;
const ss=false;
console.log(qq || ss);

const qa=false;
const aa=false;
console.log(qq || aa);

const qd=false;
const xa=false;
console.log(qd || xa);

// logical NOT !   like a toggler  This operator returns the opposite boolean value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.



let password='Sathya'
if(password.length >= 6 && password.includes('Sa')){
    console.log('Vaild Passowrd')
}else{
    console.log("Invaild Password");
}

//arrays  is 0 index based used to store multiple values in a single variable.

//empty array   we can use let ,const
let myList=[];
console.log(myList);

//array woth numbers
let Numbers=[1,2,3,4];
console.log(Numbers);

//array with  strings
let strings= ['eat','sleep','ride'];
console.log(strings);

//accessing arrays 
console.log(strings[1]); //at the box braket give the value for accessing the value
 
//nested  array or 2 dimensional array  means array inside array
let nest=['one',['two','three'],1,2,'five'];
console.log(nest);

//accessing index
console.log(nest[1])

//ex1 array name favplace store3 values
let favplace=['Cbe','Mas','Sbc','Py','Vm'];
//ex2 log the first place in the array
console.log(favplace[1]);
//ex3 arrayname favnumber and store 4 values
let favnumbers=[1,2,1,3,4,5];
console.log(favnumbers);
//ex4 mixedarray 
let mixed=['AP','TN'1,2,3,true];
console.log(mixed);
//ex 5 now accessthe [] notation item
