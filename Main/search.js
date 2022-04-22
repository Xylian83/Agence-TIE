let searchbar = document.querySelector(".search");

function slide() {
  if (searchbar.classList.contains("hide")) {
    searchbar.classList.remove("hide");
  } else {
    searchbar.classList.add("hide");
  }
}

function ouvrirPage() {
  let a = document.getElementById("search").value;

  if (a === "CPU") {
    window.open("/CPU/CPU.html");
  }

  if (a !== "CPU") {
    window.open("/Erreur/Erreur.html");
  }
}
