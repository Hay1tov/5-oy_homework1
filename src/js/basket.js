const catalogMenu = document.getElementById('catalogMenu')
const catalogBtn = document.getElementById("catalogBtn")

catalogBtn.addEventListener("click", () => {
  catalogMenu.classList.toggle("hidden");
});