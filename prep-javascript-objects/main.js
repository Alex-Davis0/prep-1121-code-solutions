const person = {
  firstName: 'Alexander',
  lastName: 'Davis',
  hobby: 'playing chess'
};
console.log(person);
var text1 = person.firstName;
var text2 = person.lastName;
var fullName = text1 + ' ' + text2;
console.log(' This persons name is', fullName);
person.job = 'Instructional aide';
console.log(' This persons current job is:', person.job);
person.previousJob = ' None';
console.log(' This persons previoous job is:', person.previousJob);
console.log(person);
