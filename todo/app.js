let addToDoButton = document.getElementById('addToDoBtn');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })
})
function reload() {
    reload = location.reload();
}