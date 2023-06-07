// Array Methods

//push = adds item(s) to the end of an array
let array = ["a", "b", "c", "d", "e", "f"]
array.push("g", 1, "z")
console.log(array);

//pop = removes item(s) from the end of an array
array = ["a", "b", "c", "d", "e", "f"];
array.pop();
array.pop();
console.log(array);

//shift = removes an item from the start of an array
array = ["a", "b", "c", "d", "e", "f"];
array.shift();
console.log(array);

//unshift = adds  items to the start an array
array = ["a", "b", "c", "d", "e", "f"];
array.unshift("g", 1, "z");
console.log(array);


//spread - is mostly used for combining an array
array = ["a", "b", "c", "d", "e", "f"]
let newArray = [...array, "g", "h", "i"];
console.log(newArray);


//reverse
console.log(array.reverse());


//find
let studentsArray = [
    {id : 12 , name : "Jane", gender : "f"} ;
    {id : 13 , name : "Robb" , gender : "m"};
    {id : 34 , name : "Gertrude" , gender : "m"} ;
    {id : 38 , name : "Nonye" , gender : "f"};
]

   
let student = studentsArray.find(x => x.id === 34);
console.log(student);


//filter
let femaleStudents = studentsArray.filter(x => x.gender ==
    console.log (femalestudents))


//map function==> Assignment


// FUNCTIONS
function doSomething(parameter) {
// write the code you want the function to run
}

const doSomethingElse = (parameter1, parameter2) => {
// write the code you want the function to run
}

function addNumbers (x, y, z){
    console.log (x + y + z);
}

addNumbers (3, 5, 8);
addNumbers (2, 15, 10);


function pythagoras (opp, adj) {
    // ist method
    console.log((opp**2 + adj**2)**0.5);

    // 2nd method
    //console.log(math.sqrt(opp**2 + adj**2));
}

pythagoras (3, 4)
pythagoras(6, 8)
pythagoras ( 7, 24)
pythagoras(5, 12)
