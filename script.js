const navIcon = document.getElementById("navIcon");
const navBox = document.getElementById("bavBox");

navIcon.addEventListener("click", (e) => {
   e.stopPropagation();
   if (navBox.classList.contains("nav__box-hiden"))
      navBox.classList.remove("nav__box-hiden");
   else navBox.classList.add("nav__box-hiden");
});

navBox.addEventListener("click", (e) => {
   e.stopPropagation();
   e.target.classList.contains("nav__link") &&
      navBox.classList.add("nav__box-hiden");
});
