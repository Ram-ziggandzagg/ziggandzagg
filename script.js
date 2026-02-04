const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const site = document.getElementById("site");
document.getElementById("enterBtn").onclick = () => alert("clicked");

enterBtn.addEventListener("click", () => {
  intro.classList.add("open");

  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    document.body.style.overflow = "auto";
  }, 1400);
});

