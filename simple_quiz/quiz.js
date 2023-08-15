const questions=[
    {
        question:"Which animal is known as the 'Ship of the Desert'?",
         answers : [
            
                {text:"Donkey" , correct: false},
                {text:"Camel" , correct: true },
                {text:"Eagle" , correct: false} ,
                {text:"Horse" , correct: false} ,
            
        ]
    },
    {
        question:"How many days are there in a week?",
        answers : [
            
                {text:"7" , correct: true},
                {text:"14" , correct: false },
                {text:"10" , correct: false} ,
                {text:"5" , correct: false} ,
            
        ]

    },
    {
        question:"How many consonants are there in the English alphabet?",
        answers : [
            
                {text:"20" , correct: false},
                {text:"5" , correct: false },
                {text:"22" , correct: false} ,
                {text:"21" , correct: true} ,
            
        ]

    },
    {
        question:" How many hours are there in a day?",
        answers : [
            
                {text:"20" , correct: false},
                {text:"18" , correct: false },
                {text:"21" , correct: false} ,
                {text:"24" , correct: true} ,
            
        ]

    },
    {
        question:"Baby frog is known as.......",
        answers: [
            
                {text:"Kitten" , correct: false},
                {text:"Calf" , correct: false },
                {text:"Tadpole" , correct: true} ,
                {text:"Chick" , correct: false} ,
            
        ]

    }
]

const questionElement = document.getElementById('question');
const answersbutton = document.getElementById('answer-buttons');
const nextbutton = document.getElementById('next');

let currentquestionIndex = 0;
let score=0;


function StartQuiz(){
     currentquestionIndex = 0;
     score =0 ; 
    nextbutton.innerHTML="Next";
    showquestion();
    
}
function showquestion(){
     resetState();//reset previous q/a
   let currentQuestion=questions[currentquestionIndex];
    let question_no = currentquestionIndex+1;
    questionElement.innerHTML=question_no+'. '+currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");  // to add the css of btn to newly created buttons
        answersbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);

    });


}


function selectanswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answersbutton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextbutton.style.display ="block";
}

function resetState(){
    nextbutton.style.display="none";
    while(answersbutton.firstChild){
        answersbutton.removeChild(answersbutton.firstChild)
    }
}


function showscore(){
    resetState();
    questionElement.innerHTML=`You have scored ${score} out of ${questions.length}!`
    nextbutton.innerHTML ="Play again";
    nextbutton.style.display="block";
    
}
function handlenextbutton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showquestion();
    }
    else{
        showscore();
    }

}

nextbutton.addEventListener('click' ,()=>{
    if(currentquestionIndex <= questions.length){
        handlenextbutton();
    }
    else{
        StartQuiz();
    }
});




 
StartQuiz();




