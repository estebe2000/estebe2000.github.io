/**
 * Chasse au Trésor - Mobile Navigation
 * This file adds a mobile-friendly navigation menu for small screens
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add mobile navigation functionality
    setupMobileNavigation();
});

/**
 * Sets up the mobile navigation menu
 */
function setupMobileNavigation() {
    // Create mobile menu toggle button
    const header = document.querySelector('header');
    if (!header) return;
    
    // Create the toggle button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add the toggle button to the header
    header.appendChild(menuToggle);
    
    // Get the navigation element
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Add mobile-nav class to the navigation
    nav.classList.add('mobile-nav');
    
    // Add click event to the toggle button
    menuToggle.addEventListener('click', () => {
        // Toggle the is-open class on the navigation
        nav.classList.toggle('is-open');
        
        // Update the toggle button icon
        if (nav.classList.contains('is-open')) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close the menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Add CSS for mobile navigation
    addMobileNavStyles();
    
    // Add swipe gesture support
    addSwipeSupport(nav);
}

/**
 * Adds CSS styles for mobile navigation
 */
function addMobileNavStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Mobile Navigation Styles */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-color);
            cursor: pointer;
            padding: 0.5rem;
            z-index: 101;
        }
        
        @media (max-width: 767px) {
            .menu-toggle {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }
            
            .mobile-nav {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(255, 255, 255, 0.95);
                z-index: 100;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 2rem;
            }
            
            .mobile-nav.is-open {
                transform: translateX(0);
            }
            
            .mobile-nav ul {
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
            }
            
            .mobile-nav a {
                font-size: 1.2rem;
                padding: 0.5rem 1rem;
            }
            
            /* Add a subtle animation to nav items */
            .mobile-nav.is-open li {
                animation: fadeInUp 0.4s ease forwards;
                opacity: 0;
            }
            
            .mobile-nav.is-open li:nth-child(1) { animation-delay: 0.1s; }
            .mobile-nav.is-open li:nth-child(2) { animation-delay: 0.2s; }
            .mobile-nav.is-open li:nth-child(3) { animation-delay: 0.3s; }
            .mobile-nav.is-open li:nth-child(4) { animation-delay: 0.4s; }
            .mobile-nav.is-open li:nth-child(5) { animation-delay: 0.5s; }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Adds swipe gesture support for mobile navigation
 * @param {HTMLElement} nav - The navigation element
 */
function addSwipeSupport(nav) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Add touch event listeners to the document
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    // Handle swipe gestures
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe
        
        // Right to left swipe (close menu)
        if (touchStartX - touchEndX > swipeThreshold && nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            document.querySelector('.menu-toggle').innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // Left to right swipe (open menu)
        if (touchEndX - touchStartX > swipeThreshold && !nav.classList.contains('is-open')) {
            nav.classList.add('is-open');
            document.querySelector('.menu-toggle').innerHTML = '<i class="fas fa-times"></i>';
        }
    }
}
