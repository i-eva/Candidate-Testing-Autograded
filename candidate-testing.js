const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";


//TODO: Variables for Part 2
//TODO 2.1: Define questions and correctAnswers variables as arrays. 
//          Use the table from the textbook to fill these arrays.
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // Replace your code from TODO 1.2b with a loop that programmatically asks 
  // each question in the array and stores the user’s responses.

  // code from 1.2b: candidateAnswer = input.question(question);

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer === correctAnswer) {
  //  console.log("Great job! That is correct.");
  //  } else {
  //   console.log("I'm sorry, that is not correct.");
  //}

 // Replace the basic feedback from TODO 1.2c with a template literal 
 // that displays each of the candidate’s responses in addition to the 
 // corresponding correct answers.

 for (let i = 0; i < questions.length; i++) {
  console.log(`The questions was: ${questions[i]}
  You responded: ${candidateAnswers[i]} 
  The correct answer is: ${correctAnswers[i]}.`);
  }
  

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
// Tip: (Number of Correct Answers) / (Number of Quiz Questions) * 100

  let numberOfQuizQuestions = questions.length;

  // console.log (numberOfQuizQuestions); <- test passed
  // to get the number of correct answers, correct for case sensitivity.
  // Convert candidateAnswers[] and correctAnswers[] to lowercase.

  let modifiedCorrectAnswers = [];
  let modifiedCandidateAnswers = [];
  for (i = 0; i < numberOfQuizQuestions; i++) {

  // console.log(candidateAnswers[i], correctAnswers[i]); <- syntax test passed
  // console.log((candidateAnswers[i]).toLowerCase(), 
  // correctAnswers[i].toLowerCase()); <- syntax test passed

    modifiedCandidateAnswers.push(candidateAnswers[i].toLowerCase());
    modifiedCorrectAnswers.push(correctAnswers[i].toLowerCase());
    console.log(modifiedCandidateAnswers, modifiedCorrectAnswers);

  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Welcome, ${candidateName}! We're glad you're here.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};