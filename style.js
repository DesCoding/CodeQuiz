//variables to select html elements and store id or class references
const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quizQuestions');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//functions to ask questions and show/track results
function buildQuiz(){
  //store the html output
  const output = [];
 // myQuestions.
}

function showResults(){
console.log("Hi") 
}

function showQuestions(){
console.log("questions")
console.log(myQuestions)
pickQuestions(0)
}

function pickQuestions(index){
  quizContainer.append(myQuestions[index].question)
  console.log(myQuestions[index].answers.length)

  for(var i=0; i < myQuestions[index].answers.length; i++){
  const button = document.createElement("button")
  button.innerHTML=myQuestions[index].answers[i];
  console.log(myQuestions[index].correctAnswer)
  console.log(myQuestions[index].answers)
  if(myQuestions[index].answers[i] === myQuestions[index].correctAnswer){
  button.setAttribute("value", "correct")
  }
  else{
    button.setAttribute("value", "wrong")
  }
  quizContainer.append(button);

  }
  
  }


// After click of submit button, show results
startButton.addEventListener('click', showQuestions)
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
      question: "What does HTML stand for?",
      answers:[
        "Hyper Type Mark Language",
        "Hyper Tag Making List",
        "Hyper Text Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What is CSS an abreviation for?",
      answers: [
        "Cascading Style Sheet",
        "Creative Style Sheet",
        "Commodore Styled Sheet"
      ],
      correctAnswer: "Cascading Style Sheet"
    },
    {
      question: "What does DOM stand for?",
      answers: [
        "Digital Operating Model",
        "Document Object Model",
        "Data Overload Manipulation",
        "None of the Above"
      ],
      correctAnswer: "Document Object Model"
    },
    {
      question: "What JavaScript debugging tool prints data to a browser console?",
      answers: [
        "console.print",
        "console(log)",
        "console.log",
        "console(print)"
      ],
      correctAnswer: "console.log"
    },
    {
      question: "If / Else conditions are surrounded by ____________?",
      answers: [
        "curly brackets",
        "quotation marks",
        "total confusion",
        "parenthesis"
      ],
      correctAnswer: "parenthesis"
    },
    {
      question: "A naming convention, commonly used in JavaScript, which capitalizes the first letter of each word excep for the first letter...",
      answers: [
        "capital case",
        "camel case",
        "coding case ",
        "none of the above"
      ],
      correctAnswer: "camel case"
    },
    {
      question: "Primitive data includes...",
      answers: [
        "strings ",
        "numbers",
        "boolean",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
    {
      question: "Which of the following is an operator used in JaveScript?",
      answers: [
        "%",
        "/",
        "*",
        "all of the above"
      ],
      correctAnswer: "none of the above"
    },
    {
      question: "Math.random generates a ________?",
      answers: [
        "random number between 1 and infinity",
        "random number between 0 and 1",
        "random number between 0 and 100",
        "random math calculations"
      ],
      correctAnswer: "random number between 0 and 1"
    },
    {
      question: "When typing code, the web developer should__________.",
      answers: [
        "comment where appropriate to help other who may work with the code at a later date",
        "practice D.R.Y. (don't repeat yourself) to esnure code is logical and consise",
        "collaborate with others to problem solve",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
  ];



/*
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;

      alert("Good job!");

    } else {

      alert("Please try again.");

    }
}
alert("You got " + score + "/" + questions.length);*/

/*
must be timed
track score
buttons to click for answers
show user score and ask for initials
*/
