let container = document.querySelectorAll(".box");

// Boxes
let counter = -1;
container.forEach((box) => {
  const originalValue = (counter += 1);
  box.innerHTML = originalValue;
  box.dataset.counter = originalValue;
  // Check Even Numberss
  if (counter % 2 == 0) {
    box.style.cssText = `background-color: green;`;
    // Events Listener
    box.addEventListener("mouseover", () => {
      box.style.cssText = `background-color: rgba(0, 128, 0, 0.493);`;
      box.innerHTML = `Even Number`;
    });
    box.addEventListener("mouseout", () => {
      box.style.cssText = `background-color: green;`;
      box.innerHTML = `${box.dataset.counter}`;
    });

    // Check Odd Numbers
  } else if (counter % 3 === 0) {
    box.style.cssText = `background-color: yellow;`;
    // Events Listener
    box.addEventListener("mouseover", () => {
      box.style.cssText = `background-color: rgba(255, 255, 0, 0.404);`;
      box.innerHTML = `Odd Number`;
    });
    box.addEventListener("mouseout", () => {
      box.style.cssText = `background-color: yellow;`;
      box.innerHTML = `${box.dataset.counter}`;
    });
  } else {
    box.style.cssText = `background-color: yellow;`;
    //Events Listener
    box.addEventListener("mouseover", () => {
      box.style.cssText = `background-color: rgba(255, 255, 0, 0.404);`;
      box.innerHTML = `Odd Number`;
    });
    box.addEventListener("mouseout", () => {
      box.style.cssText = `background-color: yellow;`;
      box.innerHTML = `${box.dataset.counter}`;
    });
  }
  // Function to Chcek Prime number
  if (checkPrime(counter)) {
    box.style.cssText = `background-color: red;`;
    //Events Listener
    box.addEventListener("mouseover", () => {
      box.style.cssText = `background-color: rgba(255, 0, 0, 0.425);`;
      box.innerHTML = `Prime Number`;
    });
    box.addEventListener("mouseout", () => {
      box.style.cssText = `background-color: red;`;
      box.innerHTML = `${box.dataset.counter}`;
    });
  }
});

// check if Prime
function checkPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
