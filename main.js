const scroller = document.querySelectorAll('.container__scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation(){
    scroller.forEach((scroller) => {
    
        scroller.setAttribute("data-animated", true);

        const scrollInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);

            scrollInner.appendChild(duplicatedItem);

        })
    });
}

// Set the target date for the countdown (adjust this to your desired end date)
const countDownDate = new Date("Aug 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the time difference
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Get all the span elements within day__data divs
  const dayDataSpans = document.querySelectorAll('.day__data span');

  // Update the content of each span
  dayDataSpans[0].textContent = days.toString().padStart(2, '0');
  dayDataSpans[1].textContent = hours.toString().padStart(2, '0');
  dayDataSpans[2].textContent = minutes.toString().padStart(2, '0');
  dayDataSpans[3].textContent = seconds.toString().padStart(2, '0');

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".day__time-group").innerHTML = "COUNTDOWN FINISHED";
  }
}, 1000);