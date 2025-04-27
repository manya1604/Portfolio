// ========== Typing Animation ==========
const professions = ["Cloud Enthusiast", "Developer", "Passionate Learner", "Problem Solver"];
let professionIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between texts

function type() {
  if (charIndex < professions[professionIndex].length) {
    typedText.textContent += professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = professions[professionIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    professionIndex++;
    if (professionIndex >= professions.length) professionIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (professions.length) setTimeout(type, newTextDelay);

  // ========== Navigation Section Switching ==========
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove 'active' from all sections
      sections.forEach(section => section.classList.remove('active'));

      // Remove 'active' from all nav links
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Add 'active' to clicked nav link
      link.classList.add('active');

      // Show corresponding section
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Initialize the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add 'active' class to the section
            } else {
                entry.target.classList.remove('active'); // Remove it when not in view
            }
        });
    }, {
        root: null,  // Use the viewport as the root
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});



