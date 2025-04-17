// const filterButtons = document.querySelectorAll(".filter_buttons button");
// const filterableCards = document.querySelectorAll(".filterable_cards .card");

// // Fonction de filtrage des cartes
// const filterCards = (e) => {
//   // Enlève la classe "active" du bouton actif actuel
//   document.querySelector(".filter_buttons .active").classList.remove("active");

//   // Ajoute "active" au bouton cliqué
//   e.target.classList.add("active");

//   // Récupère la valeur du filtre
//   const filterName = e.target.getAttribute("data-name");

//   // Parcourt chaque carte
//   filterableCards.forEach((card) => {
//     // Montre toutes les cartes si "all" est sélectionné
//     if (filterName === "all" || card.getAttribute("data-name") === filterName) {
//       // Si la carte est cachée, applique l'animation zoom-in
//       if (card.classList.contains("hidden")) {
//         card.classList.remove("hidden", "animate-zoom-out");
//         card.classList.add("animate-zoom-in");
//       }
//     } else {
//       // Si la carte est visible, applique l'animation zoom-out
//       if (!card.classList.contains("hidden")) {
//         card.classList.remove("animate-zoom-in");
//         card.classList.add("animate-zoom-out");

//         // Une fois l'animation terminée, cache la carte
//         card.addEventListener(
//           "animationend",
//           () => {
//             card.classList.add("hidden");
//             card.classList.remove("animate-zoom-out");
//           },
//           { once: true }
//         );
//       }
//     }
//   });
// };

// // Associe chaque bouton à l'événement de clic pour activer le filtre
// filterButtons.forEach((button) =>
//   button.addEventListener("click", filterCards)
// );

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Fonction de filtrage des cartes
const filterCards = (e) => {
  const clickedBtn = e.target;

  // Réinitialise tous les boutons
  filterButtons.forEach((btn) => {
    btn.classList.remove(
      "bg-pink-red",
      "text-white",
      "opacity-50",
      "cursor-not-allowed"
    );
    btn.classList.add("bg-gray-100", "text-black");
    btn.disabled = false;
  });

  // Active le bouton cliqué visuellement et le désactive
  clickedBtn.classList.remove("bg-gray-100", "text-black");
  clickedBtn.classList.add(
    "bg-pink-red",
    "text-white",
    "opacity-50",
    "cursor-not-allowed"
  );
  clickedBtn.disabled = true;

  // Récupère la valeur du filtre
  const filterName = clickedBtn.getAttribute("data-name");

  // Parcourt chaque carte
  filterableCards.forEach((card) => {
    const cardMatches =
      card.getAttribute("data-name") === filterName || filterName === "all";

    if (cardMatches) {
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden", "animate-zoom-out");
        card.classList.add("animate-zoom-in");
      }
    } else {
      if (!card.classList.contains("hidden")) {
        card.classList.remove("animate-zoom-in");
        card.classList.add("animate-zoom-out");
        card.addEventListener(
          "animationend",
          () => {
            card.classList.add("hidden");
            card.classList.remove("animate-zoom-out");
          },
          { once: true }
        );
      }
    }
  });
};

// Associe chaque bouton à l’événement de clic
filterButtons.forEach((button) => {
  button.addEventListener("click", filterCards);
});
