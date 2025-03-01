/**
 * Improved Navigation JavaScript
 * Enhances the navigation with animations and better mobile experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add animation indices to nav items
    const navItems = document.querySelectorAll('nav > ul > li');
    navItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    // Improve dropdown behavior on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                // Only handle click on mobile
                if (window.innerWidth <= 767) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    // First pass: mark the exact matching link as active
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Second pass: if a dropdown menu item is active, also mark its parent toggle as active
    const activeDropdownItems = document.querySelectorAll('.dropdown-menu a.active');
    activeDropdownItems.forEach(activeItem => {
        const parentDropdown = activeItem.closest('.dropdown');
        if (parentDropdown) {
            const dropdownToggle = parentDropdown.querySelector('.dropdown-toggle');
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    });
    
    // Add hover effect for desktop
    if (window.innerWidth > 767) {
        navItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('hovered');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hovered');
            });
        });
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Reset mobile-specific states on desktop
            if (window.innerWidth > 767) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }, 250);
    });
});
