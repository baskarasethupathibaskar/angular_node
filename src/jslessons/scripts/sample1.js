function doSomeTask() {
    const x = 100 ;
    const y = 20 ;
    console.log( 'x: ' + x + 'y: ' + y);
}

doSomeTask();
console.log('completed');

function outer() {
    const outerVar = 'Hey I am outer var';
    // console.log(outerVar);
    function inner() {
        const innerVar = 'Hey I am inner var';
        console.log(innerVar);
        console.log(outerVar); // closure - captured variable
    }
    // console.log(innerVar); //ReferenceError: innerVar is not defined
    // inner() ; // call to inner() from outer()
    return inner;
}
// outer() ;
// inner() ;
//outer.inner(); -- outer.inner is not a function
const innerFunc = outer();
innerFunc() ;
innerFunc = null;