
let count = 0;
let round = 0;

function update() {
    document.getElementById("count").innerText = count;
    document.getElementById("round").innerText = round;
}

/* COUNT */
function increaseCount() {
    count++;

    if (count > 108) {
        count = 1;
        round++;
        flashEffect("count");
    }

    update();
}

function decreaseCount() {
    if (count <= 0) {
        alert("Count negative nahi ho sakta ❌");
        return;
    }
    count--;
    update();
}

/* ROUND */
function increaseRound() {
    round++;
    update();
}

function decreaseRound() {
    if (round <= 0) {
        alert("Round negative nahi ho sakta ❌");
        return;
    }
    round--;
    update();
}

/* RESET */
function resetAll() {
    count = 0;
    round = 0;
    update();
}

/* ANIMATION */
function flashEffect(id) {
    let el = document.getElementById(id);
    el.classList.add("flash");

    setTimeout(() => {
        el.classList.remove("flash");
    }, 500);
}

