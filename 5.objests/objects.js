//object is used to store data and it is allow us to store data with lables
//objects uses {} and arrays uses [] 
let person={
    firstname:'Sathya' ,
    lastname:'Naryananan',
    phone:8122103066,
    location:['[planet ', 'earth'],
    isprogrammer:true,
};
console.log(person);  


//accessing items 2types of accessing the item
console.log(person.phone);  //one type
console.log(person.firstname);

console.log(person['firstname']); //another type

//adding elements
let people={
    firstname:'huxn',
};
people.lastname='webdev',
people.location=['planet' ,'earth'],
console.log(people);

//deleting an element //it will delete the particular value
delete people.location;
console.log(people);

//time stamp 3:25:00
//ex1 create an object
let create={
    car:'BMW',
    model:'m3',
    year:2020,
}
console.log(create);
//ex2 add values
create.color='Blue';
console.log(create);
//ex3 check the type of the object
console.log(create.type);
//ex4 update the object
create.speed=250;
console.log(create);
//ex5 add new property
//ex6 log to console