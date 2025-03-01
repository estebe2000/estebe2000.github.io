/**
 * TextileMarine - Authentication JavaScript
 * Handles login, logout, and authentication for the intranet
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize authentication
  initAuth();
  initLoginForm();
  initPasswordReset();
  initLogout();
});

/**
 * Initialize authentication
 * - Check if user is logged in
 * - Redirect to login page if not authenticated
 */
function initAuth() {
  // Check if current page is login page
  const isLoginPage = window.location.pathname.includes('intranet/index.html');
  
  // If not login page, check authentication
  if (!isLoginPage) {
    const isAuthenticated = checkAuthentication();
    
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      window.location.href = 'index.html';
    } else {
      // Update UI with user info
      updateUserInfo();
    }
  } else {
    // If login page and already authenticated, redirect to dashboard
    if (checkAuthentication()) {
      window.location.href = 'dashboard.html';
    }
  }
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user is authenticated
 */
function checkAuthentication() {
  const authToken = localStorage.getItem('authToken');
  const tokenExpiry = localStorage.getItem('tokenExpiry');
  
  // Check if token exists and is not expired
  if (authToken && tokenExpiry) {
    const now = new Date().getTime();
    const expiryTime = parseInt(tokenExpiry);
    
    if (now < expiryTime) {
      return true;
    } else {
      // Token expired, clear authentication
      clearAuthentication();
      return false;
    }
  }
  
  return false;
}

/**
 * Clear authentication data
 */
function clearAuthentication() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('tokenExpiry');
  localStorage.removeItem('userData');
}

/**
 * Update UI with user information
 */
function updateUserInfo() {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  
  // Update user name and avatar
  const userNameElements = document.querySelectorAll('#user-name, #welcome-user-name');
  const userAvatarElements = document.querySelectorAll('#user-avatar');
  
  userNameElements.forEach(element => {
    if (element) {
      element.textContent = userData.name || 'Utilisateur';
    }
  });
  
  userAvatarElements.forEach(element => {
    if (element && userData.avatar) {
      element.src = userData.avatar;
    }
  });
  
  // Update welcome date
  const welcomeDateElement = document.getElementById('welcome-date');
  if (welcomeDateElement) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date();
    welcomeDateElement.textContent = today.toLocaleDateString('fr-FR', options);
  }
}

/**
 * Initialize login form
 * - Handle form submission
 * - Validate credentials
 * - Set authentication token
 */
function initLoginForm() {
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const username = loginForm.querySelector('#username').value;
      const password = loginForm.querySelector('#password').value;
      const remember = loginForm.querySelector('#remember').checked;
      
      // Validate credentials (in a real app, this would be a server request)
      if (validateCredentials(username, password)) {
        // Set authentication token
        setAuthentication(username, remember);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        // Show error message
        if (loginError) {
          loginError.classList.remove('hidden');
        }
      }
    });
    
    // Toggle password visibility
    const togglePassword = loginForm.querySelector('.toggle-password');
    if (togglePassword) {
      togglePassword.addEventListener('click', function() {
        const passwordInput = loginForm.querySelector('#password');
        
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          this.classList.add('show');
        } else {
          passwordInput.type = 'password';
          this.classList.remove('show');
        }
      });
    }
  }
}

/**
 * Validate user credentials
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {boolean} - True if credentials are valid
 * 
 * Note: In a real application, this would be a server request.
 * For this demo, we're using hardcoded credentials.
 */
function validateCredentials(username, password) {
  // Demo users (in a real app, this would be a server request)
  const users = [
    {
      username: 'admin',
      password: 'admin123',
      name: 'Thomas Martin',
      role: 'admin',
      avatar: '../images/profile-placeholder.jpg'
    },
    {
      username: 'user',
      password: 'user123',
      name: 'Sophie Dubois',
      role: 'user',
      avatar: '../images/employee1.jpg'
    }
  ];
  
  // Find user with matching credentials
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // Store user data (except password)
    const userData = {
      username: user.username,
      name: user.name,
      role: user.role,
      avatar: user.avatar
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    return true;
  }
  
  return false;
}

/**
 * Set authentication token
 * @param {string} username - Username
 * @param {boolean} remember - Remember me option
 */
function setAuthentication(username, remember) {
  // Generate random token
  const token = Math.random().toString(36).substring(2);
  
  // Set token expiry (24 hours or 30 days if remember me)
  const now = new Date().getTime();
  const expiryTime = now + (remember ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000);
  
  // Store token and expiry
  localStorage.setItem('authToken', token);
  localStorage.setItem('tokenExpiry', expiryTime.toString());
}

/**
 * Initialize password reset
 * - Handle forgot password link
 * - Show password reset modal
 */
function initPasswordReset() {
  const forgotPasswordLink = document.querySelector('.forgot-password');
  const passwordResetModal = document.getElementById('password-reset-modal');
  const resetForm = document.getElementById('reset-form');
  const closeModal = passwordResetModal ? passwordResetModal.querySelector('.close-modal') : null;
  
  if (forgotPasswordLink && passwordResetModal) {
    // Show modal when forgot password link is clicked
    forgotPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      passwordResetModal.style.display = 'flex';
    });
    
    // Close modal when close button is clicked
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        passwordResetModal.style.display = 'none';
      });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === passwordResetModal) {
        passwordResetModal.style.display = 'none';
      }
    });
    
    // Handle reset form submission
    if (resetForm) {
      resetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = resetForm.querySelector('#reset-email').value;
        
        // In a real app, this would send a reset link to the email
        alert(`Un lien de réinitialisation a été envoyé à ${email}. Veuillez vérifier votre boîte de réception.`);
        
        // Close modal
        passwordResetModal.style.display = 'none';
        
        // Reset form
        resetForm.reset();
      });
    }
  }
}

/**
 * Initialize logout
 * - Handle logout button clicks
 */
function initLogout() {
  const logoutButtons = document.querySelectorAll('#logout-btn, #profile-logout-btn');
  
  logoutButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Clear authentication
        clearAuthentication();
        
        // Redirect to login page
        window.location.href = 'index.html';
      });
    }
  });
}
