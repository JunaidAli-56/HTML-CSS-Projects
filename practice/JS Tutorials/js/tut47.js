console.log('this is tut 47 Js');

let regex = /Jarviz/;
// let look into some metacharacter symbols
let str = "Jarviz is a program and jarviz said code with jarviz";

// '^' means expression will match if string will start with same vraiable example:{'ja'rviz}
regex = /^Ja/;

// '$' means expression will match if string will end with same vraiable example:{jarv'iz'}
regex = /iz$/;

// '.' means expression will match any one character of string example:{ja'r'viz}
regex = /Ja.viz/;

// '*' means expression will match '0' or more character of string example:{j'a'rviz}
regex = /J*viz/;

// '?' after character means that character is optional
regex = /Je?vizn?/;

// '\*' means match exact j*viz. its not 0 or more.
// let str = "J*viz is a program and jarviz said code with jarviz";
regex = /J\*viz/;

let result = regex.exec(str);
console.log('This is the result from: ', result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}