console.log('This is tut 49.js');

//Character Classes........................................................

// '\w' word character: 'number' or 'alphabet' or '_' 
let regex = /\war/;
// '\w+' means one or more word charcters. 
    regex = /\w+z5/;
// '\W' means Non word charcters. 
    regex = /\Wauto/;
// '\W+' means one or more  Non word charcters. 
    regex = /\W+auto/;
// '\d' means one digit. 
    regex = /\d999/;
// '\d+' means more than one digit. 
    regex = /number \d+/;
// '\D' means non digit. 
    regex = /\D999/;
// '\D+' means more than one non digit. 
    regex = /\D+999/;
// '\s' Matches the whitespace character. 
    regex = /\snumber is/;
// '\s+' Matches one or more whitespace character.  
    regex = /\s+number is/;
// '\S' Matches non whitespace character.  
    regex = /\Sber is/;
// '\S+' Matches more than one non whitespace character.  
    regex = /\S+ber is/;
// '\b' means word boundary.  
    regex = /mber\b/;

// Assertions............................................................

    // means match "n" whicj next charcter is "u".
    regex = /n(?=u)/;
    // means match "j" which next charcter is not "y".
    regex = /j(?!y)/; 

    str = "jarviz5 @%%automode";
    // str = "*arviz automode";
    str = "jarviz5 @%%automode number 899999999";
    str = "jarviz5 @%%automode    number is 89999jarviz9999";

let result = regex.exec(str);
console.log('The result from exec is ',result);

if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);  
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}