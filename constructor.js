class student{
    constructor(){
        this.name="sai";
    }
    display(){
        console.log("Constructor without parameters Student name is "+this.name);
    }
}
class student1{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("Constructor with parameters Student name is "+this.name);
    }
}
let s=new student();
s.display();
let s2=new student1();
s2.display();
