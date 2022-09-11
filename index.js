var readLineSync = require("readline-sync")
// array , for loop / objects , function
var harshil = {
  name: "harshil",
  age: 22,
  favoriteFood: "idli"
}

var kasak = {
  name: "kasak",
  age: 17,
  favoriteFood: "frankie"
}

var smit = {
  name: "smit",
  age: 16 ,
  favoriteFood: "pizza"
}

var falak = {
  name: "falak",
  age: 14,
  favoriteFood: "cake"
}

var superHeroes = [harshil , kasak , smit , falak]


//till 04
// var answer = readLineSync.question("what is your name? : ")
// console.log("Welcome " + answer);

//till 06
// var age = readLineSync.question("Is your age greater than 12 : ");
// var score = 0;

// if (age === "yes") {
//   console.log("You are correct")
//   score =+ 1;
  
// } else {
//   console.log("You are wrong")
//   score =- 1;
// }
// console.log("You score is : " + score);


//from 07 - function
// var no1 = readLineSync.question("Enter no1 : ");
// var no2 = readLineSync.question("Enter no2 : ");
// function multiply() {
//   var mult = no1 * no2;
//   return mult;
// }
// console.log("Multiplication of " + no1 + " & " + no2 + " is " + multiply(no1,no2))

// {ex08}
// var questionOne = "What is my name? ";
// var answerOne = "harshil";
// var questionTwo = "What is my favroite dish? ";
// var answerTwo = "idli";
// var correctAnswer = "You Are Correct";
// var wrongAnswer = "You Are Wrong";
// var score = 0;

// this was done without function

// var userAnswer = readLineSync.question(questionOne);
// if (userAnswer === answerOne){
//   console.log(correctAnswer);
//   score =+ 1;
// }else{
//   console.log(wrongAnswer);
//   score =- 1;
// }
// console.log("You score is : " + score);

// function play(question,answer){
//   var userAnswer = readLineSync.question(question);
//   if (userAnswer === answer){
//   console.log(correctAnswer);
//   score += 1;
// }else{
//   console.log(wrongAnswer);
//   score -= 1;
// }
//   console.log("You score is : " + score);
// }

// play(questionOne,answerOne);
// play(questionTwo,answerTwo);

// ex 08 - homework

// var number = readLineSync.question("Enter Number: ");

// for(i=0;i<=number;i++){
//   for(j=number;j>=0;j--){
//     console.log("*");
//     number -= number;
//   }
// }

// {*ex 09*}

// var list = ["valueOne", "valueTwo", "valueThree"];
// for(i=0;i<=list.length;i++) {
//   console.log(list[i]);
// } 

// {*ex12*}



// var questionOne = {
//   question: "What is your name",
//   answer: ""
// }

// var questionTwo = {
//   question: "What is my favorite food",
//   answer: ""
// }

// for(i=0;i<=superHeroes.length;i++) {
//   console.log("Your Name is " + superHeroes[i].name);
//   console.log("Your age is " + superHeroes[i].age);
//   console.log("Your favorite food is " + superHeroes[i].favoriteFood);
// } 


// {*ex 14*}

var userName = readLineSync.question("What is your name? ");
console.log("Welcome " + userName)


var correctAnswer = "You Are Correct";
var wrongAnswer = "You Are Wrong";
var score = 0;

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer){
  console.log(correctAnswer);
  score += 1;
}else{
  console.log(wrongAnswer);
  score -= 1;
}
  console.log("You score is : " + score);
  console.log("==================")
}

var questions = [{
   question : "What is my name? ",
   answer : "Harshil"
 } ,
                 {
   question : "What is my favroite dish? ",
   answer : "Idli"
 }]

for(i=0 ; i<questions.length ; i++){
  play(questions[i].question , questions[i].answer);
}