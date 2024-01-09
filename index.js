const intputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLead = [];
const ulEl = document.getElementById("ul-el");


intputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
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
    inputEl.value = '';
}

