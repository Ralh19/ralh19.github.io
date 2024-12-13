// Fonction pour ouvrir le modal

const modalStructure = document.getElementById("modal-structure");
const modal = document.getElementById("modal");

function openModal(imageSrc, description) {
  const modalImg = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-description");

  modalImg.src = imageSrc; // Mettre à jour l'image du modal
  modalDescription.textContent = description; // Mettre à jour la description du modal
  modal.classList.remove("hidden"); // Retire "hidden" pour afficher
  modal.classList.add("flex"); // Ajoute "flex" pour centrer
}
modalStructure.addEventListener("click", (event) => {
  if (event.target === modalStructure) {
    modal.classList.add("hidden"); // Ajoute "hidden" pour masquer
    modal.classList.remove("flex"); // Retire "flex" lorsqu'on cache le modal
  }
});
