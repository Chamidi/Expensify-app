
class Person{
    constructor(name='Anonymous',age='0'){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi! I'm ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

//sub class
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
        //!! shows whether string is empty or not. If it's empty it gives false 
    }

    getDescription(){
        let description=super.getDescription();

        if(this.hasMajor()){
            description+= `His major is ${this.major}`;
        }
        return description;
    }
}

class traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting=super.getGreeting();

        if(this.hasHomeLocation()){
            greeting+= `I'm visiting ${this.homeLocation}`;
        }
        return greeting;
    }
}


const me=new Student('chamidi',22,'Electronics');
console.log(me.hasMajor()); 