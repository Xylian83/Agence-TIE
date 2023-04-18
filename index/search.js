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
  a = a.toLowerCase();

  switch (a) {
    case "cpu":
      document.location.href = "/CPU/CPU.html";
      break;
    case "memoire":
    case "mémoire":
    case "sd":
    case "ssd":
    case "ram":
      document.location.href = "/Memoire/sd,ssd,ram.html";
      break;
    default:
      document.location.href = "/Erreur/Erreur.html";
  }
}
