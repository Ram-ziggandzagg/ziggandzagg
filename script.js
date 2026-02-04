document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  if (!enterBtn || !intro) {
    console.error("Required elements not found", {
      enterBtn,
      intro,
    });
    return;
  }

  enterBtn.addEventListener("click", () => {
    console.log("ENTER clicked");

    intro.classList.add("open");

    setTimeout(() => {
      intro.style.display = "none";
      if (site) site.style.display = "block";
      document.body.style.overflowY = "auto";
    }, 1700);
  });
});
