const navIcon = document.getElementById("navIcon");
const navBox = document.getElementById("bavBox");

// ? show | hidden navBar
navIcon.addEventListener("click", (e) => {
   e.stopPropagation();
   if (navBox.classList.contains("nav__box-hiden"))
      navBox.classList.remove("nav__box-hiden");
   else navBox.classList.add("nav__box-hiden");
});

// ? show | hidden navBar when chiking in some link
navBox.addEventListener("click", (e) => {
   e.stopPropagation();
   e.target.classList.contains("nav__link") &&
      navBox.classList.add("nav__box-hiden");
});
