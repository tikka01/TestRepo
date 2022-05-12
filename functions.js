// function statement aka function declaration
a()
function a(){
    console.log("a Hello");
}

// a()

// function expression aka

// b()
var b = function(){
    console.log("b Hello");
}
// b is treated like any other variable. 
// memory not allocated until it is used.

// b()

// Anonymous function are used where functions are used as values.
// For example in base of variable b. 
// variable b is assigned a function.\
 
// Named function expression 
var named = function xyz(){
    console.log('named function expression.');
}
named()


// Parameters and arguments.
function x(param1, param2){

    // Parameters 
}
x(1,2);
// 1,2 are arguments.



// First class functions.
// Functions are treated like any other variable.
// They can be passed as arguments to other functions.
// They can be returned from other functions.
// They can be assigned to variables.
var fn = function(){
    return function(){
        console.log('Hello');
    }
}
console.log(fn());
