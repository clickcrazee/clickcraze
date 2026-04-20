document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});