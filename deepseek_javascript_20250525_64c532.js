// Preloader
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('fade-out');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
  
  // Initialize animations after load
  initAnimations();
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    const tabId = this.getAttribute('data-tab');
    
    // Remove active class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked button and corresponding tab
    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

// Testimonial slider
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

testimonialDots.forEach(dot => {
  dot.addEventListener('click', function() {
    const slideIndex = this.getAttribute('data-slide');
    
    // Remove active class from all dots and slides
    testimonialDots.forEach(d => d.classList.remove('active'));
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to clicked dot and corresponding slide
    this.classList.add('active');
    testimonialSlides[slideIndex].classList.add('active');
  });
});

// Auto-rotate testimonials
let currentTestimonial = 0;
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
  
  testimonialDots.forEach(d => d.classList.remove('active'));
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  
  testimonialDots[currentTestimonial].classList.add('active');
  testimonialSlides[currentTestimonial].classList.add('active');
}, 5000);

// Animated counter
function initAnimations() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const speed = 200;
  
  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-count');
    const count = +stat.innerText;
    const increment = target / speed;
    
    if (count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(initAnimations, 1);
    } else {
      stat.innerText = target;
    }
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .stat-item').forEach(element => {
  observer.observe(element);
});