function animateProgress(element) {
  let counter = element.querySelector(".counter");
  let progressBar = element.querySelector(".progress-bar");
  let targetValue = parseInt(element.getAttribute("data-value"), 10) || 0;
  let currentValue = 0;

  // Reset progress bar and counter
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";
  counter.textContent = "0%";

  setTimeout(() => {
    progressBar.style.transition = "width 1.5s ease-in-out";
    progressBar.style.width = targetValue + "%";

    let interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue++;
        counter.textContent = currentValue + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  }, 50); // Small delay to allow reset effect
}

document.querySelectorAll(".group").forEach((group) => {
  group.addEventListener("mouseenter", function () {
    animateProgress(this);
  });
});

// Observer for visibility detection
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgress(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% visible

document.querySelectorAll(".group").forEach((group) => {
  observer.observe(group);
});
