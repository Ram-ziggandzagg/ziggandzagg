document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  if (!enterBtn) {
    console.error("ENTER button not found");
    return;
  }

  enterBtn.addEventListener("click", () => {
    console.log("ENTER clicked");
    intro.classList.add("open");

    setTimeout(() => {
      intro.style.display = "none";
      site.style.display = "block";
      document.body.style.overflowY = "auto";
    }, 1700);
  });
});
