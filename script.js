const addButton = document.getElementById("add-button");
const textInput = document.getElementById("text-input");
const list = document.getElementById("lists");



// Function adds a new item to the list

function addItem() {
    const text = textInput.value;
    const li = document.createElement("li");
    li.innerText = text;
    li.classList.add("editable");
    list.appendChild(li);
    textInput.value = "";
}

// Function removes the last item from a list

function removeItem() {
    const items = list.getElementsByTagName("li");
    const lastItem = items[items.length - 1];
    lastItem.remove();
}

// Function changes the txt of the selected item on the page

function changeText() {
    const editableItem = document.querySelector(".editable.active");
    if (editableItem) {
        editableItem.innerText = textInput.value;
    }
}

// Function that changes te styles of the selected element on the the page

function changeStyle() {
    const items = list.getElementsByTagName("li");
    const selectedItem = event.target;
    selectedItem.style.color = "rgb(255, 0, 0)";
    selectedItem.style.backgroundColor = "#ffff00";
}

addButton.addEventListener("click", addItem);

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

list.addEventListener("click", (event) => {
    const editableItem = event.target.closest(".editable");
    if (editableItem){
        document.querySelector(".editable.active")?.classList.remove("active");
        editableItem.classList.add("active");
    }
});

textInput.addEventListener("input", changeText);

list.addEventListener("dblclick", removeItem);
list.addEventListener("click", changeStyle);
