// script.js

// Gestion du Menu Burger
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li a");

// Toggle du menu burger
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");

  // Mettre à jour l'attribut ARIA
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", !expanded);
});

// Fermer le menu burger lorsqu'un lien est cliqué (pour mobiles)
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
      burger.setAttribute("aria-expanded", false);
    }
  });
});

// Gestion du Formulaire de Contact avec EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collecte des données du formulaire
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation simple du formulaire
    if (!name || !email || !phone || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Configuration des paramètres EmailJS
    const serviceID = "YOUR_SERVICE_ID"; // Remplacez par votre ID de service EmailJS
    const templateID = "YOUR_TEMPLATE_ID"; // Remplacez par votre ID de template EmailJS

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    // Envoi de l'email via EmailJS
    emailjs.send(serviceID, templateID, templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Votre demande de devis a été envoyée avec succès !");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    );
  });

// Smooth Scrolling pour les liens d'ancrage
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // ajuster la hauteur si nécessaire
        behavior: "smooth",
      });
    }
  });
}
