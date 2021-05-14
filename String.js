console.log('---------// toLowerCase & toUpperCase----------');
var txt='This is my String';
console.log(txt.toLowerCase());
console.log(txt.toUpperCase());

console.log('---------// charAt----------');
console.log(txt.charAt(5));

console.log('---------// indexOf----------');
console.log(txt.indexOf('m'));

console.log('---------// concat----------');
console.log(txt.concat(' for Today'));

console.log('---------// includes----------');
console.log(txt.includes('my',4));
console.log(txt.includes('my',10));

console.log('---------// replace----------');
console.log(txt.replace('my','our new'));

console.log('---------// substr----------');
console.log(txt.substr(4,8));

console.log('---------// trim----------');
var txt2='              This is my new String               ';
console.log(txt2.trim());