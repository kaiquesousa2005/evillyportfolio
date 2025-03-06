AOS.init({
  duration: 1000,
  once: true,
})

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

document.querySelectorAll(".grid-trabalhos img, .grid-outros-trabalhos img").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)"
  })
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)"
  })
})

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".sobre")
  const coords = scrolled * 0.4 + "px"
  parallax.style.backgroundPositionY = coords
})

const header = document.querySelector('header')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)'
  } else {
    header.style.transform = 'translateY(0)'
  }
  lastScrollTop = scrollTop
})

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });
});

