//creating variable for get id and class---for container---===========
const container = document.querySelector('.container');
const retunIndexPage = document.getElementById("retunIndexPage"); //// for returnHome button------
const questionSelect = document.getElementById("questionSelect");
const timerCount = document.querySelector(".timer-count");
const score = document.querySelector(".score");
const qCount = document.querySelector(".qCount");
const ques = document.getElementById("ques");
const option = document.querySelector(".option");
const nextOther = document.querySelector(".NextOther");

// =====================---for container1-----=========================
const container1 = document.querySelector('.container1');
const showNameInReport = document.getElementById('showNameInReport');   ////not using ----
const timeTakenDisplay = document.getElementById('timeTakenDisplay');
const totalQuestion = document.getElementById('totalQuestion');
const totalAttemtedQuestion = document.getElementById('totalAttemtedQuestion');
const correctAns = document.getElementById('correctAns');
const totalWrongAnswer = document.getElementById('totalWrongAnswer');
const percentage = document.getElementById('percentage');
const startAgain = document.getElementById('startAgain');
const goToHome = document.getElementById('goToHome');

//Make an array of ojects that stores question, choice and answer--------------
const age = [
    {
        question: "Raju age after 15 years will be 5 times his age 5 years back, What is the present age of Raju",
        choices: ['A) 15', 'B) 14', 'C) 10', 'D) 8'],
        answer: "C) 10"
    },
    {
        question: "Sachin is younger than Rahul by 7 years. If the ratio of their ages is 7:9, find the age of Sachin.",
        choices: ['A) 23.5', 'B) 24.5', 'C) 12.5', 'D) 14.5'],
        answer: "B) 24.5"
    },
    {
        question: "The ratio between the present ages of P and Q is 6:7. If Q is 4 years old than P, what will be the ratio of the ages of P and Q after 4 years.",
        choices: ['A) 7:8', 'B) 7:9', 'C) 3:8', 'D) 5:8'],
        answer: "A) 7:8"
    },
    {
        question: "Ten years ago, P was half of Q in age. If the ratio of their present ages is 3:4, what will be the total of their present ages.",
        choices: ['A) 35', 'B) 34', 'C) 45', 'D) 25'],
        answer: "A) 35"
    },
    {
        question: "A number is as much greater than 36 as is less than 80. Find the number.",
        choices: ['A) 32', 'B) 36', 'C) 49', 'D) 58'],
        answer: "D) 58"
    },
    {
        question: "Rohan was 4 times as old as his son 6 years ago. After 6 years Rohan will be twice as old as his son. What is son's present age?",
        choices: ['A) 10 years', 'B) 12 years', 'C) 14 years', 'D) 18 years'],
        answer: "B) 12 years"
    },
    {
        question: "The total age of A and B is 12 years more than the total age of B and C. C is how many year younger than A.",
        choices: ['A) 11', 'B) 12', 'C) 13', 'D) 14'],
        answer: "B) 12"
    },
    {
        question: "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age?",
        choices: ['A) 1.5 times', 'B) 2 times', 'C) 2.5 times', 'D) 3times'],
        answer: "C) 2.5 times"
    },
    {
        question: "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?",
        choices: ['A) 6.2 years', 'B) 7.7 years', 'C) 13.3 years', 'D) 10 years'],
        answer: "C) 13.3 years"
    },
    {
        question: "Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.",
        choices: ['A) 32.5 years', 'B) 27.5 years', 'C) 25 years', 'D) 24.9 years'],
        answer: "B) 27.5 years"
    },
];
////---------------------------------------------------------------------------

////creating eventListener on retunIndexPage button for return home(index.html)page=====================
retunIndexPage.addEventListener('click', ()=>{
    let check2 = confirm("Are you Confirm to exit Test!");
    if(check2 == true){
     console.log("ture");
     window.open('/index.html', '_self');
    }; 
});

////--Creating Function for storing time when a question 1 id displayed=================================
let startTime = null;
function startQuiz() {
    startTime = new Date();
    console.log(startTime);
};
////--Creating Function for stroing time when submitted last question====================================
function endQuiz() {
    const totalTimeTaken = calculateTotalTime();
    displayTotalTime(totalTimeTaken);
};
////A Function for calculating total time taken during question solving=================================
function calculateTotalTime() {
    const endTime = new Date();
    const totalTimeInSeconds = Math.floor((endTime - startTime) / 1000);
    return totalTimeInSeconds;
};
////A Function for showing in html how much time taken in quiz solving===================================
function displayTotalTime(totalTimeInSeconds) {
    const totalMinutes = Math.floor(totalTimeInSeconds / 60);
    const totalSeconds = totalTimeInSeconds % 60;
    const totalTimeString = `Total Time taken : ${totalMinutes} min ${totalSeconds} sec`;
    timeTakenDisplay.textContent = totalTimeString;
}


