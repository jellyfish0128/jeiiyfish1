document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("mainContent").classList.remove("hidden");
    this.style.display = "none";
});

// 變換文字
const phrases = [
    "初めまして、私は Jellyfish です",
    "世界に無駄な努力なんてない",
    "あなたはただ自分らしくいればいい"
];

let index = 0;
setInterval(() => {
    index = (index + 1) % phrases.length;
    document.getElementById("changingText").textContent = phrases[index];
}, 30000);

// 🟢 **倒數日**
const countdownDate = new Date("2025-04-06").getTime();  // ⚠️ **修改這裡**
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").textContent = `還有 ${days} 天！`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 🟡 **便利貼**
function openNotePopup() {
    document.getElementById("notePopup").style.display = "block";
}

function closeNotePopup() {
    document.getElementById("notePopup").style.display = "none";
}

function saveNote() {
    const text = document.getElementById("noteText").value;
    if (text) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(text);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
        closeNotePopup();
    }
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";
    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.innerHTML = `${note} <button onclick="deleteNote(${index})">刪除</button>`;
        notesDiv.appendChild(div);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}
displayNotes();

// 🟠 **代辦事項**
function addTodo() {
    let input = document.getElementById("todoInput").value;
    if (input) {
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(input);
        localStorage.setItem("todos", JSON.stringify(todos));
        document.getElementById("todoInput").value = "";
        displayTodos();
    }
}

function displayTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="removeTodo(${index})"> ${todo}`;
        todoList.appendChild(li);
    });
}

function removeTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
}
displayTodos();
