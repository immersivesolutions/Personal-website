// Premium, subtle JS: mobile nav toggle + footer year
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuBtn = document.querySelector(".menu");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  const toggle = () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  };

  menuBtn.addEventListener("click", toggle);

  // Close mobile menu on link click
  mobileNav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("a")) {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    }
  });
})();
