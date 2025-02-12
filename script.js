document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("mainContent").classList.remove("hidden");
    this.style.display = "none";
});

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

/* 📌 便利貼功能 */
function openSticky() {
    document.getElementById("stickyPopup").style.display = "block";
}

function closeSticky() {
    document.getElementById("stickyPopup").style.display = "none";
}

function saveSticky() {
    let note = document.getElementById("stickyNote").value;
    localStorage.setItem("stickyNote", note);
    alert("便利貼已保存！");
}

/* 讀取便利貼 */
document.addEventListener("DOMContentLoaded", function() {
    let savedNote = localStorage.getItem("stickyNote");
    if (savedNote) {
        document.getElementById("stickyNote").value = savedNote;
    }
});

/* 📅 日期倒數功能 */
function editCountdown() {
    let password = prompt("請輸入密碼以修改日期：");
    if (password === "yuling") {
        let newDate = prompt("請輸入新的日期 (YYYY-MM-DD)：");
        if (newDate) {
            localStorage.setItem("countdownDate", newDate);
            updateCountdown();
        }
    } else {
        alert("密碼錯誤！");
    }
}

/* 更新倒數日期 */
function updateCountdown() {
    let targetDate = new Date(localStorage.getItem("countdownDate"));
    let now = new Date();
    let diff = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
    document.getElementById("countdownText").textContent = `還剩 ${diff} 天！`;
}

document.addEventListener("DOMContentLoaded", updateCountdown);
