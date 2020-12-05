//variables to select html elements and store id or class references
const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quizQuestions');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const gameTimerEl = document.getElementById('gameTimer');
const highscoreDiv = document.querySelector ("#highscore");
const mainEl = document.querySelector("#results");
var secondsLeft = 100;
var score = 0;

//functions to ask questions and show/track results
function buildQuiz(){
  //store the html output
  const output = [];
}

function showResults(){
}

function showQuestions(){
  var timerInterval = setInterval(function() {
    secondsLeft--;
    gameTimer.textContent = secondsLeft + " seconds";

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
  
    //Time penalty subtracts 15 seconds from timer if anwer is incorrect.
  } else {
    secondsLeft = secondsLeft - 15;
  

  }  pickQuestions(i)
}

function pickQuestions(index){
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

// After click of submit button, show results
startButton.addEventListener('click', showQuestions)
submitButton.addEventListener('click', showResults);

var score = 0;
var highscore = 0
if (score > localStorage.getItem("highscore")) {
  localStorage.setItem("highscore", score);
}

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

  // creates input for user to add initials
  let par = document.createElement("p");

  let initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("for","userInitials");
  initialsLabel.textContent = "Enter Initials: ";

  let initialsInput = document.createElement("input");
  initialsInput.setAttribute("id","userInitials");
  initialsInput.setAttribute("name","userInitials");
  initialsInput.setAttribute("minlength","3");
  initialsInput.setAttribute("maxlength","3");
  initialsInput.setAttribute("size","3");


  // mainEl.appendChild(heading);
  // mainEl.appendChild(instructions);
  // mainEl.appendChild(initialsLabel);
  // mainEl.appendChild(initialsInput);
  // mainEl.appendChild(par);
  // mainEl.appendChild(playAgain);

  // playAgain.addEventListener("click", init);

  initialsInput.addEventListener("input", function() {
    initialsInput.value = initialsInput.value.toUpperCase();
    if ( initialsInput.value.length === 3 ) { 

      //create object for this score
      let thisScore = [ { type: quizType, name: initialsInput.value, score: score } ]; 

      //get highscores from memory
      let storedScores = JSON.parse(localStorage.getItem("highScores")); 
      if (test) { console.log("storedScore",storedScores); }

      if (storedScores !== null) { 
        storedScores.push(thisScore[0]); 
      } else {
        storedScores = thisScore;
      }

      localStorage.setItem("highScores", JSON.stringify(storedScores));
      highScores();
    }
  });
//Capture remaining time on game timer as each user's score
  let userScore = (gameTimer);

function highScores() {
  stopTime();
  clearDetails();

  timerTab.setAttribute("style");
  highscoreDiv.addEventListener("click", highScores);
  //get scores from storage
  let storedScores = JSON.parse(localStorage.getItem("highScores")); 

  // draw heading
  let heading = document.createElement("h2");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "Top 5 High Score Hall of Fame";

  mainEl.appendChild(heading);

  // Render a new li for each score
  // TODO check for this error 
  if ( storedScores !== null ) {
    // sort scores
    storedScores.sort((a,b) => (a.score < b.score) ? 1: -1);

    // sets the number of scores to display to 5 or the number of games played. Which ever is less
    let numScores2Display = 5;
    if ( storedScores.length < 5 ) { 
      numScores2Display = storedScores.length; 
    }

    for (var i = 0; i < numScores2Display; i++) {
      var s = storedScores[i];

      var p = document.createElement("p");
      p.textContent = s.name + " " + s.score + " ( " + s.type + " )";
      mainEl.appendChild(p);
    }
  } else {
    var p = document.createElement("p");
    p.textContent =  "Your Initials Here!"
    mainEl.appendChild(p);
  }
 // creates button to start the game
 let playAgain = document.createElement("button");
 playAgain.setAttribute("id", "playAgain");
 playAgain.setAttribute("class", "btn btn-secondary");
 playAgain.textContent = "Play!";

 mainEl.appendChild(playAgain);

 playAgain.addEventListener("click", init);
}