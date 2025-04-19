function openModal(element) {
  const modal = document.getElementById("certification-modal");

  // Check if the element has the data-open-gallery attribute
  const openGallery = element.getAttribute("data-open-gallery") === "true";

  if (openGallery) {
    // If the attribute is true, open the gallery directly
    openImageGallery(element); // Opens the gallery instead of the main modal
  } else {
    // If no gallery, proceed with the modal as normal
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    // Store current image and its type for carousel
    window.currentImage = element;
    window.currentType = element.getAttribute("data-type") || "image";

    // Call updateModalContent immediately
    updateModalContent(element);

    // Ensure navigation buttons are visible
    const navButtons = modal.querySelectorAll('button[onclick^="switchImage"]');
    navButtons.forEach((button) => {
      button.classList.remove("hidden");
    });
  }
}

// Update these lines in updateModalContent function
function updateModalContent(element) {
  // Update selectors to match new IDs
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalSkills = document.getElementById("modal-skills");
  const galleryButton = document.getElementById("gallery-button");
  const galleryOverlay = document.getElementById("gallery-overlay");
  const ghButton = document.getElementById("gh-button");

  // Handle different element types (certification images vs project buttons)
  const isProject = element.hasAttribute("onclick");

  // Update image source and title
  modalImg.src = isProject ? element.getAttribute("data-image") : element.src;
  modalTitle.textContent = isProject
    ? element.getAttribute("data-title")
    : element.dataset.title;

  // Show/hide gallery button based on data-gallery attribute
  if (element.getAttribute("data-gallery") === "true") {
    galleryButton.classList.remove("hidden");
    if (!galleryOverlay.classList.contains("bg-black")) {
      galleryOverlay.classList.add("bg-black");
    }
  } else {
    galleryButton.classList.add("hidden");
    galleryOverlay.classList.remove("bg-black");
  }

  const ghLink = element.getAttribute("data-gh-link");

  if (ghLink && ghLink.trim() !== "") {
    ghButton.classList.remove("hidden");
    ghButton.setAttribute("href", ghLink);
  } else {
    ghButton.classList.add("hidden");
    ghButton.removeAttribute("href"); // Supprime le lien si absent
  }

  // Clear existing content
  modalDesc.innerHTML = "";

  // Add main description
  const mainDesc = document.createElement("p");
  mainDesc.textContent = isProject
    ? element.getAttribute("data-description")
    : element.dataset.description;
  mainDesc.className = "text-gray-600 mb-4 text-lg";
  modalDesc.appendChild(mainDesc);

  // Handle bullet points if they exist
  const descList = isProject
    ? element.getAttribute("data-description-list")
    : element.dataset.descriptionList;
  if (descList) {
    const ul = document.createElement("ul");
    ul.className = "list-none space-y-2 ml-4";

    descList
      .split("•")
      .filter((item) => item.trim() !== "")
      .forEach((item) => {
        const li = document.createElement("li");
        li.className = "text-gray-600 flex items-start text-lg";
        li.style.textIndent = "10px";
        li.innerHTML = `<span class="mr-2">•</span>${item.trim()}`;
        ul.appendChild(li);
      });

    modalDesc.appendChild(ul);
  }

  // Clear and update skills
  modalSkills.innerHTML = "";
  const skillsData = isProject
    ? element.getAttribute("data-skills")
    : element.dataset.skills;

  if (skillsData && skillsData.trim() !== "") {
    const skills = skillsData.split(",");
    skills.forEach((skill) => {
      const skillIcon = document.createElement("img");
      skillIcon.src = `assets/images/skillsIcons/${skill}_ico.png`;
      skillIcon.alt = skill;
      skillIcon.className = "w-12 h-12 object-contain";
      modalSkills.appendChild(skillIcon);
    });
  }
}

function switchImage(direction) {
  const currentImage = window.currentImage;
  const currentType =
    currentImage.getAttribute("data-type") ||
    currentImage.closest(".card").getAttribute("data-type");

  // Select only images of the same type
  const selector =
    currentType === "certification"
      ? 'img[data-type="certification"]'
      : '.card button[onclick="openModal(this)"][data-type="project"]';

  const allImages = document.querySelectorAll(selector);
  const currentIndex = Array.from(allImages).indexOf(currentImage);

  let nextIndex;
  if (direction === "next") {
    nextIndex = (currentIndex + 1) % allImages.length;
  } else {
    nextIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  }

  window.currentImage = allImages[nextIndex];
  updateModalContent(allImages[nextIndex]);
}

