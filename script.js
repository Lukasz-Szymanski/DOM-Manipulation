const addButton = document.getElementById("add-button");
const textInput = document.getElementById("text-input");
const list = document.getElementById("lists");



// Funkcja, która dodaje nowy element do listy

function addItem() {
    const text = textInput.value;
    const li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li);
    textInput.value = "";
}

// Funkcja, która usuwa ostatni element z listy

function removeItem() {
    const items = list.getElementsByTagName("li");
    const lastItem = items[items.length - 1];
    lastItem.remove();
}

// Funkcja, która zmienia tekst wybranego elementu na stronie 

function changeText() {
    const items = list.getElementsByTagName("li");
    const lastItem = items[items.length - 1];
    lastItem.innerText = textInput.value;
}

// Funkcja, która zmienia style wybranego elementu na stronie

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
textInput.addEventListener("input", changeText);
list.addEventListener("dblclick", removeItem);
list.addEventListener("click", changeStyle);
