var person ={
    uname:"prasanna kumar reddy",
    age:23,
    height:"5.9f",
    gender:"male",
    color:"brown",
    hobbies:["cricket","researching","eating"],
    isMarried:false,
    address:{
        houseNo:"1/11A",
        street:"pathaKandukur",
        city:"kurnool",
        pincode:518543
    },
    eating:function(){
        console.log(this.uname+"  is eating.....");
    },
    sleep:function(){
        console.log(this.uname+"  is sleeping....");
    }
}
console.log(person);
console.log(person["uname","age","gender","color"]);
document.writeln(person.uname+"\n");
document.writeln("here i am using document of writeln method ");
document.write("this is used to print any data web-page");
