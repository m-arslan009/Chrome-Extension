const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLead = [];
const ulEl = document.getElementById("ul-el");


intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    for(let i = 0; i < myLead.length; i++) {
        ulEl.textContent += myLead[i];
    }

});

