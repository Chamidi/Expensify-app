//This file is not related to Expensify-app
//Object destructuring
const person = {
    name: 'Chamidi',
    age:22,
    location:{
        city:'Kurunegala',
        temp:26
    }};

const {name='Anonymous',age} = person;
const{city,temp}=person.location;

console.log(`${name}is ${age}.`);

if(city && temp){
    console.log(`It's ${temp} in ${city}`);
};

//Array destructuring

const address=['1299','Kurunegala','NWP','Sri Lanka'];


//this is destructured by array index
const [street, city, , country='UK']=address;

console.log(`You are in ${street} ${city} ${state} ${country}`);
