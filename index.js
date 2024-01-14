const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLead = [];
const ulEl = document.getElementById("ul-el");

console.log(typeof myLead)
// convert js object to string that is necessery to store data in local storage
// myLead = JSON.stringify(myLead)

// this convert string into js object as myLead is an object of js
// myLead = JSON.parse(myLead)

// myLead.push("www.youtube.com");
// console.log(typeof myLead)

intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value); // Now `push()` should work as expected
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLead));
    renderLead();

    console.log(localStorage.getItem("myLeads"));
});

function renderLead() {
    let listItems = "";
    for(let i = 0; i < myLead.length; i++) {
        // listItems += "<li><a href = " + myLead[i] + " target = '_blank'>" + myLead[i] + "</a> </li>";
        listItems += `
            <li>
                <a href = '${myLead[i]}' target = '_blank'> 
                    ${myLead[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems;
    
}

