console.log("This is tut 57 js");

// Maps in JavaScript
// we can use any key or value
// maps are key and value pairs in which we store key values.

const myMap = new Map();
console.log(myMap);

const key1 = "myStr", key2 = {}, key3 = function () { };

// Setting map values

myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank obj");
myMap.set(key3, "this is an empty function");
// myMap.set(key3, {value: "this is an empty function"});
console.log(myMap)

// Getting values from a MAp
let value1 = myMap.get(key1);
console.log(value1);

// Get the map size:
console.log(myMap.size);

//You can loop using for-of to get key and values
for (let [key, values] of myMap) {
    console.log(key, values);
}

//Get only keys:
for (let key of myMap.keys()) {
    console.log("the key is", key);
}

//Get only value:
for (let value of myMap.values()) {
    console.log("the value is:", value);
}

// you can loop through a map using for each loop

myMap.forEach((value,key)=>{
    console.log("key is:",key);
    console.log("value is:",value);
})

//Converting map to Array;
 let myArray = Array.from(myMap);
 console.log('Map to Array is:',myArray);

//Converting map to key of Array;
 let mykeyArray = Array.from(myMap.keys());
 console.log('Map to keys of Array is:',mykeyArray);

//Converting map to values of Array;
 let myvalueArray = Array.from(myMap.values());
 console.log('Map to value of Array is:',myvalueArray);