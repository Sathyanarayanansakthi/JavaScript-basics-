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
let mixed=['AP','TN',1,2,3,true];
console.log(mixed);
//ex 5 now accessthe [] notation item


//advance array method
const fruits=['Apple' ,'Mango ','Orange','Pineapple','Grapes','Lemon'];
console.log(fruits);

//push add the new values at the end of the array
fruits.push('banana');
console.log(fruits);

//pop used to remove value at the last of the array
fruits.pop()
console.log(fruits);

//shift used to remove the value at the first of array
fruits.shift()
console.log(fruits);

//unshift  used to insert the values at the satting of array
fruits.unshift('Fig')
console.log(fruits);

//concate used to add more than one array at the end of the array
const more=['Dry grapes','Dry apple'];
const total= fruits.concat(more);
console.log(total);

//
let pl=['js','ts','py','golang'];
let number=[1,2,34,5];
console.log(pl.includes('rust'));   //fasle becaus in the arrays we didnt add rust

//join 
console.log(pl.join('-'));  //used in express and node js importance

//reverse used to reverse the array
console.log(pl.reverse());

//slice used to slice the array
 console.log(pl.slice(0,2));

 //sort used to sort the number
 console.log(number.sort());
