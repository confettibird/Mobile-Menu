const toggleMenu = document.getElementById("toggleMenu");
toggleMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("visible");
//   if the menu wrapper has the class visible, update the text on the button
  if(menu.classList.contains("visible")){
    toggleMenu.innerHTML='Close Menu';
  } else {
    toggleMenu.innerHTML='Open Menu';
  }
}
