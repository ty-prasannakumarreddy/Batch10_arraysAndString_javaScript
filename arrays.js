console.log('---------// forEach----------');
var colors = ['blue', 'green', 'white', 'yellow', 'red', 'orange'];
function iterate(item, index) {
  console.log(`${item} has index ${index}`);
}
colors.forEach(iterate);

console.log('---------// isArray----------');
console.log(Array.isArray(colors));

console.log('---------// includes----------');
console.log(colors.includes('white'));
console.log(colors.includes('white',3));

console.log('---------// push and pop----------');
colors.push('violet');
console.log(colors);
colors.pop();
console.log(colors);

console.log('---------// shift and unshift----------');
colors.unshift('purple');
console.log(colors);
colors.shift();
console.log(colors);

console.log('---------// splice and slice----------');
colors.splice(2,0,'black','brown');
console.log(colors);
console.log(colors.slice(1,5));

console.log('---------// join----------');
console.log(colors.join("|"));

console.log('---------// indexof----------');
console.log(colors.indexOf('white'));
console.log(colors.indexOf('white',5));

console.log('---------// map----------');
var numbers = [4, 9, 16, 25, 36, 49];
console.log(numbers.map(Math.sqrt));

console.log('---------// filter----------');
var result = colors.filter(color => color.length > 4);
console.log(result);