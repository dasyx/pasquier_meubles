import "@fortawesome/fontawesome-free/css/all.css";
import "../css/styles.scss";
import "../js/tailwind.generated.js";
import "flowbite";

import createButton from "../components/button";

// Affichage conditionnel du menu dropdown logo lowres
let hdBtnLowres = document.getElementById("header_btn-lowres");
let hdDropdown = document.getElementById("header_dropdown-lowres");
let navLogoBtnLowres = document.getElementById("nav_logo_btn-lowres");
let navLogoMenuHiRes = document.getElementById("nav_logo_menu-hires");
let navLogoDropdownMenuLowRes = document.getElementById(
  "nav_logo_dropdown-lowres"
);
let myButton = document.getElementById("fb-btn");

myButton.appendChild(createButton());

// Affichage conditionnel du menu dropdown header (menu fb logo) et du menu dropdown logo pasquier
if ((window.innerWidth || document.body.clientWidth) <= 1024) {
  let isVisible = false;
  hdBtnLowres.addEventListener("click", function () {
    if (isVisible) {
      hdDropdown.style.display = "block";
      isVisible = false;
    } else {
      hdDropdown.style.display = "none";
      isVisible = true;
    }
  });
  navLogoBtnLowres.addEventListener("click", function () {
    if (isVisible) {
      navLogoDropdownMenuLowRes.style.display = "none";
      isVisible = false;
    } else {
      navLogoDropdownMenuLowRes.style.display = "block";
      isVisible = true;
    }
  });
} else {
  hdDropdown.style.display = "none";
  navLogoDropdownMenuLowRes.style.display = "none";
}

// Cacher le menu dropdown par défaut en haute résolution
if (window.innerWidth >= 1024) {
  hdDropdown.style.visibility = "hidden";
}

// Définir la résolution d'affichage à laquelle le bouton logo menu doit apparaître/disparaître
const displayWidth = 1024;

// Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  // Vérifier la largeur de la fenêtre
  if (window.innerWidth < displayWidth) {
    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "none";
  } else {
    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    hdDropdown.style.display = "none";
  }
});

// Ajouter un écouteur d'événements au chargement de la fenêtre
window.addEventListener("load", function () {
  // Vérifier la largeur de la fenêtre
  if (window.innerWidth <= displayWidth) {
    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "none";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("follow").innerHTML = "Suivre";
  } else {
    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    hdDropdown.style.display = "none";
    document.getElementById("contact").innerHTML = "Contactez-nous";
    document.getElementById("follow").innerHTML = "Suivez-nous";
  }
});

// Script affichant la date actuelle
let date = document.getElementById("getDate");
let actualDate = new Date().getFullYear();
date.innerHTML = actualDate;

// Script qui modifie le DOM pour ajouter les liens du header logo lowres
let ourStory = document.getElementById("histoire");
let products = document.getElementById("produits");
let inspirations = document.getElementById("inspirations");
let pointsforts = document.getElementById("pointsforts");
let dropdownMenu1 = document.getElementById("dropdown-menu1");
let dropdownMenu2 = document.getElementById("dropdown-menu2");
let dropdownMenu3 = document.getElementById("dropdown-menu3");
let dropdownMenu4 = document.getElementById("dropdown-menu4");
let dropdownMenu5 = document.getElementById("dropdown-menu5");

