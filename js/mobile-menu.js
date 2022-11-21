(() => {
  const refs = {
    openModMenuBtn: document.querySelector("[data-menu-open]"),
    closeModMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openModMenuBtn.addEventListener("click", toggleModMenu);
  refs.closeModMenuBtn.addEventListener("click", toggleModMenu);

  function toggleModMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();