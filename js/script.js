const screen = document.getElementById("screen");
const add_btn = document.querySelector(".add_btn")
const notif = document.querySelector(".notif")
const notification = document.querySelector(".notification")
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
const statuse = "Password is Blocked"
const body = document.querySelector("#body")
const boxes = document.querySelector(".boxes")
let media_name = ""
let accses_stage = 0

number = ["1","2","3","4","5","6","7","8","9","0"]
char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]





let parse_passwording = ""
let token = JSON.parse(localStorage.getItem("saved_info"))
console.log(token[0].username.length)
let a = token[0].username
for (let g = 0 ; g< a.length; g+=4){
    const chunk = a.substring(g,g+4)
    if(chunk == "#bty"){
        parse_passwording += "a"
    }else if(chunk == "%&o("){
        parse_passwording += "b"
    }else if(chunk == "ph67"){
        parse_passwording += "c"
    }else if(chunk == "kw3^"){
        parse_passwording += "d"
    }else if(chunk == "o09#"){
        parse_passwording += "e"
    }else if(chunk == "5&#@"){
        parse_passwording += "f"
    }else if(chunk == "k3%3"){
        parse_passwording += "g"
    }else if(chunk == "opd&"){
        parse_passwording += "h"
    }else if(chunk == "q$#$"){
        parse_passwording += "i"
    }else if(chunk == "kdj%"){
        parse_passwording += "j"
    }else if(chunk == "xbk,"){
        parse_passwording += "k"
    }else if(chunk == "mka#"){
        parse_passwording += "l"
    }else if(chunk == "2tyu"){
        parse_passwording += "m"
    }else if(chunk == "lmlk"){
        parse_passwording += "n"
    }else if(chunk == ":lom"){
        parse_passwording += "o"
    }else if(chunk == "!(j*"){
        parse_passwording += "p"
    }else if(chunk == ":f#@"){
        parse_passwording += "q"
    }else if(chunk == "j$@#"){
        parse_passwording += "r"
    }else if(chunk == "pl$)"){
        parse_passwording += "t"
    }else if(chunk == "gew@"){
        parse_passwording += "u"
    }else if(chunk == "#kdsn"){
        parse_passwording += "v"
    }else if(chunk == "lk!!"){
        parse_passwording += "w"
    }else if(chunk == "^$%#"){
        parse_passwording += "x"
    }else if(chunk == "****"){
        parse_passwording += "y"
    }else if(chunk == "&^&&"){
        parse_passwording += "z"
    }else if(chunk == "####"){
        parse_passwording += "_"
    }else if(chunk == "&$#@"){
        parse_passwording += "-"
    }else if(chunk == "FjnK"){
        parse_passwording += "="
    }else if(chunk == "HDS6"){
        parse_passwording += "+"
    }else if(chunk == ":;lm"){
        parse_passwording += "!"
    }else if(chunk == "<sk,"){
        parse_passwording += "@"
    }else if(chunk == "T$^5"){
        parse_passwording += "#"
    }else if(chunk == "%&%4"){
        parse_passwording += "$"
    }else if(chunk == "&REl"){
        parse_passwording += "%"
    }else if(chunk == "DWEr"){
        parse_passwording += "^"
    }else if(chunk == "1342"){
        parse_passwording += "&"
    }else if(chunk == "1sfD"){
        parse_passwording += "*"
    }else if(chunk == "sfss"){
        parse_passwording += "("
    }else if(chunk == "LIjm"){
        parse_passwording += ")"
    }else if(chunk == "ADWR"){
        parse_passwording += "|"
    }else if(chunk == "wqew"){
        parse_passwording += "~"
    }else if(chunk == "vyge"){
        parse_passwording += ":"
    }else if(chunk == "jmse"){
        parse_passwording += ";"
    }else if(chunk == "shvb"){
        parse_passwording += "."
    }else if(chunk == "Mjku"){
        parse_passwording += ">"
    }else if(chunk == "$#nj"){
        parse_passwording += "<"
    }else if(chunk == "&&kj"){
        parse_passwording += ","
    }else if(chunk == "!!!j"){
        parse_passwording += "1"
    }else if(chunk == "#$|k"){
        parse_passwording += "2"
    }else if(chunk == "SA3w"){
        parse_passwording += "3"
    }else if(chunk == "Rioy"){
        parse_passwording += "4"
    }else if(chunk == "Iw32"){
        parse_passwording += "5"
    }else if(chunk == "FKwu"){
        parse_passwording += "6"
    }else if(chunk == "ihs)"){
        parse_passwording += "7"
    }else if(chunk == "SI3%"){
        parse_passwording += "8"
    }else if(chunk == "Hw89"){
        parse_passwording += "9"
    }else if(chunk == "oki@"){
        parse_passwording += "0"
    }

}
console.log(token[0].username)
console.log(parse_passwording)


for(t in token){
    // const pass_page = document 
}


if (!localStorage.getItem("saved_info")) {
    localStorage.setItem("saved_info", null)
}
if (!Array.isArray(token)) {
    token = [];
}
let i = 0;
let currentBoxes = boxes; // اولین کانتینر اصلی

token.forEach(item => {

    i++;

    const box = document.createElement("div");
    box.setAttribute("class", "box");

    const box_bg = document.createElement("div");
    box_bg.setAttribute("class", "box_bg");

    const span = document.createElement("span");
    span.setAttribute("class", "head_icon");
    span.textContent = item.media;

    const st = document.createElement("p");
    st.setAttribute("id", "status");
    st.textContent = statuse;

    box_bg.append(span, st);
    box.append(box_bg);

    // اگر به 3 رسیدیم، کانتینر جدید بساز
    if (i > 3 && (i - 1) % 3 === 0) {
        const boxes2 = document.createElement("div");
        boxes2.setAttribute("class", "boxes");
        body.append(boxes2);
        currentBoxes = boxes2; // کانتینر فعال رو عوض کن
    }

    // box رو داخل کانتینر فعال بنداز
    currentBoxes.append(box);

});



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
        console.log(token.username)
    } else {
        notif.style.display = "flex"
        setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
        setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none" }, 4000)
    }
})

