
  window.onload=function(){

    function classsToggle () {
        const navs = document.querySelectorAll(".Navbar-items")
    
        navs.forEach(nav => nav.classList.toggle("Navbar-ToggleShow"));
    }
    document.querySelector(".Navbar-toggle") /* Selecting the menu icon */
        .addEventListener("click", classsToggle);
    }