// Pour la rubrique notre histoire
ourStory.addEventListener("click", function () {
  if (dropdownMenu1.classList.contains("hidden")) {
    dropdownMenu1.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add(
      "rounded-t",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link1.setAttribute("href", "./src/pages/biographie.html");
    link1.textContent = "A l'origine";

    /* link2.classList.add(
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link3.setAttribute("href", "#");
    link3.textContent = "A définir"; */

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    dropdownMenu1.appendChild(listItem1);
    dropdownMenu1.appendChild(listItem2);
    dropdownMenu1.appendChild(listItem3);
  } else {
    dropdownMenu1.classList.add("hidden");
    while (dropdownMenu1.firstChild) {
      dropdownMenu1.removeChild(dropdownMenu1.firstChild);
    }
  }
});

// Pour la rubrique produits
products.addEventListener("click", function () {
  if (dropdownMenu2.classList.contains("hidden")) {
    dropdownMenu2.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var listItem4 = document.createElement("li");
    var listItem5 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");
    var link4 = document.createElement("a");
    var link5 = document.createElement("a");

    link1.classList.add(
      "rounded-t",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link1.setAttribute("href", "./src/pages/choix_salons.html");
    link1.textContent = "Les salons";

    link2.classList.add(
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link2.setAttribute("href", "./src/pages/choix_armoires_buffets.html");
    link2.textContent = "Armoires & buffets";

    link3.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link3.setAttribute("href", "./src/pages/choix_bureaux.html");
    link3.textContent = "Bureaux";

    link4.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link4.setAttribute("href", "./src/pages/choix_chaises_fauteuils.html");
    link4.textContent = "Chaises & fauteuils";

    link5.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link5.setAttribute("href", "./src/pages/choix_decorations_accessoires.html");
    link5.textContent = "Décoration & accessoires";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);
    listItem4.appendChild(link4);
    listItem3.appendChild(link5);

    dropdownMenu2.appendChild(listItem1);
    dropdownMenu2.appendChild(listItem2);
    dropdownMenu2.appendChild(listItem3);
    dropdownMenu2.appendChild(listItem4);
    dropdownMenu2.appendChild(listItem5);
  } else {
    dropdownMenu2.classList.add("hidden");
    while (dropdownMenu2.firstChild) {
      dropdownMenu2.removeChild(dropdownMenu2.firstChild);
    }
  }
});

// Pour la rubrique inspirations
inspirations.addEventListener("click", function () {
  if (dropdownMenu3.classList.contains("hidden")) {
    dropdownMenu3.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var listItem4 = document.createElement("li");
    var listItem5 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");
    var link4 = document.createElement("a");
    var link5 = document.createElement("a");

    link1.classList.add(
      "rounded-t",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link1.setAttribute("href", "./src/pages/classique.html");
    link1.textContent = "classique";

    link2.classList.add(
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link2.setAttribute("href", "./src/pages/contemporain.html");
    link2.textContent = "contemporain";

    link3.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link3.setAttribute("href", "./src/pages/industriel.html");
    link3.textContent = "industriel";

    link4.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link4.setAttribute("href", "./src/pages/nordique.html");
    link4.textContent = "nordique";

    link5.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link5.setAttribute("href", "./src/pages/rustique.html");
    link5.textContent = "rustique";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);
    listItem4.appendChild(link4);
    listItem5.appendChild(link5);

    dropdownMenu3.appendChild(listItem1);
    dropdownMenu3.appendChild(listItem2);
    dropdownMenu3.appendChild(listItem3);
    dropdownMenu4.appendChild(listItem4);
    dropdownMenu5.appendChild(listItem5);
  } else {
    dropdownMenu3.classList.add("hidden");
    while (dropdownMenu3.firstChild) {
      dropdownMenu3.removeChild(dropdownMenu3.firstChild);
    }
  }
});

// Pour la rubrique points forts
pointsforts.addEventListener("click", function () {
  if (dropdownMenu4.classList.contains("hidden")) {
    dropdownMenu4.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add(
      "rounded-t",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link1.setAttribute("href", "./src/pages/points_forts.html");
    link1.textContent = "Notre engagement qualité";

    /* link2.classList.add(
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add(
      "rounded-b",
      "bg-gray-200",
      "hover:bg-gray-400",
      "py-2",
      "px-4",
      "block",
      "whitespace-nowrap"
    );
    link3.setAttribute("href", "#");
    link3.textContent = "A définir"; */

    listItem1.appendChild(link1);
    /* listItem2.appendChild(link2);
    listItem3.appendChild(link3); */

    dropdownMenu4.appendChild(listItem1);
    /* dropdownMenu4.appendChild(listItem2);
    dropdownMenu4.appendChild(listItem3); */
  } else {
    dropdownMenu4.classList.add("hidden");
    while (dropdownMenu4.firstChild) {
      dropdownMenu4.removeChild(dropdownMenu4.firstChild);
    }
  }
});

// Affichage des images plein écran
/* const img = document.querySelector(".clickable");

img.addEventListener("click", function () {
  const fullscreen = document.createElement("div");
  fullscreen.className = "fullscreen";
  fullscreen.style.backgroundImage = `url(${this.getAttribute(
    "data-fullscreen-src"
  )})`;
  document.body.appendChild(fullscreen);

  fullscreen.addEventListener("click", function () {
    document.body.removeChild(this);
  });
}); */