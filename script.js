/* ============================================================
   PORTFOLIO JAVASCRIPT
   - Smooth scrolling, navbar effects, animations
   - Contact form handling
   ============================================================ */

// ============================================================
// NAVBAR FUNCTIONALITY
// ============================================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================================
// SMOOTH SCROLLING
// ============================================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// ============================================================
// FADE-UP ANIMATIONS ON SCROLL
// ============================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-up elements
document.querySelectorAll('.fade-up').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});

// ============================================================
// CONTACT FORM HANDLING
// ============================================================

function handleContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Get form values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  // Create mailto link
  const mailtoLink = `mailto:salehalnassar456@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Reset form
  form.reset();
  
  // Show success message
  showNotification('Message prepared! Your email client will open.');
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #1a1a2e;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    z-index: 2000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animations to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================================
// PAGE LOAD ANIMATIONS
// ============================================================

window.addEventListener('load', () => {
  // Animate hero content on page load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeUp 0.8s ease forwards';
  }
});

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================

document.addEventListener('keydown', (e) => {
  // Close menu with Escape key
  if (e.key === 'Escape') {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// ============================================================
// PERFORMANCE: Lazy load images if needed
// ============================================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

console.log('Portfolio loaded successfully! 🚀');
