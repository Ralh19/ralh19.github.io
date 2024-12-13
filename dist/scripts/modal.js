// Fonction pour ouvrir le modal
function openModal(imageSrc, description) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDescription = document.getElementById('modal-description');

  modalImg.src = imageSrc; // Mettre à jour l'image du modal
  modalDescription.textContent = description; // Mettre à jour la description du modal
  modal.classList.remove('hidden'); // Retire "hidden" pour afficher
  modal.classList.add('flex'); // Ajoute "flex" pour centrer
}

// Fonction pour fermer le modal
document.getElementById('close-modal').addEventListener('click', function() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden'); // Ajoute "hidden" pour masquer
  modal.classList.remove('flex'); // Retire "flex" lorsqu'on cache le modal
});
