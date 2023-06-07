// alert ('Connected') 
// console.log ('Connected') 


// 1. Data and Variable Types 
// Data types includes; String List, number, boolean, array, null 

// Variable Types Includes;
// const, let and var 

//=== Declaration and assignment of variables ===

const name = 'Oluoma'; //string
const surname = "Okafor"; //string
const state = "Anambra"; //string
let age = 15; //number
var job = 'Banker'; // string
let married = false; // boolean i.e true or false
var height = '1.5m'; // string
let nickname = 'Manarisia'; // string


age = 16; // reassigning a variable 
// name = 'Chidinma' // const cannot be assigned a new value

console.log(name);
console.log(age);


//=== String Concatenation ===
console.log('name +  surname');

//  Oluoma Okafor is from Aanambra State and she is 17yrs banker

console.log(name + " " + surname + " hails from " + state + " state and age is a " + age + " years old " + job);


//Template string

console.log(`${name} ${surname} hails from ${state} state and age is a ${age} 16 years old ${job}`  )


//Arithmetic Operations 

console.log(12+2);// add
console.log(12-2); //subtract
console.log(12/2); //divide
console.log(12*2); //multiply
console.log(12**2); //power
console.log(12%7); //remainder



// Comparison and Logical Operators

// comparison  operations includes 
// ==  is equal to
// ===  is equivalent to
// != is not equal to
// !==  is not equivalent to

  // Logical Operators Includes
/*
&& and 
|| or
*/

// Equality and Equivalence
console.log(3 + 5 == 8); //true
console.log(3 + 5 === 8); // true
console.log(8 == "8" ); //true
console.log(8 === "8"); //false

console.log("3" + "5" == 8); //false
console.log("3" + "5" ==="8"); //false

console.log("3" + "5" == 8); //false
console.log("3" + "5" === 35); //false


// Inequality and Inequivalence
console.log(9 + 5 !=14); // false
console.log(9 + 5 !==14); // false
console.log (9 + 5 != 10); // true
console.log(9 + 5 !== 10); // true
console.log(9 != "9");// false
console.log(9 !=="9"); //true
console.log(9 + 5 != "14"); // false
console.log(9 + 5 !=="14");//true
console.log("9" + "5" !== "14");// true
console.log("9" + "5" != "14");// true
console.log("9" + "5" !="95");// false
console.log("9" + "5" !=="95");// false
console.log("9" + "5" !==95);//true



console.log("=====conditional statement")
//Conditional Statement

// if satement
// if else statement
// if else if statement
// ternary operators
// conditional  and statement
// switch statement



if(2+4=== 6) {
    console.log ("correct")
}else{
    console.log(incorrect)
}

// if else statement
if(2+4===6){
    console.log("Ist is correct");
}else if (3*8 === 24){
    console.log("2nd is correct");
}else if (45 - 30 ===15){
    console.log("3rd is correct");
}else if (16/2 === 8){
    console.log("4th is correct");
}else{
    console.log("None is correct");
}


// Ternary Operator
2 + 4 === 6 ? console.log("correct") : console.log("incorrect")

// Ternary Operator for if else statement

2 + 4 === 6 ? console.log("ist is correct") :
3 * 8 === 24 ? console.log("2nd is correct") :
45 - 30 === 15 ? console.log("3rd is correct") :
16 / 2 === 8 ? console.log("4th is correct") :
console.log("None is correct") ;


// Conditional Statement
2 + 4 === 6 && console.log("correct") ;



// Take Home : Switch statement

// expression
// case


// Conditional Logical Operations

if(2 + 2 === 4 || 3 * 8 === 24){
    console.log(true);
}else{
    console.log(false);
};

if( 2 + 2 === 4  && 3*8 === 24){
    console.log(true);
}else{
    console.log(false);
}








