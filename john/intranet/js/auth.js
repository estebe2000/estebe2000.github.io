/**
 * Système d'authentification pour l'intranet
 * Gère la connexion, la déconnexion et la session utilisateur
 */

// Classe principale pour la gestion de l'authentification
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.loginForm = document.getElementById('loginForm');
        this.loginMessage = document.getElementById('loginMessage');
        
        // Vérifier si l'utilisateur est déjà connecté (session)
        this.checkSession();
        
        // Initialiser les écouteurs d'événements
        this.initEventListeners();
    }
    
    // Initialiser les écouteurs d'événements
    initEventListeners() {
        // Gestion du formulaire de connexion
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.login();
            });
        }
        
        // Gestion du bouton de déconnexion (sur toutes les pages intranet)
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
    }
    
    // Vérifier si l'utilisateur a une session active
    checkSession() {
        const userSession = localStorage.getItem('userSession');
        
        if (userSession) {
            try {
                const sessionData = JSON.parse(userSession);
                const now = new Date().getTime();
                
                // Vérifier si la session n'a pas expiré (24h)
                if (sessionData.expiry > now) {
                    this.currentUser = sessionData.user;
                    this.isLoggedIn = true;
                    
                    // Rediriger vers le tableau de bord si on est sur la page de login
                    if (window.location.pathname.includes('login.html')) {
                        window.location.href = 'dashboard.html';
                    } else {
                        // Mettre à jour l'interface utilisateur avec les infos de l'utilisateur connecté
                        this.updateUserInterface();
                    }
                } else {
                    // Session expirée
                    this.clearSession();
                    // Rediriger vers login si on n'y est pas déjà
                    if (!window.location.pathname.includes('login.html')) {
                        window.location.href = 'login.html';
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de session:', error);
                this.clearSession();
            }
        } else if (!window.location.pathname.includes('login.html')) {
            // Pas de session et pas sur la page de login -> rediriger
            window.location.href = 'login.html';
        }
    }
    
    // Mettre à jour l'interface avec les informations de l'utilisateur
    updateUserInterface() {
        if (!this.currentUser) return;
        
        // Mettre à jour le nom d'utilisateur dans la sidebar
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = this.currentUser.fullName || this.currentUser.username;
        }
        
        // Mettre à jour le rôle de l'utilisateur
        const userRoleElement = document.getElementById('userRole');
        if (userRoleElement) {
            userRoleElement.textContent = this.currentUser.role || 'Employé';
        }
        
        // Mettre à jour l'avatar
        const userAvatarElement = document.getElementById('userAvatar');
        if (userAvatarElement) {
            userAvatarElement.src = this.currentUser.avatar || '../assets/img/default-avatar.png';
        }
        
        // Afficher/masquer les éléments réservés aux administrateurs
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(element => {
            if (this.currentUser.role === 'Admin') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }
    
    // Fonction de connexion
    login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        if (!username || !password) {
            this.showLoginMessage('Veuillez remplir tous les champs', 'error');
            return;
        }
        
        // Simuler une requête API pour vérifier les identifiants
        // Dans une application réelle, cela serait une requête AJAX vers le serveur
        this.authenticateUser(username, password)
            .then(userData => {
                if (userData) {
                    // Connexion réussie
                    this.currentUser = userData;
                    this.isLoggedIn = true;
                    
                    // Créer la session
                    this.createSession(userData, rememberMe);
                    
                    // Afficher un message de succès
                    this.showLoginMessage('Connexion réussie, redirection...', 'success');
                    
                    // Rediriger vers le tableau de bord
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1000);
                } else {
                    // Échec de connexion
                    this.showLoginMessage('Identifiants incorrects', 'error');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la connexion:', error);
                this.showLoginMessage('Une erreur est survenue', 'error');
            });
    }
    
    // Simuler l'authentification (dans une vraie application, cela serait une requête au serveur)
    async authenticateUser(username, password) {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dans une application réelle, cette partie serait remplacée par une requête AJAX
        // qui enverrait les identifiants au serveur pour vérification
        
        // Pour la démonstration, nous utilisons des utilisateurs codés en dur
        // Dans une vraie application, ces données viendraient d'un fichier JSON ou d'une API
        const users = [
            {
                id: 1,
                username: 'admin',
                password: 'admin123', // En production, utiliser des mots de passe hachés !
                fullName: 'Administrateur Système',
                email: 'admin@entreprise.fr',
                role: 'Admin',
                department: 'Direction',
                position: 'Administrateur Système',
                avatar: '../assets/img/avatars/admin.jpg',
                office: 'A101'
            },
            {
                id: 2,
                username: 'jdupont',
                password: 'user123',
                fullName: 'Jean Dupont',
                email: 'jean.dupont@entreprise.fr',
                role: 'Employé',
                department: 'Marketing',
                position: 'Responsable Marketing',
                avatar: '../assets/img/avatars/user1.jpg',
                office: 'B205'
            },
            {
                id: 3,
                username: 'mmartin',
                password: 'user123',
                fullName: 'Marie Martin',
                email: 'marie.martin@entreprise.fr',
                role: 'Employé',
                department: 'Ressources Humaines',
                position: 'Chargée de recrutement',
                avatar: '../assets/img/avatars/user2.jpg',
                office: 'C310'
            }
        ];
        
        // Vérifier les identifiants
        const user = users.find(u => u.username === username && u.password === password);
        
        // Retourner l'utilisateur trouvé ou null
        return user || null;
    }
    
    // Créer une session utilisateur
    createSession(userData, rememberMe) {
        // Supprimer le mot de passe des données stockées
        const userDataSafe = { ...userData };
        delete userDataSafe.password;
        
        // Définir la durée d'expiration (24h ou 30 jours si "se souvenir de moi")
        const expiryDuration = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
        const expiryTime = new Date().getTime() + expiryDuration;
        
        // Créer l'objet de session
        const sessionData = {
            user: userDataSafe,
            expiry: expiryTime
        };
        
        // Stocker dans localStorage
        localStorage.setItem('userSession', JSON.stringify(sessionData));
    }
    
    // Effacer la session
    clearSession() {
        localStorage.removeItem('userSession');
        this.currentUser = null;
        this.isLoggedIn = false;
    }
    
    // Déconnexion
    logout() {
        this.clearSession();
        window.location.href = 'login.html';
    }
    
    // Afficher un message sur la page de connexion
    showLoginMessage(message, type = 'info') {
        if (!this.loginMessage) return;
        
        this.loginMessage.textContent = message;
        this.loginMessage.className = `login-message ${type}`;
    }
    
    // Vérifier si l'utilisateur a le rôle requis
    hasRole(requiredRole) {
        if (!this.currentUser) return false;
        
        if (requiredRole === 'Admin') {
            return this.currentUser.role === 'Admin';
        }
        
        return true; // Tous les utilisateurs connectés ont au moins le rôle de base
    }
    
    // Obtenir l'utilisateur actuel
    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialiser le gestionnaire d'authentification
const authManager = new AuthManager();

// Exporter pour utilisation dans d'autres scripts
window.authManager = authManager;
