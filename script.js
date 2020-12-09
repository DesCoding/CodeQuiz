//variables to select html elements and store id or class references
const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quizQuestions');
const resultsContainer = document.getElementById('results');
const gameTimerEl = document.getElementById('gameTimer');
var secondsLeft = 100;
var score = 100 - secondsLeft;

var highscore=[]

//functions to ask questions and show/track results
function buildQuiz(){
  //store the html output
  const output = [];
}

function showResults(){
  var bragHighscore = JSON.parse(localStorage.getItem("highscore"))
  highscore=[]
  
  if (bragHighscore !== null){
    highscore.push(bragHighscore)
    
    for(var i=0; i < bragHighscore.length; i++){
      let resultsPlacement = document.createElement("p")
      resultsPlacement.append("Player Initials: " + bragHighscore[i].userName + " High Score: "+ bragHighscore[i].highScores)
      resultsContainer.append(resultsPlacement)
      console.log(resultsPlacement)
  }
  }
}

var timerInterval;

function showQuestions(){
  timerInterval = setInterval(function() {
    secondsLeft--;
    gameTimer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
   }

  }, 1000);
  pickQuestions(0)

}

var i = 0;

function nextQuestion(){
  i++;
console.log(this)
   if(this.value === "correct"){
    score++; 
  
  //Time penalty subtracts 15 seconds from timer if answer is incorrect.
  } else {
    secondsLeft = secondsLeft - 15;
  }  
  if(i<myQuestions.length){
    console.log(myQuestions.length)
  pickQuestions(i) 

  }else {
  //clears final question from the screen
  quizContainer.innerHTML=""
  //prompting user to input initials
   var initials = prompt("Please enter your initials.")
   //stops the game time
   clearInterval(timerInterval);

  //create object to capture initials and high score
  var myScore = {
    userName: initials,
    highScores: gameTimerEl.innerHTML
  }
 
  //adding my score object data to the array of highscore
  highscore.push(myScore)
  console.log(myScore)
  //alerting user of thier score
  alert("Hello " + initials + " your highscore is "+secondsLeft)
  i = 0;
   
  //set updated high score array to local storage
  localStorage.setItem("highscore", JSON.stringify(highscore))
  showResults()
} 
}

//choose quesitons and assign styling for correct vs not correct answers
function pickQuestions(index){
  console.log(index)
  quizContainer.innerHTML = "";
  quizContainer.append(myQuestions[index].question)
  
  for(var i=0; i < myQuestions[index].answers.length; i++){
  const button = document.createElement("button")
  const buttonPlacement = document.createElement("p")
  button.innerHTML=myQuestions[index].answers[i];
    
  button.addEventListener('click', nextQuestion)
 
  if(myQuestions[index].answers[i] === myQuestions[index].correctAnswer){
  button.setAttribute("value", "correct")
  button.setAttribute("class", "correctAnswer onClickAnswer")
  }
  else{
    button.setAttribute("value", "wrong") 
    button.setAttribute("class", "wrongAnswer onClickAnswer")
  }
  buttonPlacement.append(button);
  quizContainer.append(buttonPlacement);
  }
}
  showResults()

// After click of start button, show questions
startButton.addEventListener('click', showQuestions)


//array of questions for quiz
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
      correctAnswer: "all of the above"
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
        "Comment where appropriate to assist others who may work in the code at a later date.",
        "Practice D.R.Y. (don't repeat yourself) to esnure code is logical and consise.",
        "Collaborate with others to problem solve.",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
  ];


