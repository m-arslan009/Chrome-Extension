const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLead = [];


intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    console.log(myLead)
});