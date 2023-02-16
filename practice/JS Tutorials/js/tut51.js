console.log('this tut 51 js');

//Iterators...............................................

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object;
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object.
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // we will return below object with only done.
                return {
                    done: true
                }
            }
        }
    }
}
const myArray = ['Apple', 'Orange', 'Grapes', 'Banana'];
console.log("the array is ", myArray);

// using the Iterator..
const fruit = fruitsIterator(myArray);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());

// console.log(fruit.next().value);
// console.log(fruit.next().value);
// console.log(fruit.next().value);
// console.log(fruit.next().value);
// console.log(fruit.next().value);

