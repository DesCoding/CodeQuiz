var questions = [
    {
        prompt:  "What does HTML stand for?\n(a) Hyper Type Mark Language\n\(b) Hyper Tag Making List\n(c) Hyper Text Markup Language",
        answer: "c",
    },
    {
        prompt: "CSS is:\n(a) Cascading Style Sheet\n\(b) Creative Style Sheet\n(c) Commodore Styled Sheet",
        answer: "a"
    }   
]
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert("You got " + score + "/" + questions.length);