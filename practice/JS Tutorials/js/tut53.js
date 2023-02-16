console.log('this is tut 53 js');

// Generators in js: means its generate onfly values.
// 1 to 1B 
//onfly means jab ap ko cahyein. value...
function* numbersGen(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;

     while(true){
       yield i++;
       //due to this syntax we convert an object into string.
      //yield (i++).toString();
     }
}

const gen = numbersGen();
// console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
