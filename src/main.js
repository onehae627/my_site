// Header에 페이지 아래로 스크롤시 다크 스타일링 적용.
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함.
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //   console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Home 절반정도 내려가면 arrow 버튼이 나오도록.
const arrowUp = document.querySelector(".arrow_up");
const arrowHeight = arrowUp.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header_menu");
const navBarToggle = document.querySelector(".header_toggle");
navBarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌.
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
