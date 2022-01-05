window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    // console.log(e);
    // key.classList.remove("playing");
    if (e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing");
}

function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}
