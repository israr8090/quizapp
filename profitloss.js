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
const profitLoss = [
    {
        question: "A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?",
        choices: ['A)  Rs. 525', 'B)  Rs. 500', 'C)  Rs. 490', 'D)  Rs. 486'],
        answer: "D)  Rs. 486"
    },
    {
        question: "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is",
        choices: ['A) 10%', 'B) 15%', 'C) 20%', 'D) 25%'],
        answer: "C) 20%"
    },
    {
        question: "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",
        choices: ['A) Rs. 25000', 'B) Rs. 50000', 'C) Rs. 37500', 'D) Rs. 60000'],
        answer: "B) Rs. 50000"
    },
    {
        question: "Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.",
        choices: ['A) Rs. 4500', 'B) Rs. 50000', 'C) Rs. 37500', 'D) Rs. 60000'],
        answer: "A) Rs. 4500"
    },
    {
        question: "If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is",
        choices: ['A) 25% loss', 'B) 20% loss', 'C) 25% gain', 'D) 20% gain'],
        answer: "C) 25% gain"
    },
    {
        question: "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is",
        choices: ['A) Neither gain nor loss', 'B)  2.5% gain', 'C)  2.5% loss', 'D) 0.25% loss'],
        answer: "D) 0.25% loss"
    },
    {
        question: "Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?",
        choices: ['A) 25%', 'B) 20%', 'C) 45%', 'D) 50%'],
        answer: "B) 20%"
    },
    {
        question: "The ratio of cost price and selling price is 4:5. The profit percent is",
        choices: ['A) 10%', 'B) 20%', 'C) 25%', 'D) 30%'],
        answer: "C) 25%"
    },
    {
        question: " If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",
        choices: ['A) Rs. 4420', 'B) Rs. 4000', 'C) Rs. 3900', 'D) Rs. 3800'],
        answer: "B) Rs. 4000"
    },
    {
        question: "A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",
        choices: ['A) 20:23', 'B) 23:20', 'C) 16:23', 'D) 23:16'],
        answer: "C) 16:23"
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
qCount.textContent = `${qustionCount}/${profitLoss.length}`;
function questionNumber() {
    if (qustionCount < profitLoss.length) {
        qustionCount++;
        qCount.textContent = `${qustionCount}/${profitLoss.length}`;
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
    const questionDetails = profitLoss[currentQuestionIndex];  //store array index in const variabl--------
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
    if (selectedChoice.textContent === profitLoss[currentQuestionIndex].answer) {
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
    if (currentQuestionIndex < profitLoss.length) {
        currentQuestionIndex++;
        showQuestion();
        questionNumber();
    };

    ////for changing next button into submit button-------------
    if (currentQuestionIndex == profitLoss.length-1) {
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
    const questionCount = profitLoss.length;
    totalQuestion.textContent =`Total Question : ${questionCount}`;
};

////--Creating a Function for shown percentage in report container----=====================
const showpercentage = ()=>{
    const calculatePercentage = (scores/profitLoss.length)*100;
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
    const wrongAns = profitLoss.length - scores;
    totalWrongAnswer.textContent = `Wrong : 0${wrongAns}`;
};

////============================End=============================/////