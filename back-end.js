function addItem(form, contentList) {
    food = form.value;

    const list = document.createElement("li");
    list.classList.add("list");

    list.textContent = food;
    list.appendChild(createButton(list, form));

    contentList.appendChild(list);

    form.value = "";
}

function createButton(list, form) {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.style.width = "100px";

    button.addEventListener("click", () => {
        list.remove();
    })

    return button;
}

const list = document.querySelector("ul");
const form = document.querySelector("input");
const addButton = document.querySelector("#add");
 

addButton.addEventListener("click", () => {
    const points = list.querySelectorAll("li");
    let numPoints = points.length;

    if (form.value != "" && numPoints < 7) {
        addItem(form, list);
        form.focus();
    } else if (form.value == "") {
        alert("You haven't inputted any grocery.");
    } else {
        alert("You have entered too many groceries. Pls delete one. ")
    }
});

