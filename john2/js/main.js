/**
 * TextileMarine - Main JavaScript
 * Handles animations, interactions, and functionality for the public site
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initProductFilters();
  initProjectGallery();
  initTestimonialCarousel();
  initContactForm();
  initThemeToggle();
  initBackToTop();
});

/**
 * Navigation functionality
 * - Sticky header on scroll
 * - Mobile menu toggle
 * - Smooth scrolling for anchor links
 */
function initNavigation() {
  const header = document.querySelector('.main-header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  
  // Sticky header on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only if it's an anchor link
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
          mobileMenuToggle.classList.remove('active');
          mainNav.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: targetPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Scroll indicator in hero section
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - headerHeight,
          behavior: 'smooth'
        });
      }
    });
  }
}

/**
 * Scroll effects
 * - Reveal elements on scroll
 * - Parallax effects
 */
function initScrollEffects() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealLeft = document.querySelectorAll('.reveal-left');
  const revealRight = document.querySelectorAll('.reveal-right');
  
  // Set initial item index for staggered animations
  const productCards = document.querySelectorAll('.products-grid .product-card');
  productCards.forEach((card, index) => {
    card.style.setProperty('--item-index', index);
  });
  
  const projectItems = document.querySelectorAll('.projects-gallery .project-item');
  projectItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
  
  const valueItems = document.querySelectorAll('.values-grid .value-item');
  valueItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Reveal elements when they enter the viewport
  function revealOnScroll() {
    revealElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
    
    revealLeft.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
    
    revealRight.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Parallax effect for elements with .parallax-element class
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  function updateParallax() {
    parallaxElements.forEach(element => {
      const scrollPosition = window.pageYOffset;
      const elementPosition = element.offsetTop;
      const distance = scrollPosition - elementPosition;
      
      if (Math.abs(distance) < window.innerHeight) {
        const translateY = distance * 0.1;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  }
  
  // Initial check on page load
  revealOnScroll();
  updateParallax();
  
  // Check on scroll
  window.addEventListener('scroll', function() {
    revealOnScroll();
    updateParallax();
  });
}

/**
 * Product filters
 * - Filter products by category
 */
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  if (filterButtons.length && productCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter products
        productCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

/**
 * Project gallery
 * - Modal for project details
 */
function initProjectGallery() {
  const projectButtons = document.querySelectorAll('.project-details-btn');
  const modal = document.getElementById('project-modal');
  const modalContent = modal ? modal.querySelector('.project-details-content') : null;
  const closeModal = modal ? modal.querySelector('.close-modal') : null;
  
  if (projectButtons.length && modal && modalContent && closeModal) {
    // Project details data (in a real application, this would come from a database or API)
    const projectDetails = {
      project1: {
        title: 'Protection du Queen Mary 2',
        client: 'Chantiers de l\'Atlantique',
        date: 'Janvier - Mars 2024',
        description: `
          <p>Le Queen Mary 2, l'un des paquebots les plus emblématiques au monde, a fait l'objet d'une rénovation majeure aux Chantiers de l'Atlantique à Saint-Nazaire. TextileMarine a été chargée de concevoir et d'installer un système complet de protection textile pour ce projet d'envergure.</p>
          
          <p>Notre équipe a développé une solution sur mesure comprenant :</p>
          <ul>
            <li>Protection complète de la coque pendant les travaux de peinture</li>
            <li>Bâches de confinement pour les zones de soudure et de découpe</li>
            <li>Couvertures ignifugées pour la protection contre les projections</li>
            <li>Structures textiles temporaires pour les zones de travail en hauteur</li>
          </ul>
          
          <p>Ce projet a nécessité plus de 15 000 m² de textiles techniques et a mobilisé une équipe de 12 techniciens spécialisés pendant 3 mois.</p>
        `,
        images: [
          'images/project1-detail1.jpg',
          'images/project1-detail2.jpg',
          'images/project1-detail3.jpg'
        ]
      },
      project2: {
        title: 'Couverture du Stade Océane',
        client: 'Le Havre AC',
        date: 'Avril - Juin 2024',
        description: `
          <p>Le Stade Océane du Havre a fait appel à TextileMarine pour concevoir et installer une nouvelle couverture textile innovante. Ce projet ambitieux visait à améliorer le confort des spectateurs tout en préservant l'esthétique architecturale du stade.</p>
          
          <p>Notre solution comprend :</p>
          <ul>
            <li>Une membrane textile haute résistance avec traitement anti-UV</li>
            <li>Structure porteuse légère en aluminium</li>
            <li>Système de tension automatisé pour s'adapter aux conditions météorologiques</li>
            <li>Éclairage LED intégré pour les événements nocturnes</li>
          </ul>
          
          <p>Cette réalisation a permis d'augmenter la capacité d'accueil du stade pour les événements par tous temps, tout en réduisant l'empreinte écologique grâce à une meilleure isolation thermique.</p>
        `,
        images: [
          'images/project2-detail1.jpg',
          'images/project2-detail2.jpg'
        ]
      },
      project3: {
        title: 'Festival Les Escales',
        client: 'Ville de Saint-Nazaire',
        date: 'Juillet 2024',
        description: `
          <p>Pour l'édition 2024 du festival Les Escales à Saint-Nazaire, TextileMarine a créé un ensemble de structures textiles modulaires pour accueillir les différentes scènes et espaces du festival.</p>
          
          <p>Le projet comprenait :</p>
          <ul>
            <li>3 grandes structures pour les scènes principales (jusqu'à 25m de portée)</li>
            <li>5 pavillons pour les espaces de restauration et détente</li>
            <li>Système de récupération d'eau de pluie intégré</li>
            <li>Toiles imprimées avec l'identité visuelle du festival</li>
          </ul>
          
          <p>Ces structures ont été conçues pour être réutilisables lors des prochaines éditions, s'inscrivant dans une démarche éco-responsable soutenue par la ville de Saint-Nazaire.</p>
        `,
        images: [
          'images/project3-detail1.jpg',
          'images/project3-detail2.jpg'
        ]
      },
      project4: {
        title: 'Protection d\'éoliennes offshore',
        client: 'EDF Renouvelables',
        date: 'Février - Mai 2024',
        description: `
          <p>Dans le cadre du développement du parc éolien offshore de Saint-Nazaire, TextileMarine a développé des housses de protection spécifiques pour les composants sensibles des éoliennes pendant leur phase d'installation en mer.</p>
          
          <p>Ces protections textiles ont été conçues pour :</p>
          <ul>
            <li>Résister aux conditions marines extrêmes (vent, sel, UV)</li>
            <li>Permettre un montage/démontage rapide par les équipes techniques</li>
            <li>Assurer une protection totale contre la corrosion</li>
            <li>S'adapter aux différents modèles d'éoliennes du parc</li>
          </ul>
          
          <p>Ce projet innovant a nécessité le développement de nouveaux matériaux composites et de systèmes de fixation spécifiques, renforçant notre expertise dans le domaine maritime.</p>
        `,
        images: [
          'images/project4-detail1.jpg',
          'images/project4-detail2.jpg'
        ]
      },
      project5: {
        title: 'Chantier Naval de Lorient',
        client: 'Naval Group',
        date: 'Septembre - Décembre 2024',
        description: `
          <p>Naval Group a fait appel à TextileMarine pour équiper son chantier naval de Lorient de bâches de protection pour la construction de nouvelles frégates militaires.</p>
          
          <p>Notre intervention a porté sur :</p>
          <ul>
            <li>La conception de bâches ignifugées pour les zones de soudure</li>
            <li>L'installation de structures de confinement pour le sablage et la peinture</li>
            <li>La mise en place d'un système de récupération des résidus</li>
            <li>La formation des équipes à l'utilisation et à l'entretien des équipements</li>
          </ul>
          
          <p>Ces installations ont permis d'améliorer significativement les conditions de travail tout en répondant aux exigences strictes de sécurité et de confidentialité propres aux constructions militaires.</p>
        `,
        images: [
          'images/project5-detail1.jpg'
        ]
      },
      project6: {
        title: 'Exposition La Mer XXL',
        client: 'Exponantes',
        date: 'Juin 2024',
        description: `
          <p>Pour l'exposition La Mer XXL à Nantes, TextileMarine a créé des espaces d'exposition textiles innovants mettant en valeur le patrimoine maritime.</p>
          
          <p>Le projet comprenait :</p>
          <ul>
            <li>10 pavillons thématiques avec toiles imprimées en haute définition</li>
            <li>Une structure centrale évoquant une vague de 8m de hauteur</li>
            <li>Des cloisons modulables pour adapter les espaces aux différentes animations</li>
            <li>Un système d'éclairage intégré aux structures textiles</li>
          </ul>
          
          <p>Cette réalisation a été saluée pour son originalité et sa capacité à transformer l'expérience des visiteurs grâce à des espaces immersifs et évolutifs.</p>
        `,
        images: [
          'images/project6-detail1.jpg',
          'images/project6-detail2.jpg'
        ]
      }
    };
    
    // Open modal with project details
    projectButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const projectId = this.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        if (project) {
          // Build modal content
          let imagesHtml = '';
          if (project.images && project.images.length) {
            imagesHtml = `
              <div class="project-images">
                ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
              </div>
            `;
          }
          
          modalContent.innerHTML = `
            <div class="project-details">
              <h2>${project.title}</h2>
              <div class="project-meta">
                <p><strong>Client:</strong> ${project.client}</p>
                <p><strong>Date:</strong> ${project.date}</p>
              </div>
              <div class="project-description">
                ${project.description}
              </div>
              ${imagesHtml}
            </div>
          `;
          
          // Show modal
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
      });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }
}

/**
 * Testimonial carousel
 * - Simple carousel for testimonials
 */
function initTestimonialCarousel() {
  const carousel = document.querySelector('.testimonials-carousel');
  const slides = carousel ? carousel.querySelectorAll('.testimonial-slide') : [];
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  if (carousel && slides.length && dots.length && prevButton && nextButton) {
    let currentSlide = 0;
    
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.display = 'none';
      }
    });
    
    // Show slide by index
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show current slide and activate corresponding dot
      slides[index].style.display = 'block';
      dots[index].classList.add('active');
      
      // Update current slide index
      currentSlide = index;
    }
    
    // Previous slide
    prevButton.addEventListener('click', function() {
      let index = currentSlide - 1;
      if (index < 0) {
        index = slides.length - 1;
      }
      showSlide(index);
    });
    
    // Next slide
    nextButton.addEventListener('click', function() {
      let index = currentSlide + 1;
      if (index >= slides.length) {
        index = 0;
      }
      showSlide(index);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        showSlide(index);
      });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(function() {
      let index = currentSlide + 1;
      if (index >= slides.length) {
        index = 0;
      }
      showSlide(index);
    }, 5000);
  }
}

/**
 * Contact form
 * - Form validation
 * - Form submission (simulated with localStorage)
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: contactForm.querySelector('#name').value,
        email: contactForm.querySelector('#email').value,
        phone: contactForm.querySelector('#phone').value,
        subject: contactForm.querySelector('#subject').value,
        message: contactForm.querySelector('#message').value,
        consent: contactForm.querySelector('#consent').checked,
        timestamp: new Date().toISOString()
      };
      
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.consent) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      
      // In a real application, this would be sent to a server
      // For this demo, we'll store it in localStorage
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      existingMessages.push(formData);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
      
      // Show success message
      alert('Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.');
      
      // Reset form
      contactForm.reset();
    });
  }
}

/**
 * Theme toggle
 * - Switch between light and dark mode
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    // Check if user has a preferred theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      document.body.classList.add('dark-mode');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save theme preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
}

/**
 * Back to top button
 * - Show/hide button based on scroll position
 * - Smooth scroll to top
 */
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
