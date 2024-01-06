const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLead = [];


intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    for(let i = 0; i < myLead.length; i++) {
        console.log(myLead[i]);
    }

});

