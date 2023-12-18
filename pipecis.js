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
const pipes = [
    {
        question: "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
        choices: ['A) 5/11', 'B) 6/11', 'C) 7/11', 'D) 8/11'],
        answer: "B) 6/11"
    },
    {
        question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        choices: ['A) 10 min. 20 sec.', 'B) 11 min. 45 sec.', 'C) 12 min. 30 sec.', 'D) 14 min. 40 sec.'],
        answer: "D) 14 min. 40 sec."
    },
    {
        question: "A water tank is two-fifth full.Pipe A can fill a tank in 10 minutes and pipe B can empty it in 6 minutes.If both the pipes are open,how long will it take to empty or fill the tank completely?",
        choices: ['A) 6 min.to empty', 'B) 6 min.to fill', 'C) 9 min.to empty', 'D) 9 min.to fill'],
        answer: "A) 6 min.to empty"
    },
    {
        question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        choices: ['A) 3 hrs 15 min', 'B) 3 hrs 45 min', 'C) 4 hrs 15 min', 'D) 4 hrs'],
        answer: "B) 3 hrs 45 min"
    },
    {
        question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 213213 hours to fill the tank. The leak can drain all the water of the tank in:",
        choices: ['A) 7 hours', 'B) 8 hours', 'C) 12 hours', 'D) 14 hours'],
        answer: "D) 14 hours"
    },
    {
        question: "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
        choices: ['A) 20 hrs', 'B) 28 hrs', 'C) 36 hrs', 'D) 40 hrs'],
        answer: "A) 20 hrs"
    },
    {
        question: "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
        choices: ['A) 10', ' B) 12', 'C) 14', 'D) 20'],
        answer: "C) 14"
    },
    {
        question: "A cistern has a leak which would empty the cistern in 20 minutes. A tap is turned on which admits 4 liters a minute into the cistern, and it is emptied in 24 minutes. How many liters does the cistern hold ?",
        choices: ['A) 360 lit', 'B) 480 lit', 'C) 320 lit', 'D) 420 lit'],
        answer: "B) 480 lit"
    },
    {
        question: "Three taps A, B and C can fill a tank in 12,15 and 20 hours respectively. If A is open all the time and B, C are open for one hour each alternatively, the tank will be full in:",
        choices: ['A) 6 hrs', 'B) 20/3 hrs', 'C) 7 hrs', 'D) 15/2 hrs'],
        answer: "C) 7 hrs"
    },
    {
        question: "Taps X and Y can fill a tank in 30 and 40 minutes respectively.Tap Z can empty the filled tank in 60 minutes.If all the three taps are kept open for one minute each,how much time will the taps take to fill the tank?",
        choices: ['A) 48min', 'B) 72min', 'C) 24min', 'D) None of these'],
        answer: "C) 24min"
    }
];
////---------------------------------------------------------------------------

////creating eventListener on retunIndexPage button for return home(index.html)page=====================
retunIndexPage.addEventListener('click', () => {
    let check2 = confirm("Are you Confirm to exit Test!");
    if (check2 == true) {
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
qCount.textContent = `${qustionCount}/${pipes.length}`;
function questionNumber() {
    if (qustionCount < pipes.length) {
        qustionCount++;
        qCount.textContent = `${qustionCount}/${pipes.length}`;
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
    const questionDetails = pipes[currentQuestionIndex];  //store array index in const variabl--------
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
    if (selectedChoice.textContent === pipes[currentQuestionIndex].answer) {
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
    if (currentQuestionIndex < pipes.length) {
        currentQuestionIndex++;
        showQuestion();
        questionNumber();
    };

    ////for changing next button into submit button-------------
    if (currentQuestionIndex == pipes.length - 1) {
        nextOther.textContent = "Submit"
        scores++

        //=======for showing result Report container1============================
        nextOther.addEventListener('click', () => {
            // console.log('click');
            container.style.display = 'none'
            container1.style.display = 'block';
            correctAnswer();
            showTotalQues();
            wrongAnser();
            showpercentage();
            ////--Calling endQuiz Function for storing time of last question submitted-------------
            endQuiz();
        });
    };

    //for Inserting scores of answer in HTML-----
    score.textContent = `Score: ${scores}`;
});

////================SOME FUNCTION FOR CONTAINER1========/////==================

////--Creating a Function for show total question when shown report container=============
const showTotalQues = () => {
    const questionCount = pipes.length;
    totalQuestion.textContent = `Total Question : ${questionCount}`;
};

////--Creating a Function for shown percentage in report container----=====================
const showpercentage = () => {
    const calculatePercentage = (scores / pipes.length) * 100;
    percentage.textContent = `Percentage : ${calculatePercentage}%`;
}

//Function for print correct answer in report============
const correctAnswer = () => {
    console.log(scores);
    correctAns.textContent = `Correct : 0${scores}`;
};

////Adding an event listener for redirect start again test from starting  when clicked Start Again========
startAgain.addEventListener('click', () => {
    var check2 = confirm("Do you want to start Again!");
    if (check2 == true) {
        console.log("ture");
        window.open('/pipecictern.html', '_self');
    };
});

////--Adding an event listener for redirect to index.html page=======================================
goToHome.addEventListener('click', () => {
    var check2 = confirm("Are you Confirm!");
    if (check2 == true) {
        console.log("ture");
        window.open('/index.html', '_self');
    };
});

////--Creating a Fucntion for calculation wrong answer================================================
const wrongAnser = () => {
    const wrongAns = pipes.length - scores;
    totalWrongAnswer.textContent = `Wrong : 0${wrongAns}`;
};

////============================End=============================/////