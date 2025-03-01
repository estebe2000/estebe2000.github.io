/**
 * Main JavaScript Entry Point
 * Loads only the essential core modules and initializes the application
 */

// Import core modules
import './core/utils.js';
import './core/data-loader.js';
import './core/game-state.js';
import './core/user-profile-manager.js';
import './core/script-loader.js';
import * as app from './core/app.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing application...');
    
    // Initialize the application
    app.init();
    
    // Log initialization complete
    console.log('Application initialized successfully');
});
