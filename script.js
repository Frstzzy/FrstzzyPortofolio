var tombol = document.getElementById("tombol-menu");
var menu = document.getElementById("menu");

function toggleMenu(buka) {
  menu.classList.toggle("buka", buka);
  tombol.setAttribute("aria-expanded", buka);
  tombol.textContent = buka ? "✕" : "☰";
}

tombol.addEventListener("click", function () {
  toggleMenu(!menu.classList.contains("buka"));
});