//Making variables-------------
let count = 0;                    //for geting question no count--
let interval = null;            //for timer interval creation--
let scores = 0                  //for geting scores of answer--
let currentQuestionIndex = 0;   //fot array index itration--
let qustionCount = 1;            //for adding at start question no.1--

//Counting function for question No.================
qCount.textContent = `${qustionCount}/${age.length}`;
function questionNumber() {
    if (qustionCount < age.length) {
        qustionCount++;
        qCount.textContent = `${qustionCount}/${age.length}`;
    };
};

// Timer Function for every qustion to how much time taken on every question=====
function timelimit() {
    clearTime()        //for clearing first timer that's why called here---
    const countDoun = () => {
        count++;
        if (count < 60) {
            timerCount.textContent = '00:' + ((count < 10) ? '0' + count : count);
        }
        else {
            let min = Math.floor(count / 60);
            let sec = count - (60 * min);
            timerCount.textContent = (min > 9 ? min : '0' + min) + ":" + (sec > 9 ? sec : '0' + sec);
        };
    };
    interval = setInterval(countDoun, 1000); //stored in invterval variable-----------
}

//Function for clearing timer for when next question comes==================
function clearTime() {
    clearInterval(interval)
    timerCount.textContent = '00:00';
    count = 0;
};

////--Calling startQuiz for storing time when question no1 display on screen----------------
startQuiz();

//Arrow function to show Questions=============================
const showQuestion = () => {
    const questionDetails = age[currentQuestionIndex];  //store array index in const variabl--------
    ques.textContent = questionDetails.question;          //Inserting questions in HTML--------

    option.textContent = "";    //For clearing option before adding next options------------------

    //Using for loop for inserting option of questions===============================
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceOption = document.createElement('button');  //creating button element---
        choiceOption.textContent = currentChoice;
        choiceOption.classList.add('choiceClass');       //adding class in created button element---
        option.appendChild(choiceOption);      //appending in HTMl---

        //Function for Add event listener when click on option and toggeling  class (selected)===============
        choiceOption.addEventListener('click', () => {
            if (choiceOption.classList.contains('selected')) {
                choiceOption.classList.remove('selected');
            } else {
                choiceOption.classList.add('selected');
            }
        });
    };
    timelimit();    //Called here timelimit function for showing timer on all questions--------
};

//==Called showQuestion Function for shwoing question in HTML============================
showQuestion();

//Funtion to check answers and Increasing scores =======================================
const checkAnwser = () => {
    const selectedChoice = document.querySelector('.choiceClass.selected');
    if (selectedChoice.textContent === age[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        scores++;
    } else {
        // alert("Worng Answer!")
    }
};

//Making addEventListener on next button for clicked to next question and option=================
nextOther.addEventListener('click', () => {

    checkAnwser();      //called here checkAnswer because of checking when clicked next button--------

  //Condition for increasing array index, showQuestion & questionNumber function calling when clicked next button---
    if (currentQuestionIndex < age.length) {
        currentQuestionIndex++;
        showQuestion();
        questionNumber();
    };

    ////for changing next button into submit button-------------
    if (currentQuestionIndex == age.length-1) {
        nextOther.textContent = "Submit"
        
        //=======for showing result Report container1============================
        nextOther.addEventListener('click',()=>{
            // console.log('click');
            container.style.display = 'none'
            container1.style.display = 'block';
            correctAnswer();
            showTotalQues();
            wrongAnser();
            showpercentage();

            ////--Calling endQuiz Function for storing time of last question submitted-------------
            endQuiz(); 
        })
    };

    //for Inserting scores of answer in HTML-----
    score.textContent = `Score: ${scores}`;
});

////================SOME FUNCTION FOR CONTAINER1========/////==================

////--Creating a Function for show total question when shown report container=============
const showTotalQues=()=>{
    const questionCount = age.length;
    totalQuestion.textContent =`Total Question : ${questionCount}`;
};

////--Creating a Function for shown percentage in report container----=====================
const showpercentage = ()=>{
    const calculatePercentage = (scores/age.length)*100;
    percentage.textContent = `Percentage : ${calculatePercentage}%`;
}

//Function for print correct answer in report============
const correctAnswer =()=>{
    console.log(scores);
    correctAns.textContent= `Correct : 0${scores}`;
};

////Adding an event listener for redirect start again test from starting  when clicked Start Again========
startAgain.addEventListener('click', ()=>{
    var check2 = confirm("Are you Confirm");
    if(check2 == true){
     console.log("ture");
     window.open('/pipecictern.html', '_self');
    }; 
});

////--Adding an event listener for redirect to index.html page=======================================
goToHome.addEventListener('click', ()=>{
    var check2 = confirm("Are you Confirm");
    if(check2 == true){
     console.log("ture");
     window.open('/index.html', '_self');
    }; 
});

////--Creating a Fucntion for calculation wrong answer================================================
const wrongAnser = () => {
    const wrongAns = age.length - scores;
    totalWrongAnswer.textContent = `Wrong : 0${wrongAns}`;
};

////============================End=============================//////////////
