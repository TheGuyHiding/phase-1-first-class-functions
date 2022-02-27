function receivesAFunction(callback){
    callback();
}

function myFunction(){
    receivesAFunction(callback);
}

function returnsANamedFunction(){
    return myFunction;
}

var foo = function(){}

function returnsAnAnonymousFunction(){
    return foo; 
}
// The test says I've failed, though I'm pretty sure I did return an anonymous function, please help.
