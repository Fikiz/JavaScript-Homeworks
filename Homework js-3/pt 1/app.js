function checkType(input){
    const type = typeof input;
    console.log(`Type of ${input} is: ${type}`);
}



// Test with different types
checkType({});           // object
checkType(true);         // boolean
checkType(42);           // number
checkType("Hello");      // string
checkType(undefined);    // undefined