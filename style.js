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
      question: "What does CSS stand for?",
      answers: {
        a: "Cascading Style Sheet",
        b: "Creative Style Sheet",
        c: "Commodore Styled Sheet"
      },
      correctAnswer: "a"
    },
    {
      question: "What does DOM stand for?",
      answers: {
        a: "Digital Operating Model",
        b: "Document Object Model",
        c: "Data Overload Manipulation",
        d: "None of the Above"
      },
      correctAnswer: "b"
    },
    {
      question: "What JavaScript debugging tool prints data to a browser console?",
      answers: {
        a: "console.print",
        b: "console(log)",
        c: "console.log",
        d: "console(print)"
      },
      correctAnswer: "c"
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
