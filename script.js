function handleCount() {
  let count = document.getElementById("count");
  let countNum = Number(count.innerHTML);
  countNum++;
  count.innerHTML = countNum;
  if (countNum % 5 == 0) {
    alert("Dikkatinizi Toplamalısınız Derin Nefes Alıp Verin!");
  }
}

const audioBirdPlay = document.getElementById("audioBirdPlay");
const birdPlay = document.getElementById("birdPlay");

birdPlay.addEventListener("click", function () {
  if (audioBirdPlay.paused) {
    audioBirdPlay.play();
    birdPlay.className = "fa-solid fa-music";
  } else {
    audioBirdPlay.pause();
    birdPlay.className = "fa-solid fa-dove";
  }
});
const audioWindPlay = document.getElementById("audioWindPlay");
const windPlay = document.getElementById("windPlay");

windPlay.addEventListener("click", function () {
  if (audioWindPlay.paused) {
    audioWindPlay.play();
    windPlay.className = "fa-solid fa-music";
  } else {
    audioWindPlay.pause();
    windPlay.className = "fa-solid fa-wind";
  }
});

const audioRainPlay = document.getElementById("audioRainPlay");
const rainyPlay = document.getElementById("rainyPlay");

rainyPlay.addEventListener("click", function () {
  if (audioRainPlay.paused) {
    audioRainPlay.play();
    rainyPlay.className = "fa-solid fa-music";
  } else {
    audioRainPlay.pause();
    rainyPlay.className = "fa-solid fa-cloud-showers-heavy";
  }
});

const volume = document.getElementById("volume");
volume.addEventListener("input", function () {
audioBirdPlay.volume = volume.value/ 100;
audioWindPlay.volume = volume.value/ 100;            
audioRainPlay.volume = volume.value/ 100;  
});
