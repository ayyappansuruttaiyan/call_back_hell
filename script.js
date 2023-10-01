const counterEle = document.getElementById("counter");
const messageELe = document.getElementById("message");
const imgEle = document.querySelector(".hidden");
setTimeout(() => {
  let counter = 10;
  counterEle.textContent = `Counter Down: ${counter}`;
  setTimeout(() => {
    counter--;
    counterEle.textContent = `Counter Down: ${counter}`;
    setTimeout(() => {
      counter--;
      counterEle.textContent = `Counter Down: ${counter}`;
      setTimeout(() => {
        counter--;
        counterEle.textContent = `Counter Down: ${counter}`;
        setTimeout(() => {
          setTimeout(() => {
            counter--;
            counterEle.textContent = `Counter Down: ${counter}`;
            setTimeout(() => {
              counter--;
              counterEle.textContent = `Counter Down: ${counter}`;
              setTimeout(() => {
                counter--;
                counterEle.textContent = `Counter Down: ${counter}`;
                setTimeout(() => {
                  counter--;
                  counterEle.textContent = `Counter Down: ${counter}`;
                  setTimeout(() => {
                    counter--;
                    counterEle.textContent = `Counter Down: ${counter}`;
                    setTimeout(() => {
                      counter--;
                      counterEle.textContent = `Counter Down: ${counter}`;
                      setTimeout(() => {
                        counterEle.textContent = "";
                        messageELe.textContent = "Happy Independence Day";
                        imgEle.classList.remove("hidden");
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