next2.addEventListener("click", () => {
    if (email.value.length != 0 && password.value.length != 0 && c_password.value === password.value && add_2.style.display === "flex") {
        console.log("accese")
        add_2.style.display = "none"
        add_3.style.display = "flex"
        let gmail_lower = email.value.trim().toLowerCase()
        let passwording = ""
        for(j in gmail_lower){
            if(gmail_lower[j]=== "a"){
                passwording += "#bty"
            }else if(gmail_lower[j]=== "b"){
                passwording += "%&o("
            }else if(gmail_lower[j]=== "c"){
                passwording += "ph67"
            }else if(gmail_lower[j]=== "d"){
                passwording += "kw3^"
            }else if(gmail_lower[j]=== "e"){
                passwording += "o09#"
            }else if(gmail_lower[j]=== "f"){
                passwording += "5&#@"
            }else if(gmail_lower[j]=== "g"){
                passwording += "k3%3"
            }else if(gmail_lower[j]=== "h"){
                passwording += "opd&"
            }else if(gmail_lower[j]=== "i"){
                passwording += "q$#$"
            }else if(gmail_lower[j]=== "j"){
                passwording += "kdj%"
            }else if(gmail_lower[j]=== "k"){
                passwording += "xbk,"
            }else if(gmail_lower[j]=== "l"){
                passwording += "mka#"
            }else if(gmail_lower[j]=== "m"){
                passwording += "2tyu"
            }else if(gmail_lower[j]=== "n"){
                passwording += "lmlk"
            }else if(gmail_lower[j]=== "o"){
                passwording += ":lom"
            }else if(gmail_lower[j]=== "p"){
                passwording += "!(j*"
            }else if(gmail_lower[j]=== "q"){
                passwording += ":f#@"
            }else if(gmail_lower[j]=== "r"){
                passwording += "j$@#"
            }else if(gmail_lower[j]=== "t"){
                passwording += "pl$)"
            }else if(gmail_lower[j]=== "u"){
                passwording += "gew@"
            }else if(gmail_lower[j]=== "v"){
                passwording += "kdsn"
            }else if(gmail_lower[j]=== "w"){
                passwording += "lk!!"
            }else if(gmail_lower[j]=== "x"){
                passwording += "^$%#"
            }else if(gmail_lower[j]=== "y"){
                passwording += "****"
            }else if(gmail_lower[j]=== "z"){
                passwording += "&^&&"
            }else if(gmail_lower[j]=== "_"){
                passwording += "####"
            }else if(gmail_lower[j]=== "-"){
                passwording += "&$#@"
            }else if(gmail_lower[j]=== "="){
                passwording += "FjnK"
            }else if(gmail_lower[j]=== "+"){
                passwording += "HDS6"
            }else if(gmail_lower[j]=== "!"){
                passwording += ":;lm"
            }else if(gmail_lower[j]=== "@"){
                passwording += "<sk,"
            }else if(gmail_lower[j]=== "#"){
                passwording += "T$^5"
            }else if(gmail_lower[j]=== "$"){
                passwording += "%&%4"
            }else if(gmail_lower[j]=== "%"){
                passwording += "&REl"
            }else if(gmail_lower[j]=== "^"){
                passwording += "DWEr"
            }else if(gmail_lower[j]=== "&"){
                passwording += "1342"
            }else if(gmail_lower[j]=== "*"){
                passwording += "1sfD"
            }else if(gmail_lower[j]=== "("){
                passwording += "sfss"
            }else if(gmail_lower[j]=== ")"){
                passwording += "LIjm"
            }else if(gmail_lower[j]=== "|"){
                passwording += "ADWR"
            }else if(gmail_lower[j]=== "~"){
                passwording += "wqew"
            }else if(gmail_lower[j]=== ":"){
                passwording += "vyge"
            }else if(gmail_lower[j]=== ";"){
                passwording += "jmse"
            }else if(gmail_lower[j]=== "."){
                passwording += "shvb"
            }else if(gmail_lower[j]=== ">"){
                passwording += "Mjku"
            }else if(gmail_lower[j]=== "<"){
                passwording += "$#nj"
            }else if(gmail_lower[j]=== ","){
                passwording += "&&kj"
            }else if(gmail_lower[j]=== "1"){
                passwording += "!!!j"
            }else if(gmail_lower[j]=== "2"){
                passwording += "#$|k"
            }else if(gmail_lower[j]=== "3"){
                passwording += "SA3w"
            }else if(gmail_lower[j]=== "4"){
                passwording += "Rioy"
            }else if(gmail_lower[j]=== "5"){
                passwording += "Iw32"
            }else if(gmail_lower[j]=== "6"){
                passwording += "FKwu"
            }else if(gmail_lower[j]=== "7"){
                passwording += "ihs)"
            }else if(gmail_lower[j]=== "8"){
                passwording += "SI3%"
            }else if(gmail_lower[j]=== "9"){
                passwording += "Hw89"
            }else if(gmail_lower[j]=== "0"){
                passwording += "oki@"
            }
        }
        
        console.log(passwording)
        const saved = { "media": media_name, "username": passwording, "password": password.value.trim() }
        const accses_token = token.push(saved)
        localStorage.setItem("saved_info", JSON.stringify(token))
        typeLine();
    } else {
        notif.style.display = "flex"
        setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
        setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none" }, 4000)
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
        location.reload()
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




