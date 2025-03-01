/**
 * Script pour le tableau de bord de l'intranet
 * Gère les fonctionnalités et l'affichage des données du tableau de bord
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le tableau de bord
    const dashboard = new Dashboard();
    dashboard.init();
});

class Dashboard {
    constructor() {
        // Éléments du DOM
        this.headerUserName = document.getElementById('headerUserName');
        this.dashboardStats = document.querySelector('.dashboard-stats');
        this.activityList = document.querySelector('.activity-list');
        this.announcementsList = document.querySelector('.intranet-card-body');
        this.eventsList = document.querySelector('.events-list');
        
        // Données (simulées - dans une vraie application, ces données viendraient d'une API ou de fichiers JSON)
        this.stats = {
            employees: 42,
            departments: 7,
            documents: 156,
            activeLeaves: 8
        };
    }
    
    // Initialiser le tableau de bord
    init() {
        // Mettre à jour le nom d'utilisateur dans l'en-tête
        this.updateHeaderUserName();
        
        // Mettre à jour les statistiques
        this.updateStats();
        
        // Ajouter les écouteurs d'événements
        this.addEventListeners();
        
        // Simuler le chargement des données (dans une vraie application, ce serait une requête AJAX)
        this.loadDashboardData();
    }
    
    // Mettre à jour le nom d'utilisateur dans l'en-tête
    updateHeaderUserName() {
        if (window.authManager && window.authManager.currentUser) {
            const user = window.authManager.currentUser;
            if (this.headerUserName) {
                this.headerUserName.textContent = user.fullName || user.username;
            }
        }
    }
    
    // Mettre à jour les statistiques
    updateStats() {
        // Dans une vraie application, ces données viendraient d'une API
        // Pour la démonstration, nous utilisons des données codées en dur
        
        // Mettre à jour les compteurs avec animation
        this.animateCounter('employees', this.stats.employees);
        this.animateCounter('departments', this.stats.departments);
        this.animateCounter('documents', this.stats.documents);
        this.animateCounter('activeLeaves', this.stats.activeLeaves);
    }
    
    // Animer un compteur
    animateCounter(id, target) {
        const statCards = document.querySelectorAll('.stat-card');
        let element;
        
        // Trouver l'élément correspondant
        statCards.forEach(card => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            
            if (p && p.textContent.toLowerCase().includes(id.toLowerCase())) {
                element = h3;
            }
        });
        
        if (!element) return;
        
        let current = 0;
        const increment = target / 30; // Diviser en 30 étapes
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.round(current);
        }, 30);
    }
    
    // Ajouter les écouteurs d'événements
    addEventListeners() {
        // Gestion du menu déroulant utilisateur
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            userDropdown.addEventListener('click', function(e) {
                e.preventDefault();
                // Afficher/masquer le menu déroulant
                const dropdown = document.querySelector('.user-dropdown');
                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            });
        }
        
        // Fermer le menu déroulant en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.matches('#userDropdown') && !e.target.closest('#userDropdown')) {
                const dropdowns = document.querySelectorAll('.user-dropdown.show');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });
        
        // Gestion du menu mobile pour la sidebar
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.intranet-sidebar');
        
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
            });
        }
    }
    
    // Charger les données du tableau de bord (simulé)
    loadDashboardData() {
        // Dans une vraie application, ces données viendraient d'une API ou de fichiers JSON
        // Pour la démonstration, nous simulons un délai de chargement
        
        // Afficher un indicateur de chargement
        this.showLoading();
        
        // Simuler un délai réseau
        setTimeout(() => {
            // Masquer l'indicateur de chargement
            this.hideLoading();
            
            // Mettre à jour les données du tableau de bord
            this.updateDashboardData();
        }, 800);
    }
    
    // Afficher un indicateur de chargement
    showLoading() {
        const cards = document.querySelectorAll('.intranet-card-body');
        cards.forEach(card => {
            if (!card.querySelector('.loading-indicator')) {
                const loader = document.createElement('div');
                loader.className = 'loading-indicator';
                loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement...';
                card.appendChild(loader);
            }
        });
    }
    
    // Masquer l'indicateur de chargement
    hideLoading() {
        const loaders = document.querySelectorAll('.loading-indicator');
        loaders.forEach(loader => {
            loader.remove();
        });
    }
    
    // Mettre à jour les données du tableau de bord
    updateDashboardData() {
        // Dans une vraie application, ces données viendraient d'une API ou de fichiers JSON
        // Pour la démonstration, nous utilisons des données codées en dur
        
        // Mettre à jour les activités récentes
        this.updateRecentActivities();
        
        // Mettre à jour les annonces
        this.updateAnnouncements();
        
        // Mettre à jour les événements
        this.updateEvents();
    }
    
    // Mettre à jour les activités récentes
    updateRecentActivities() {
        // Dans une vraie application, ces données viendraient d'une API ou de fichiers JSON
        // Pour la démonstration, nous ne faisons rien car les activités sont déjà dans le HTML
    }
    
    // Mettre à jour les annonces
    updateAnnouncements() {
        // Dans une vraie application, ces données viendraient d'une API ou de fichiers JSON
        // Pour la démonstration, nous ne faisons rien car les annonces sont déjà dans le HTML
    }
    
    // Mettre à jour les événements
    updateEvents() {
        // Dans une vraie application, ces données viendraient d'une API ou de fichiers JSON
        // Pour la démonstration, nous ne faisons rien car les événements sont déjà dans le HTML
    }
    
    // Formater une date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
}

// Ajouter des styles CSS pour les éléments manquants
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des styles pour la liste d'activités
    if (!document.querySelector('style#dashboard-styles')) {
        const style = document.createElement('style');
        style.id = 'dashboard-styles';
        style.textContent = `
            .dashboard-row {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .activity-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .activity-item {
                display: flex;
                padding: 15px 0;
                border-bottom: 1px solid var(--intranet-border);
            }
            
            .activity-item:last-child {
                border-bottom: none;
            }
            
            .activity-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: rgba(52, 152, 219, 0.1);
                color: var(--intranet-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
                flex-shrink: 0;
            }
            
            .activity-content {
                flex: 1;
            }
            
            .activity-title {
                font-weight: 600;
                margin-bottom: 5px;
            }
            
            .activity-description {
                color: var(--intranet-text);
                margin-bottom: 5px;
            }
            
            .activity-time {
                font-size: 0.8rem;
                color: var(--intranet-text-light);
            }
            
            .announcement {
                padding: 15px 0;
                border-bottom: 1px solid var(--intranet-border);
            }
            
            .announcement:last-child {
                border-bottom: none;
            }
            
            .announcement h3 {
                margin: 0 0 5px;
                color: var(--intranet-secondary);
            }
            
            .announcement-date {
                font-size: 0.8rem;
                color: var(--intranet-text-light);
                margin-bottom: 10px;
            }
            
            .events-list {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .event-item {
                display: flex;
                background-color: #f8f9fa;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .event-date {
                background-color: var(--intranet-primary);
                color: white;
                padding: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-width: 80px;
                text-align: center;
            }
            
            .event-month {
                font-size: 0.8rem;
                text-transform: uppercase;
            }
            
            .event-day {
                font-size: 1.5rem;
                font-weight: 700;
            }
            
            .event-content {
                padding: 15px;
                flex: 1;
            }
            
            .event-title {
                margin: 0 0 10px;
                color: var(--intranet-secondary);
            }
            
            .event-info {
                margin: 5px 0;
                color: var(--intranet-text-light);
            }
            
            .event-info i {
                margin-right: 5px;
                width: 16px;
            }
            
            .event-description {
                margin-top: 10px;
            }
            
            .loading-indicator {
                text-align: center;
                padding: 20px;
                color: var(--intranet-text-light);
            }
            
            .loading-indicator i {
                margin-right: 10px;
            }
        `;
        document.head.appendChild(style);
    }
});
