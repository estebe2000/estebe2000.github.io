/**
 * TextileMarine - Animations JavaScript
 * Handles scroll animations and other animation effects
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initRevealAnimations();
  initParallaxEffects();
  initWaveAnimations();
  initTypingEffect();
  initCounterAnimations();
});

/**
 * Reveal animations
 * - Animate elements when they enter the viewport
 */
function initRevealAnimations() {
  // Get all elements with reveal classes
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
  
  // Set initial state (hidden)
  revealElements.forEach(element => {
    element.style.opacity = '0';
    
    if (element.classList.contains('reveal-left')) {
      element.style.transform = 'translateX(-50px)';
    } else if (element.classList.contains('reveal-right')) {
      element.style.transform = 'translateX(50px)';
    } else {
      element.style.transform = 'translateY(40px)';
    }
  });
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');
        
        // Unobserve element after animation
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.15, // 15% of element visible
    rootMargin: '0px 0px -50px 0px' // trigger slightly before element enters viewport
  });
  
  // Observe each element
  revealElements.forEach(element => {
    observer.observe(element);
  });
  
  // Staggered animations for grid items
  const gridContainers = document.querySelectorAll('.products-grid, .projects-gallery, .values-grid');
  
  gridContainers.forEach(container => {
    const items = container.querySelectorAll('.product-card, .project-item, .value-item');
    
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
}

/**
 * Parallax effects
 * - Subtle parallax scrolling effects
 */
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  // Skip if no parallax elements or if on mobile (for performance)
  if (parallaxElements.length === 0 || window.innerWidth < 768) return;
  
  // Update parallax effect on scroll
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.1;
      const offset = element.getBoundingClientRect().top + scrollY;
      const distance = scrollY - offset;
      
      if (Math.abs(distance) < window.innerHeight) {
        const translateY = distance * speed;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  });
}

/**
 * Wave animations
 * - Animated wave effect for elements with .wave class
 */
function initWaveAnimations() {
  const waveElements = document.querySelectorAll('.wave');
  
  waveElements.forEach(element => {
    // Create SVG wave
    const waveHeight = 20;
    const waveWidth = 350;
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${waveWidth} ${waveHeight}`);
    svg.setAttribute("xmlns", svgNS);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.position = "absolute";
    svg.style.bottom = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = `${waveHeight}px`;
    
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M0,0 C30,${waveHeight} 70,0 100,${waveHeight/2} C130,${waveHeight} 170,0 200,${waveHeight/2} C230,${waveHeight} 270,0 300,${waveHeight/2} C330,${waveHeight} 350,${waveHeight/2} 350,${waveHeight/2} L350,${waveHeight} L0,${waveHeight} Z`);
    path.setAttribute("fill", primaryColor);
    
    svg.appendChild(path);
    element.appendChild(svg);
    
    // Animate wave
    let position = 0;
    const speed = 10;
    
    function animateWave() {
      position -= 1;
      if (position <= -waveWidth) position = 0;
      svg.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animateWave);
    }
    
    animateWave();
  });
}

/**
 * Typing effect
 * - Animated typing effect for elements with .typing class
 */
function initTypingEffect() {
  const typingElements = document.querySelectorAll('.typing');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'inline-block';
    
    // Create observer to start animation when element is in viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start typing animation
          let i = 0;
          const typingSpeed = parseInt(element.dataset.typingSpeed) || 100;
          
          function typeChar() {
            if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
              setTimeout(typeChar, typingSpeed);
            }
          }
          
          typeChar();
          
          // Unobserve element after animation starts
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.5
    });
    
    observer.observe(element);
  });
}

/**
 * Counter animations
 * - Animated counting effect for elements with .counter class
 */
function initCounterAnimations() {
  const counterElements = document.querySelectorAll('.counter');
  
  counterElements.forEach(element => {
    const target = parseInt(element.dataset.target) || 0;
    const duration = parseInt(element.dataset.duration) || 2000;
    const startValue = parseInt(element.dataset.start) || 0;
    
    element.textContent = startValue;
    
    // Create observer to start animation when element is in viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counter animation
          let startTime = null;
          
          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.floor(progress * (target - startValue) + startValue);
            
            element.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              element.textContent = target.toLocaleString();
            }
          }
          
          requestAnimationFrame(updateCounter);
          
          // Unobserve element after animation starts
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.5
    });
    
    observer.observe(element);
  });
}

/**
 * Scroll indicator animation
 * - Animated scroll indicator in hero section
 */
function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    // Add bounce animation class
    scrollIndicator.classList.add('bounce');
  }
}

/**
 * Shimmer effect
 * - Add shimmer effect to elements with .shimmer class
 */
function addShimmerEffect() {
  const shimmerElements = document.querySelectorAll('.shimmer');
  
  shimmerElements.forEach(element => {
    // Create shimmer overlay
    const shimmer = document.createElement('div');
    shimmer.classList.add('shimmer-overlay');
    
    // Add shimmer overlay to element
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(shimmer);
    
    // Animate shimmer
    setInterval(() => {
      shimmer.style.left = '-100%';
      shimmer.style.transition = 'none';
      
      setTimeout(() => {
        shimmer.style.left = '100%';
        shimmer.style.transition = 'left 1s ease-in-out';
      }, 50);
    }, 3000);
  });
}

/**
 * Floating animation
 * - Add floating animation to elements with .float class
 */
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.float');
  
  floatingElements.forEach((element, index) => {
    // Add different animation delay for each element
    element.style.animationDelay = `${index * 0.2}s`;
  });
}

/**
 * Utility: Check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Offset from viewport edge (default: 0)
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.right >= offset
  );
}

/**
 * Utility: Add class when element enters viewport
 * @param {HTMLElement} element - The element to observe
 * @param {string} className - Class to add when element enters viewport
 * @param {number} threshold - Intersection threshold (0-1)
 */
function addClassOnScroll(element, className, threshold = 0.2) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: threshold
  });
  
  observer.observe(element);
}

/**
 * Utility: Animate CSS property on scroll
 * @param {HTMLElement} element - The element to animate
 * @param {string} property - CSS property to animate
 * @param {number} startValue - Starting value
 * @param {number} endValue - Ending value
 * @param {string} unit - CSS unit (px, %, etc.)
 */
function animatePropertyOnScroll(element, property, startValue, endValue, unit = '') {
  const scrollRange = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    const rect = element.getBoundingClientRect();
    const scrollProgress = 1 - (rect.top / scrollRange);
    
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      const value = startValue + (scrollProgress * (endValue - startValue));
      element.style[property] = `${value}${unit}`;
    }
  });
}
