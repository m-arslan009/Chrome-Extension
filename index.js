let myLead = [];
const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const items = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");


// console.log(typeof myLead)
// convert js object to string that is necessery to store data in local storage
// myLead = JSON.stringify(myLead)

// this convert string into js object as myLead is an object of js
// myLead = JSON.parse(myLead)

// myLead.push("www.youtube.com");
// console.log(typeof myLead)

if(localStorage.getItem("myLeads")) {
    myLead = items;
    renderLead();
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLead = [];
    renderLead();
})

intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLead));
    renderLead();
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
