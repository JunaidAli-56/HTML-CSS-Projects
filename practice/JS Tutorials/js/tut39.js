console.log("This is tut 39");
// there are three types of promises
// Promise: Best video on  promises
// -reslove: ya promise reslove kary ga,
// -reject : ya reject.
// -pending: execute ky time py promise pending hoga.

// Promise is an object: 

function func1(){
    return new Promise(function(reslove,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Function:Your response has been resolved');
                reslove();
            }
            else{
                console.log('Function:Your response has not been resolved');
                reject('Sorry not fulfilled');
            }   
        }, 2000);

    });
}
func1().then(function(){
    console.log("Jarviz:Thanks for resolving");
}).catch(function(error){
    console.log("jarviz:very bad bro. Reason: " + error);
})