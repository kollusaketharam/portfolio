// Redirect on button click
function goTo(page) {
  window.location.href = page;
}

// Randomize logo animation speeds
document.querySelectorAll(".logo").forEach(logo => {
  const duration = Math.floor(Math.random() * 10) + 10; // 10–20s
  logo.style.animationDuration = duration + "s";
});
