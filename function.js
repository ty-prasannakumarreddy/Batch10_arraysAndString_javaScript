//function type 1
// This is named function which has a name for the function......
function myFunction(){   
    console.log("this is name function");
}
//function type 2
// This is expression or anonymus function which does not have function name....
var ex_function =  function(){
    console.log("here i'm using the function expression or anonymus function which means there is no name for this fuction and this function is stored in one variable...");

};
//here we are calling the anonymus function by using the varible name.....
ex_function();

//function type 3
//this is the immeditely invoke function expression
(function(a){

    console.log(a);
    console.log("This is the immeditely invoke function expression.........")
})(10)

//function type 4 arrow function (which is using from ES06 version of ECMA Script...
var arrow = () => {
    console.log("this is arrow function ");

};
arrow();