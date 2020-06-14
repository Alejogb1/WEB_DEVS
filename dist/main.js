
 /* Navbar*/
 var side = document.getElementById('myNavbar');
 var sideBarOpen = false;
 /*Open & Close functions */
    function openNav() {
    side.style.width = "250px";
    side.style.boxShadow = "0 20px 30px 0 rgba(0,0,0,.5)"
    sideBarOpen = true;
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
}
    
    function closeNav() {
      document.getElementById("myNavbar").style.width = "0px";
      sideBarOpen = false;
      document.body.style.backgroundColor = "inherit";
      side.style.boxShadow = "0"
}

/* When clicked outside the navbar, close*/
window.onclick = function(event) {
  if (sideBarOpen) {
    if (event.target !== side && event.target !== document.getElementById('openIcon')) {
      closeNav();
    }
  }
}
