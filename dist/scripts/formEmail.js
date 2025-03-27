(function () {
  emailjs.init({
    publicKey: "Ir-bXgpJ33TgHG68v",
  });
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    var last_name = document.getElementById("last_name").value.toUpperCase();
    var first_name = document.getElementById("first_name").value;
    first_name = first_name.replace(/\b\w/g, (match) => match.toUpperCase());
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var valid = true;

    // Vérification que tous les champs sont remplis
    if (!last_name) {
      showError("last_name", "Le nom est requis.");
      valid = false;
    }
    if (!first_name) {
      showError("first_name", "Le prénom est requis.");
      valid = false;
    }
    if (!subject) {
      showError("subject", "L'objet est requis.");
      valid = false;
    }
    if (!email) {
      showError("email", "L'email est requis.");
      valid = false;
    }
    if (!message) {
      showError("message", "Le message est requis.");
      valid = false;
    }

    // Vérification de la validité de l'email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      showError("email", "Veuillez entrer une adresse e-mail valide.");
      valid = false;
    }

    // Vérification de la longueur minimale du message
    if (message && message.length < 10) {
      showError("message", "Le message doit contenir au moins 10 caractères.");
      valid = false;
    }

    // Vérification des caractères spéciaux dans le nom et prénom
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>=+°$£¤µ]/;
    if (last_name && specialCharRegex.test(last_name)) {
      showError(
        "last_name",
        "Le nom ne doit pas contenir de caractères spéciaux ou d'espaces."
      );
      valid = false;
    }
    if (first_name && specialCharRegex.test(first_name)) {
      showError(
        "first_name",
        "Le prénom ne doit pas contenir de caractères spéciaux ou d'espaces."
      );
      valid = false;
    }

    // Ne pas envoyer si un champ est invalide
    if (!valid) {
      return;
    }

    // Créer l'objet templateParams pour l'envoi de l'email
    var templateParams = {
      last_name: last_name,
      first_name: first_name,
      subject: subject,
      email: email,
      message: message,
    };

    console.log(templateParams);

    // Envoi de l'email via EmailJS
    emailjs.send("service_34f7ejn", "template_yiqxlcm", templateParams).then(
      function () {
        showMessage("Message envoyé avec succès !");
        // Réinitialiser les champs du formulaire après un envoi réussi
        document.getElementById("contact-form").reset();
      },
      function (error) {
        showMessage("Échec de l'envoi du message.");
      }
    );
  });

// Fonction pour afficher un message d'erreur sous un champ.
function showError(fieldId, message) {
  var field = document.getElementById(fieldId);
  var errorDiv = document.createElement("div");
  errorDiv.className =
    "error-message text-pink-red-light font-semibold text-sm mt-1";
  errorDiv.textContent = message;
  field.parentElement.appendChild(errorDiv);
}

// Fonction pour supprimer tous les messages d'erreur
function clearErrors() {
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (error) {
    error.remove();
  });
}

// Fonction pour afficher un message (apparaît pendant 5 secondes)
function showMessage(message) {
  const container = document.getElementById("message-container");
  const messageElement = document.createElement("div");

  messageElement.textContent = message;
  messageElement.className = "m-3 px-4 py-2 rounded shadow";
  messageElement.style.color = "rgb(101, 163, 13)";

  // Ajoute le message au conteneur
  container.appendChild(messageElement);

  // Faire disparaître le message après 5 secondes
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}
