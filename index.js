////creating variables for accessing html====================================================
const enterClick = document.getElementById("enterClick");
const pipeCistern = document.getElementById("pipeCistern");
const probability = document.getElementById("probability");
const age = document.getElementById("age");
const profitLoss = document.getElementById("profitLoss");
const buttonSelect = document.getElementById("pipeSistern");
const showName = document.getElementById("showName");
const selectCetegory = document.querySelector(".select-category-section");
const topic = document.querySelector(".topic");
const hide = document.querySelector(".hide");   ////for hiding p tag of showing enter your name---
const hide2 = document.querySelector(".hide2"); ////for hiding input and button tag with these section--- 
const reEnterName = document.getElementById("reEnterName");
const showusername = document.querySelector(".showusername");
////===============================================================================================

//Creating eventListener on Enter button===========================================================
enterClick.addEventListener('click', () => {
    let name = document.getElementById("name").value;   // Geting user name valu-----  

    // //creating a condition for checking inpute value-------------
    if (name == "") {
        alert("First Enter your Name...");
    }
    else {
    ////Creating one inner condition for confirming----------------------------------------------      
        ////creating check1 for confirmation form user for showing name and subject topic------------
        let check1 = confirm(`Hye, ${name} are you confirm!`); 
        if (check1 == true) {
            showusername.style.display = 'block'
            selectCetegory.style.display = 'block'
            showName.textContent = name;   //showing user name when click enter button---------------
            hide.style.display = 'none'
            hide2.style.display = 'none'
        } else if (check1 == false) {
            name == " ";
            console.log(name);
        };
    };
});

////Creating EventListener for reEnter Button for come back to input tag for re-entering name-------
let flag1 = 0;  //creatign variable for passing in if condition---------------
reEnterName.addEventListener('click', () => {
    if (flag1 = 1) {
        hide.style.display = 'block'
        hide2.style.display = 'flex'
        showusername.style.display = 'none'
        selectCetegory.style.display = 'none'
    };
});

////=============CREATING EVENT LISTENER FOR ALL 4 OPTION SEPRATELY=======================/////////
////for first option-----------------------------
pipeCistern.addEventListener('click', () => {
        var check2 = confirm("Are you Confirm!");
       if(check2 == true){
        console.log("ture");
        window.open('/pipecictern.html', '_self');
       };
});
////for second option-----------------------------
probability.addEventListener('click', () => {
    var check2 = confirm("Are you Confirm!");
       if(check2 == true){
        console.log("ture");
        window.open('/probability.html', '_self');
       };
});
////for Thired option-----------------------------
age.addEventListener('click', () => {
    var check2 = confirm("Are you Confirm!");
    if(check2 == true){
     console.log("ture");
     window.open('/age.html', '_self');
    }; 
});
////for Forth option-----------------------------
profitLoss.addEventListener('click', () => {
    var check2 = confirm("Are you Confirm!");
    if(check2 == true){
     console.log("ture");
      window.open('/profitloss.html', '_self');
    }; 
});
////===================/////////========================////////////

////created functions for all button tags witch is toggled selected class================================
////for 1st option--------------------------------------------
function topicSection1() {
    const pipeSistern = document.getElementById('pipeSistern');
    var a = pipeSistern.classList.toggle("selected");
};
////for 2nd option--------------------------------------------
function topicSection2() {
    const probability = document.getElementById('probability');
    probability.classList.toggle("selected");
};
////for 3rd option--------------------------------------------
function topicSection3() {
    const age = document.getElementById('age');
    age.classList.toggle("selected");
};
////for 4th option--------------------------------------------
function topicSection4() {
    const profitLoss = document.getElementById('profitLoss');
    profitLoss.classList.toggle("selected");
};

////===++++++++===============++///+++=======End========================/////////




























