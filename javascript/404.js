const sun = document.getElementById("sun-animate");
const audio = new Audio("../assets/screaming_sun.mp3");

let currentPercent = 0;
let volume = 0;

const showPercent = window.setInterval(function () {
  if (currentPercent < 100) {
    currentPercent += 1;
  } else {
    currentPercent = 0;
  }

  audio.volume = volume;

  if (currentPercent >= 25 && currentPercent < 50) {
    volume = parseFloat(parseFloat(volume + 0.04).toFixed(2));
  } else if (currentPercent >= 50 && currentPercent < 75) {
    volume = parseFloat(parseFloat(volume - 0.04).toFixed(2));
  }
}, 100); // Runs at a rate based on the animation's
// duration (milliseconds / 100)

audio.loop = true;

document.addEventListener("click", function (e) {
  audio.play();
});
