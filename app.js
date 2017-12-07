'use strict'
var counter = 1;
var firstQuestion = prompt('Are you having a good day? yes or no?');
console.log ('firstQuestion:', firstQuestion);

if (firstQuestion === 'yes') {
  alert('Good im glad to hear it!');
  counter++;
}else{
  alert('Im sorry to hear that!');
}

var questionTwo = prompt('Is it raining outside? Yes or no?');
console.log ('questionTwo:', questionTwo);

if (questionTwo === 'yes') {
  alert('Im sorry I hope it clears up!');
  counter++;
}else{
  alert('Why are you on your computer get outside!');
}

var questionThree = prompt('Is it lunchtime?');
console.log ('questionThree:', questionThree);

if(questionThree === 'yes') {
  alert('Eat up buddy!');
  counter++;
}else{
  alert('Get back to work dawg!');
}

var questionFour = prompt('Do you like cats or dogs better?');
console.log ('questionFour:', questionFour);

if (questionFour === 'cats'){
  alert('I dissagree I think dogs are better!');
  counter++;
}else{
alert('I like dogs as well!')
}

var questionFive = prompt('How many dogs do I have?')
console.log ('questionFive:', questionFive);

var dogs =[1,2,3,4,5];
var flag;

for(var i = 0; i < dogs.length; i++){
  console.log('each iteration:', dogs[i]);
  counter++;
  if (questionFive === dogs[i]){
    alert('You are correct!')
    flag = true;
    break;
  }
}
if (!flag) {
  alert('Sorry you are incorrect!');
}

var questionSix = prompt('How many days til world war 3?')
console.log('questionSix', questionSix);
var count = 0;
count++;
var days = 120;
var i = 0;
while (i < 5) {
  if (questionSix < 120){
    alert('Your guess was too low!')
  }
  if (questionSix > 120){
    alert('you guessed too high!')
  }
  if (questionSix === 120){
    alert('You are correct good sir!')
      break;
  }
}
