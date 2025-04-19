function animateProgress(element) {
  let counter = element.querySelector(".counter");
  let progressBarParent = element.querySelector(".progress-bar");

  if (!progressBarParent) return;

  let progressBar = progressBarParent.querySelector(".bg-pink-red-light");
  if (!progressBar) return;

  let targetValue = parseInt(element.getAttribute("data-value"), 10) || 0;
  let currentValue = 0;

  // Éviter les animations répétées
  if (element.classList.contains("animated")) return;

  element.classList.add("animated");

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
  }, 50);
}

// Observer chaque élément .group (et pas seulement la section)
const skillGroups = document.querySelectorAll(".group");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgress(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Appliquer l'observer à chaque .group
skillGroups.forEach((group) => {
  observer.observe(group);

  // Fallback pour desktop avec hover
  group.addEventListener("mouseenter", function () {
    animateProgress(this);
  });
});
