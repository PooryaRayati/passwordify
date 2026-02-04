const screen = document.getElementById("screen");
const add_btn = document.querySelector(".add_btn")
const notif = document.querySelector(".notif")
const notification= document.querySelector(".notification")
const add_input_box_bg = document.querySelector(".add_input_box_bg")
const cancle = document.querySelector("#cancle")
const next = document.querySelector("#next")
const cancle2 = document.querySelector("#cancle2")
const next2 = document.querySelector("#next2")
const add_1 = document.querySelector("#add_1")
const add_2 = document.querySelector("#add_2")
const add_3 = document.querySelector("#add_3")
const email = document.querySelector("#Email")
const password = document.querySelector("#password")
const c_password = document.querySelector("#c_password")
const m_name = document.querySelector("#m_name")
const media_inp = document.querySelector("#creat_media")
const github = document.querySelector(".github")
const gmail = document.querySelector(".gmail")
const call_of_duty = document.querySelector(".call_of_duty")
const bit_coin = document.querySelector(".bit_coin")
const games = document.querySelector(".games")
const isnagram = document.querySelector(".isnagram")
const twitter = document.querySelector(".twitter")
const tiktok = document.querySelector(".tiktok")
let media_name = ""
let accses_stage = 0




add_btn.addEventListener("click", function () {
    add_input_box_bg.style.display = "flex"
})

cancle.addEventListener("click", function () {
    add_input_box_bg.style.display = "none"
    media_name = ""
    add_1.style.display = "flex"
    add_2.style.display = "none"
    add_3.style.display = "none"
    media_inp.value = ""
    github.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"

})

cancle2.addEventListener("click", function () {
    add_input_box_bg.style.display = "none"
    media_name = ""
    add_1.style.display = "flex"
    add_2.style.display = "none"
    add_3.style.display = "none"
    media_inp.value = ""
    github.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    email.value = ""
    password.value = ""
    c_password.value = ""
})

github.addEventListener("click", function () {
    media_name = "Git Hub"
    github.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

gmail.addEventListener("click", function () {
    media_name = "gmail"
    gmail.style.border = "2px solid rgb(235, 125, 0)"
    github.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

call_of_duty.addEventListener("click", function () {
    media_name = "COD"
    call_of_duty.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    github.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

bit_coin.addEventListener("click", function () {
    media_name = "Coins"
    bit_coin.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    github.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

games.addEventListener("click", function () {
    media_name = "Games"
    games.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    github.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

tiktok.addEventListener("click", function () {
    media_name = "Tik Tok"
    tiktok.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    github.style.border = "none"
    media_inp.value = ""
})

isnagram.addEventListener("click", function () {
    media_name = "Instagram"
    isnagram.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    github.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

twitter.addEventListener("click", function () {
    media_name = "Twitter"
    twitter.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    github.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

media_inp.addEventListener("input", () => {
    media_name = media_inp.value.trim()
    twitter.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    github.style.border = "none"
    tiktok.style.border = "none"
})

add_1.style.display = "flex"
add_2.style.display = "none"
add_3.style.display = "none"
next.addEventListener("click", () => {
    if (media_name.length != 0 && add_1.style.display === "flex") {
        console.log(media_name)
        add_2.style.display = "flex"
        add_1.style.display = "none"
        m_name.textContent = media_name
        m_name.style.color = "orange"
    }else{
        notif.style.display = "flex"
        setTimeout(()=>{notif.style.animation = "notif_close 1s ease alternate"},3000)
        setTimeout(()=>{notif.style.animation = "notif 1s ease alternate" , notif.style.display = "none"},4000)
    }
})

next2.addEventListener("click", () => {
    if (email.value.length != 0 && password.value.length != 0 && c_password.value === password.value && add_2.style.display === "flex") {
        console.log("accese")
        add_2.style.display = "none"
        add_3.style.display = "flex"
        typeLine();
    }else{
        notif.style.display = "flex"
        setTimeout(()=>{notif.style.animation = "notif_close 1s ease alternate"},3000)
        setTimeout(()=>{notif.style.animation = "notif 1s ease alternate" , notif.style.display = "none"},4000)
    }
})















const lines = [
    "[ACCESSING] Connecting to PASSWORDIFY_SERVER...",
    "[OK] Connection established from 192.168.13.37",
    "[LOGIN] Bypassing authentication...",
    "[BRUTE FORCE] Trying passwords: ****",
    "[SUCCESS] Admin access granted.",
    "",
    "[QUERY] Searching criminal database...",
    "SELECT * FROM suspects WHERE city = 'Los Angeles' AND risk_level > 7;",
    "[RESULT] 12 records found.",
    "",
    "[DOWNLOAD] Exporting records to local machine...",
    "[PROGRESS] ██████████ 100%",
    "",
    "[LOG] All actions masked. No trace left.",
    "[STATUS] Operation complete.",
    "",
    "[SAVING] SAVING IS COMPLETE.   ..........................................."
];

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let typingSpeed = 1;   // سرعت تایپ (میلی‌ثانیه)
let lineDelay = 100;    // مکث بین خط‌ها

const cursor = document.createElement("span");
cursor.className = "cursor";
screen.appendChild(cursor);

function typeLine() {
    if (lineIndex >= lines.length) {
        // بعد از اتمام، دوباره از اول شروع کن
        // lineIndex = 0;
        // screen.innerHTML = "";
        // screen.appendChild(cursor);
        screen.style.display = "none"
        add_input_box_bg.style.display = "none"
        media_name = ""
        add_1.style.display = "flex"
        add_2.style.display = "none"
        add_3.style.display = "none"
        media_inp.value = ""
        github.style.border = "none"
        gmail.style.border = "none"
        call_of_duty.style.border = "none"
        bit_coin.style.border = "none"
        games.style.border = "none"
        isnagram.style.border = "none"
        twitter.style.border = "none"
        tiktok.style.border = "none"
        email.value = ""
        password.value = ""
        c_password.value = ""
    }

    const text = lines[lineIndex];

    if (charIndex < text.length) {
        currentLine += text[charIndex];
        updateScreen();
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        currentLine += "\n";
        updateScreen();
        charIndex = 0;
        lineIndex++;
        currentLine = screen.textContent; // کل متن فعلی
        setTimeout(typeLine, lineDelay);
    }
}

function updateScreen() {
    screen.textContent = currentLine;
    screen.appendChild(cursor);
    window.scrollTo(0, document.body.scrollHeight);
}




