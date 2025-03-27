function openModal(element) {
  const modal = document.getElementById("certification-modal");

  // Show modal and navigation
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  // Store current image and its type for carousel
  window.currentImage = element;
  window.currentType =
    element.getAttribute("data-type") ||
    element.closest(".card").getAttribute("data-type");

  // Call updateModalContent immediately
  updateModalContent(element);

  // Ensure navigation buttons are visible
  const navButtons = modal.querySelectorAll('button[onclick^="switchImage"]');
  navButtons.forEach((button) => {
    button.classList.remove("hidden");
  });
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
      skillIcon.src = `images/skillsIcons/${skill}_ico.png`;
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
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Re-enable scrolling
  document.body.style.overflow = "auto";
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
  const mainModal = document.getElementById("certification-modal");

  // Get gallery images from data attribute
  const galleryContent =
    button.closest(".card")?.getAttribute("data-gallery-content") ||
    window.currentImage.getAttribute("data-gallery-content");

  if (galleryContent) {
    currentGalleryImages = galleryContent.split(",").map((url) => url.trim());
    currentGalleryIndex = 0;

    // Create and append carousel items
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

    // Show gallery modal
    mainModal.classList.add("hidden");
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

  galleryModal.classList.add("hidden");
  galleryModal.classList.remove("flex");
  mainModal.classList.remove("hidden");
  mainModal.classList.add("flex");

  // Clear gallery
  document.getElementById("gallery-carousel").innerHTML = "";
  currentGalleryImages = [];
  currentGalleryIndex = 0;
}
