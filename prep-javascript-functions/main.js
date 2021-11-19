function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return (60) * (hours);
}
var sumOfHoursToMinutes = convertHoursToMinutes(2);
console.log('Convert Hours to Minutes', sumOfHoursToMinutes);

function getGreeting(name) {
  return 'Hello ' + (name);
}
var greeting = getGreeting('World!');
console.log(greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}
var sumOfAddAndMuliplyBy5 = addAndMultiplyBy5(10, 5);
console.log('Sum of Add and Mulitply by 5:', sumOfAddAndMuliplyBy5);

function mulitplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}
var sumOfMultiplyAndDivideBy5 = mulitplyAndDivideBy5(35, 10);
console.log('Sum of Multiply and Divide by 5:', sumOfMultiplyAndDivideBy5);

function subtractTwoNumbers(x, y) {
  return x - y;
}
var sumOFSubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log('Sum of Subtract Two Numbers', sumOFSubtractTwoNumbers);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}
var sumOfGetCircleCircumference = getCircleCircumference(5);
console.log('Sum of Get Circle Circumference', sumOfGetCircleCircumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var FullName = getFullName('Alexander ', 'Davis');
console.log(FullName);

function cube(x) {
  return x * x * x;
}
var sumCube = cube(5);
console.log('Sume of Cube', sumCube);
