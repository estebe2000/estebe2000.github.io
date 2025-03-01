/**
 * Main Application Module
 * Initializes the application and loads all core modules
 */

// Import core modules
import * as utils from './utils.js';
import * as dataLoader from './data-loader.js';
import * as gameState from './game-state.js';
import * as userProfileManager from './user-profile-manager.js';

// Application configuration
const config = {
    debug: false, // Set to true to enable debug logging
    version: '1.0.0',
    defaultTheme: 'default'
};

/**
 * Initialize the application
 */
function init() {
    // Set up logging
    setupLogging();
    
    // Log application start
    log('Application initializing...');
    log(`Version: ${config.version}`);
    
    // Initialize game state
    gameState.init();
    
    // Set up navigation highlighting
    setupNavigation();
    
    // Set up event listeners
    setupEventListeners();
    
    // Log application ready
    log('Application initialized successfully');
}

/**
 * Set up logging based on configuration
 */
function setupLogging() {
    if (!config.debug) {
        // Disable console logging in production
        window.appLog = () => {};
    } else {
        // Enable detailed logging in debug mode
        window.appLog = (message, type = 'info') => {
            const timestamp = new Date().toISOString();
            const prefix = `[${timestamp}] [${type.toUpperCase()}]`;
            
            switch (type) {
                case 'error':
                    console.error(`${prefix} ${message}`);
                    break;
                case 'warn':
                    console.warn(`${prefix} ${message}`);
                    break;
                case 'debug':
                    console.debug(`${prefix} ${message}`);
                    break;
                default:
                    console.log(`${prefix} ${message}`);
            }
        };
    }
}

/**
 * Log a message using the configured logger
 * @param {string} message - The message to log
 * @param {string} type - The type of log message (info, error, warn, debug)
 */
function log(message, type = 'info') {
    if (window.appLog) {
        window.appLog(message, type);
    }
}

/**
 * Set up navigation highlighting
 */
function setupNavigation() {
    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Also update mobile navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Set up global event listeners
 */
function setupEventListeners() {
    // Listen for page visibility changes to optimize performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            log('Page hidden, pausing non-essential operations', 'debug');
            // Pause non-essential operations
        } else {
            log('Page visible, resuming operations', 'debug');
            // Resume operations
        }
    });
    
    // Listen for window resize events with throttling
    window.addEventListener('resize', utils.throttle(() => {
        log('Window resized', 'debug');
        // Handle responsive adjustments if needed
    }, 200));
    
    // Listen for game completion events
    document.addEventListener('gameCompleted', (event) => {
        log(`Game completed: ${event.detail.gameId}`, 'info');
        // Show celebration animation or notification
    });
    
    // Listen for game state reset events
    document.addEventListener('gameStateReset', () => {
        log('Game state reset', 'info');
        // Handle reset UI updates
    });
}

/**
 * Preload essential assets
 * @returns {Promise} Promise that resolves when preloading is complete
 */
async function preloadAssets() {
    log('Preloading essential assets...', 'debug');
    
    try {
        // Preload essential data
        await Promise.all([
            dataLoader.getQuoteFragments(),
            dataLoader.getMiniGames()
        ]);
        
        log('Essential assets preloaded successfully', 'debug');
    } catch (error) {
        log(`Error preloading assets: ${error.message}`, 'error');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    preloadAssets();
});

// Export functions and configuration
export {
    init,
    config,
    log
};

// For backward compatibility with non-module scripts
window.app = {
    init,
    config,
    log
};
