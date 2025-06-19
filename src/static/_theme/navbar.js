window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".navbar-burger");
  const tgt = btn ? btn.dataset.target : null;
  if (!tgt) return;
  const tgtEl = document.getElementById(tgt);
  btn.addEventListener("click", () => tgtEl.classList.toggle("is-active"));
});
