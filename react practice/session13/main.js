// ES6 Topics

// 1)Let
// function print(){
//     let y=6
//     console.log(x,y)
// }

// console.log(x,y);  //X is printed before initialisation

// let x=5

// print()

//2)Const
//Value assign as const is can't be changed

// 3)Template Literals

//We can initailize a variable value into a string using template literals

//Syntax:
//      ${variable value}

//Example:
    // let nam="Deepak"
    // console.log(`My name is ${nam}`);

//4)Default value for function in arguments
//We can give a default value to function as arguments at function declaration  without initialize in function call

//Example:
// function four(a,c,b=6,d=4)
// {
//     console.log(a,b,c,d);
// }

// var a=10,c=12
// four(a,c)

//Output 10 6 12 4
//a and c value are given as arguments in function call ,,, b and d are given as default value in function declaration

//5)Arrow funtion

//Assign a function into variable
//{} can be reduced when the function contains a single line statements

//Syntax:
// const variable_name=(()=>statements)

//Example

// const arrow1 = () => {
//   console.log("Hi");
// };
// arrow1();
// var a = 5;
// const arrow2 = (a) => {
//   console.log(a);
// };
// arrow2(a);


//6)Modules
    //Exporting and importing a function or value from one JS module to another
    //Export --> We can use multi export in a module
    //Export default --> We can use only one export default in a module
    //Import --> 
                // we import  default export like this "import export_name from "file path"  "
                // we import normal export like this  " import {export name} from "filepath" "
// import {age,gender} from "./test.js"

// console.log(`My name is ${name}`);
// console.log(`My name is ${age}`);
// console.log(`My name is ${gender}`);


// Spread operator

// var arr=[1,2,3,4,5]
// var arr1=[...arr] // when a array is deconstruct by spread operator and assigned into a anther variable, the value only passed.
// arr1.push(6)
// console.log(arr,arr1)//So if we change anything in the second array doesn't change the first array.

