// function Openbar() {
//   const sidebar = document.getElementById("sidebar");

//   if (window.innerWidth < 1024) {
//     sidebar.classList.toggle("-translate-x-full");
//   }
// }

// // Handle initial state
// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar");

//   if (window.innerWidth < 1024) {
//     sidebar.classList.add("left-[-300px]");
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar");
//   const menuBtn = document.getElementById("menu-btn");

//   // Initial state on small screens
//   if (window.innerWidth < 1024) {
//     sidebar.classList.add("-translate-x-full");
//   }

//   const toggleSidebar = () => {
//     sidebar.classList.toggle("-translate-x-full");
//   };

//   // Support mouse and touch
//   menuBtn.addEventListener("click", toggleSidebar);
//   menuBtn.addEventListener("touchstart", toggleSidebar);

//   // Also handle closing sidebar via X button
//   const closeBtn = sidebar.querySelector("i.bi-x");
//   closeBtn.addEventListener("click", toggleSidebar);
//   closeBtn.addEventListener("touchstart", toggleSidebar);
// });

// function Openbar() {
//   const sidebar = document.getElementById("sidebar");

//   if (window.innerWidth < 1024) {
//     sidebar.classList.toggle("-translate-x-full");
//   }
// }

// // Gérer l'état initial de la sidebar
// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar");

//   // Sur les grands écrans (plus de 1024px), la sidebar doit être visible
//   if (window.innerWidth >= 1024) {
//     sidebar.classList.remove("-translate-x-full"); // Assure que la sidebar est visible
//   } else {
//     sidebar.classList.add("-translate-x-full"); // Cache la sidebar par défaut sur les petits écrans
//   }
// });

// // Gérer les événements de clic pour ouvrir/fermer la sidebar
// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar");
//   const menuBtn = document.getElementById("menu-btn");

//   // Fonction pour toggle la sidebar
//   const toggleSidebar = () => {
//     sidebar.classList.toggle("-translate-x-full");
//   };

//   // Ajouter des événements pour le bouton hamburger
//   menuBtn.addEventListener("click", toggleSidebar);
//   menuBtn.addEventListener("touchstart", toggleSidebar);

//   // Gérer la fermeture de la sidebar via le bouton X
//   const closeBtn = sidebar.querySelector("i.bi-x");
//   closeBtn.addEventListener("click", toggleSidebar);
//   closeBtn.addEventListener("touchstart", toggleSidebar);
// });

function Openbar() {
  const sidebar = document.getElementById("sidebar");

  if (window.innerWidth < 1024) {
    sidebar.classList.toggle("-translate-x-full");
  }
}

// Gérer l'état initial de la sidebar
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  // Sur les grands écrans (plus de 1024px), la sidebar doit être visible
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove("-translate-x-full"); // Assure que la sidebar est visible
  } else {
    sidebar.classList.add("-translate-x-full"); // Cache la sidebar par défaut sur les petits écrans
  }
});

// Gérer les événements de clic pour ouvrir/fermer la sidebar
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");

  // Fonction pour basculer la sidebar
  const toggleSidebar = () => {
    sidebar.classList.toggle("-translate-x-full");
  };

  // Ajouter des événements pour le bouton hamburger
  menuBtn.addEventListener("click", toggleSidebar);

  // Utilisation de touchend pour une interaction tactile plus précise
  menuBtn.addEventListener("touchend", (event) => {
    event.preventDefault(); // Empêche les actions par défaut qui peuvent interférer
    toggleSidebar();
  });

  // Gérer la fermeture de la sidebar via le bouton X
  const closeBtn = sidebar.querySelector("i.bi-x");
  closeBtn.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("touchend", (event) => {
    event.preventDefault(); // Empêche les actions par défaut
    toggleSidebar();
  });
});
