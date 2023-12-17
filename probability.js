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
const probability = [
    {
        question: "Q. What will be the probability of getting odd numbers if a dice is thrown?",
        choices: ['A) 1/2', 'B) 2', 'C) 4/2', 'D) 5/2'],
        answer: "A) 1/2"
    },
    {
        question: "Q. What is the probability of getting a sum as 3 if a dice is thrown?",
        choices: ['A) 2/18', 'B) 1/18', 'C) 4', 'D) 1/36'],
        answer: "B) 1/18"
    },
    {
        question: "Q. What is the probability of getting an even number when a dice is thrown?",
        choices: ['A) 1/6', 'B) 1/2', 'C) 1/3', 'D) 1.4'],
        answer: "B) 1/2"
    },
    {
        question: "Q. The probability of getting two tails when two coins are tossed is -",
        choices: ['A) 1/6', 'B) 1/2', 'C) 1/3', 'D) 1.4'],
        answer: "D) 1.4"
    },
    {
        question: "Q. What is the probability of getting atleast one head if three unbiased coins are tossed?",
        choices: ['A) 7/8', 'B) 1/2', 'C) 5/8', 'C) 8/9'],
        answer: "A) 7/8"
    },
    {
        question: "Q. What is the probability of getting 1 and 5 if a dice is thrown once?",
        choices: ['A) 1/6', 'B) 1/3', 'C) 2/3', 'D) 8/9'],
        answer: "B) 1/3"
    },
    {
        question: "Q. What will be the probability of losing a game if the winning probability is 0.3?",
        choices: ['A) 0.5', 'B) 0.6', 'C) 0.7', 'D) 0.8'],
        answer: "C) 0.7"
    },
    {
        question: "Q. If two dice are thrown together, what is the probability of getting an even number on one dice and an odd number on the other dice?",
        choices: ['A) 1/4', 'B) 3/5', 'C) 3/4', 'D) 1/2'],
        answer: "D) 1/2"
    },
    {
        question: "Q. In a box, there are 8 orange, 7 white, and 6 blue balls. If a ball is picked up randomly, what is the probability that it is neither orange nor blue?",
        choices: ['A) 1/3', 'B) 1/21', 'C) 2/21', 'D)5/21'],
        answer: "A) 1/3"
    },
    {
        question: "Q.  A card is drawn from a pack of 52 cards. What is the probability of getting a king of a black suit?",
        choices: ['A) 1/26', 'B) 1/52', 'C) 3/26', 'D)7/52'],
        answer: "A) 1/26"
    }
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
qCount.textContent = `${qustionCount}/${probability.length}`;
function questionNumber() {
    if (qustionCount < probability.length) {
        qustionCount++;
        qCount.textContent = `${qustionCount}/${probability.length}`;
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
    const questionDetails = probability[currentQuestionIndex];  //store array index in const variabl--------
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
    if (selectedChoice.textContent === probability[currentQuestionIndex].answer) {
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
    if (currentQuestionIndex < probability.length) {
        currentQuestionIndex++;
        showQuestion();
        questionNumber();
    };

    ////for changing next button into submit button-------------
    if (currentQuestionIndex == probability.length-1) {
        nextOther.textContent = "Submit"
        scores++
        
        //=======for showing result Report container1============================
        nextOther.addEventListener('click',()=>{
            // console.log('click');
            container.style.display = 'none'
            container1.style.display = 'block';
            correctAnswer();
            showTotalQues();
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
    const questionCount = probability.length;
    totalQuestion.textContent =`Total Question : ${questionCount}`;
};

////--Creating a Function for shown percentage in report container----=====================
const showpercentage = ()=>{
    const calculatePercentage = (scores/probability.length)*100;
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


