class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("value in parent class "+this.name);
    }
}
class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;
    }
    display1(){
        super.display();
        console.log("value in child class Name : "+this.name+" roll no :"+this.rollno);
    }
}
let s=new student1("abc",1232);
s.display1();