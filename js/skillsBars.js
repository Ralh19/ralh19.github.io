function animateProgress(element) {
  let counter = element.querySelector(".counter");

  // Sélectionner le parent progress-bar, puis l'enfant de la barre de progression
  let progressBarParent = element.querySelector(".progress-bar");
  if (!progressBarParent) {
    console.log("L'élément'est pas afficher actuellement");
    return; // Sortir si l'élément parent n'existe pas
  }

  let progressBar = progressBarParent.querySelector(".bg-pink-red-light"); // L'élément réel de la barre
  if (!progressBar) {
    console.error("L'élément de la barre de progression n'a pas été trouvé.");
    return; // Sortir si l'élément de la barre n'est pas trouvé
  }

  let targetValue = parseInt(element.getAttribute("data-value"), 10) || 0;
  let currentValue = 0;

  // Réinitialiser la barre de progression et le compteur
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
  }, 50); // Petit délai pour permettre l'effet de réinitialisation
}

// Observer pour la section des compétences
const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Observer les éléments dans la section des compétences
        const skillGroups = entry.target.querySelectorAll(".group");
        skillGroups.forEach((group) => {
          animateProgress(group); // Animer la barre de progression lorsque visible
        });
      }
    });
  },
  { threshold: 0.5 } // Déclencher lorsque la section est à 50% visible
);

// Observer la section des compétences
observer.observe(skillsSection);

// Observer les éléments à l'intérieur de la section Mes Compétences
document.querySelectorAll(".group").forEach((group) => {
  group.addEventListener("mouseenter", function () {
    animateProgress(this);
  });
});