function closeModal() {
  const modal = document.getElementById("certification-modal");
  const galleryModal = document.getElementById("image-gallery-modal");

  // Si la galerie est ouverte et que le modal principal est caché (c'est la galerie seule qui est ouverte)
  if (
    !modal.classList.contains("flex") &&
    !galleryModal.classList.contains("hidden")
  ) {
    // Fermer tous les modals
    galleryModal.classList.add("hidden");
    galleryModal.classList.remove("flex");

    // Réactiver le scrolling
    document.body.style.overflow = "auto";
  } else {
    // Si le modal principal est ouvert, on ferme seulement la galerie
    galleryModal.classList.add("hidden");
    galleryModal.classList.remove("flex");

    // Assurer que le modal principal reste ouvert
    modal.classList.add("flex");
    modal.classList.remove("hidden");
  }
}

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (
    !document.getElementById("certification-modal").classList.contains("hidden")
  ) {
    if (e.key === "ArrowRight") switchImage("next");
    if (e.key === "ArrowLeft") switchImage("prev");
    if (e.key === "Escape") closeModal();
  }
});

let currentGalleryImages = [];
let currentGalleryIndex = 0;

function openImageGallery(button) {
  const modal = document.getElementById("image-gallery-modal");
  const carousel = document.getElementById("gallery-carousel");

  // Get gallery images from data attribute of clicked image
  const galleryContent =
    button.getAttribute("data-gallery-content") ||
    window.currentImage.getAttribute("data-gallery-content");

  if (galleryContent) {
    currentGalleryImages = galleryContent.split(",").map((url) => url.trim());
    currentGalleryIndex = 0;

    // Create and append carousel items for gallery
    carousel.innerHTML = currentGalleryImages
      .map(
        (url, index) => `
            <div class="absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === 0 ? "opacity-100" : "opacity-0"
            }"
                 data-gallery-item="${index}">
                <img src="${url}" 
                     alt="Gallery image ${index + 1}"
                     class="absolute w-full h-full object-contain">
            </div>
        `
      )
      .join("");

    // Show gallery modal and hide main modal
    document.getElementById("certification-modal").classList.add("hidden"); // Hide main modal
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    updateGalleryView();
    updateGalleryCounter(); // Update the counter when the gallery opens
  }
}

function navigateGallery(direction) {
  const itemsCount = currentGalleryImages.length;

  if (direction === "next") {
    currentGalleryIndex = (currentGalleryIndex + 1) % itemsCount;
  } else {
    currentGalleryIndex = (currentGalleryIndex - 1 + itemsCount) % itemsCount;
  }

  updateGalleryView();
  updateGalleryCounter(); // Update the counter when navigating
}

function updateGalleryView() {
  const items = document.querySelectorAll("[data-gallery-item]");

  items.forEach((item, index) => {
    if (index === currentGalleryIndex) {
      item.classList.remove("opacity-0");
      item.classList.add("opacity-100");
    } else {
      item.classList.remove("opacity-100");
      item.classList.add("opacity-0");
    }
  });
}

function updateGalleryCounter() {
  const galleryCounter = document.getElementById("gallery-counter");
  galleryCounter.textContent = `Image ${currentGalleryIndex + 1} / ${
    currentGalleryImages.length
  }`;
}

function closeImageGallery() {
  const galleryModal = document.getElementById("image-gallery-modal");
  const mainModal = document.getElementById("certification-modal");

  // Si seule la galerie est ouverte
  if (!mainModal.classList.contains("flex")) {
    // Fermer la galerie et tout
    galleryModal.classList.add("hidden");
    galleryModal.classList.remove("flex");

    // Réactiver le scrolling
    document.body.style.overflow = "auto";
  } else {
    // Fermer seulement la galerie, garder le modal principal ouvert
    galleryModal.classList.add("hidden");
    galleryModal.classList.remove("flex");

    // Garder le modal principal ouvert
    mainModal.classList.add("flex");
    mainModal.classList.remove("hidden");
  }
}

function closeAllModals() {
  // Close both modals (main modal and gallery modal)
  const modal = document.getElementById("certification-modal");
  const galleryModal = document.getElementById("image-gallery-modal");

  modal.classList.add("hidden");
  galleryModal.classList.add("hidden");

  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

function closeMainModal() {
  const modal = document.getElementById("certification-modal");

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Réactiver le scrolling
  document.body.style.overflow = "auto";
}
