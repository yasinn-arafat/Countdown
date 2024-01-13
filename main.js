// Countdown

const counter = document.querySelectorAll(".counter");
const btn = document.querySelector(".btn");
let counterArr = Array.from(counter);

btn.addEventListener("click", function () {
  counterArr.map((e) => {
    let counterValue = e.innerHTML;
    let count = 0;

    function counterUp() {
      e.innerHTML = count;
      count++;
    }

    const stop = setInterval(() => {
      if (count >= counterValue) {
        clearInterval(stop);
      }
      counterUp();
    }, 25);
  });
});
