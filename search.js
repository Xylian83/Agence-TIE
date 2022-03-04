var searchbar = document.querySelector(".search");

function slide() {
  if (searchbar.classList.contains("hide")) {
    searchbar.classList.remove("hide");
  } else {
    searchbar.classList.add("hide");
  }
}

function ouvrirPage() {
  var a = document.getElementById("search").value;

  if (a === "html") {
    window.open("");
  }
}
