console.log("this is tut 34.Js");

//Due to this process we get response very slow because this program firstly print the i numbers and then print the"done printing". this process block the program until loop is done it is slow process.
//It is Synchronous programing (slow);

// for (let i = 0; i < 23; i++) {
//     const element = i;
//     console.log('this is i number' + i);
    
// }
// console.log("Done Printing");

// But due to this process response didn't slow because loop will running in the background it doesnt block the program and print the "Done Printing" so it is fast method to get respone.
//It is Asynchronous programing (Fast); 

setTimeout(() => {
    for (let i = 0; i < 23; i++) {
        const element = i;
        console.log('this is i number' + i);
        
    }  
},100);
console.log("Done Printing");