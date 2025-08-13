// Header BG reveal

const headerBG = () => {
  const header = document.querySelector(".js-header");

  window.addEventListener("scroll", function() {
    if (this.scrollY) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  });
};

headerBG();

/* Nav */

const navigation = () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector (".js-nav");
  const navItems = nav.querySelectorAll ("li");

  const navToggle = () => {
    nav.classList.toggle("open");
    navToggler.classList.toggle("active");
  }

  navToggler.addEventListener("click", navToggle);

  /* EvenListener2 */

  navItems.forEach((li)=>{
    li.querySelector("a").addEventListener("click", ()=> {
      if(window.innerWidth <= 767) {
        navToggle();
      }
    });
  });
}

navigation();