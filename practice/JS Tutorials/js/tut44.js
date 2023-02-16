console.log("this is tut 44 js");

// Error handling tut:

let a = "jarviz is perfect AI example";
a = undefined;
if (a != undefined){
   throw new Error('this is not undefined');
}
else{
    console.log('this is undefined');
    
}

// try means try to run js
// in 'try' no  error show. error show in catch.
try {
    console.log('We are inside try block');
    
    functionjarviz();
} catch (error) {
    console.log(error);  
    // console.log(error.name);  
    // console.log(error.message);  
}
// In 'finally" we will show error if there is in 'try' block or 'catch' block.
finally{
    console.log('finally we will run this ');
    
}