const text = "Let the Everyday Item Speak";
const speed = 60;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  AOS.init({
    duration: 1000,
    once: true
  });
  typeWriter();
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 70;
    const top = target.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 3;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + 3) % 3;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

let autoplayInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 5000); // Every 5 seconds

// Optional: Pause autoplay on hover
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
carousel.addEventListener('mouseleave', () => {
  autoplayInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000);
});
