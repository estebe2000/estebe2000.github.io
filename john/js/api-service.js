/**
 * Service API pour l'application PME
 * Simule les fonctionnalités d'un serveur backend
 */

import dataService from './data-service.js';

class ApiService {
    constructor() {
        // Utilisateur actuellement connecté
        this.currentUser = null;
        
        // Token d'authentification (simulé)
        this.authToken = null;
    }
    
    /**
     * Authentifie un utilisateur
     * @param {string} username - Nom d'utilisateur
     * @param {string} password - Mot de passe
     * @returns {Promise<Object>} - Promesse résolue avec les données de l'utilisateur
     */
    async login(username, password) {
        try {
            // Simuler un délai réseau
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Charger les données des employés
            const employees = await dataService.getEmployees();
            
            // Rechercher l'utilisateur
            const user = employees.find(emp => 
                emp.username === username && 
                // Dans une vraie application, les mots de passe seraient hachés
                // et la vérification serait faite côté serveur
                emp.password === password
            );
            
            if (!user) {
                throw new Error('Identifiants incorrects');
            }
            
            // Créer un token d'authentification (simulé)
            this.authToken = `token_${Math.random().toString(36).substring(2)}`;
            
            // Stocker l'utilisateur connecté
            this.currentUser = user;
            
            // Retourner les données de l'utilisateur (sans le mot de passe)
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            throw error;
        }
    }
    
    /**
     * Déconnecte l'utilisateur actuel
     * @returns {Promise<void>}
     */
    async logout() {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Réinitialiser les données d'authentification
        this.currentUser = null;
        this.authToken = null;
    }
    
    /**
     * Vérifie si l'utilisateur est authentifié
     * @returns {boolean}
     */
    isAuthenticated() {
        return !!this.authToken && !!this.currentUser;
    }
    
    /**
     * Obtient l'utilisateur actuellement connecté
     * @returns {Object|null}
     */
    getCurrentUser() {
        return this.currentUser;
    }
    
    /**
     * Obtient tous les employés
     * @returns {Promise<Array>}
     */
    async getEmployees() {
        this.checkAuthentication();
        return await dataService.getEmployees();
    }
    
    /**
     * Obtient un employé par son ID
     * @param {number} id - ID de l'employé
     * @returns {Promise<Object>}
     */
    async getEmployeeById(id) {
        this.checkAuthentication();
        return await dataService.getEmployeeById(id);
    }
    
    /**
     * Obtient tous les départements
     * @returns {Promise<Array>}
     */
    async getDepartments() {
        this.checkAuthentication();
        return await dataService.getDepartments();
    }
    
    /**
     * Obtient la hiérarchie de l'entreprise
     * @returns {Promise<Object>}
     */
    async getHierarchy() {
        this.checkAuthentication();
        return await dataService.getHierarchy();
    }
    
    /**
     * Obtient tous les congés
     * @returns {Promise<Array>}
     */
    async getLeaves() {
        this.checkAuthentication();
        return await dataService.getLeaves();
    }
    
    /**
     * Obtient les congés de l'utilisateur actuel
     * @returns {Promise<Array>}
     */
    async getCurrentUserLeaves() {
        this.checkAuthentication();
        return await dataService.getEmployeeLeaves(this.currentUser.id);
    }
    
    /**
     * Crée une nouvelle demande de congé
     * @param {Object} leaveData - Données de la demande de congé
     * @returns {Promise<Object>} - Promesse résolue avec la demande créée
     */
    async createLeaveRequest(leaveData) {
        this.checkAuthentication();
        
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Charger les congés existants
        const leaves = await dataService.getLeaves();
        
        // Générer un nouvel ID
        const newId = Math.max(...leaves.map(leave => leave.id), 0) + 1;
        
        // Créer la nouvelle demande
        const newLeave = {
            id: newId,
            employeeId: this.currentUser.id,
            status: 'En attente',
            approvedBy: null,
            approvedDate: null,
            ...leaveData
        };
        
        // Dans une vraie application, la demande serait enregistrée dans la base de données
        // Pour la démonstration, nous simulons l'ajout
        
        return newLeave;
    }
    
    /**
     * Obtient tous les documents accessibles à l'utilisateur actuel
     * @returns {Promise<Array>}
     */
    async getAccessibleDocuments() {
        this.checkAuthentication();
        return await dataService.getAccessibleDocuments(this.currentUser);
    }
    
    /**
     * Obtient un document par son ID
     * @param {number} id - ID du document
     * @returns {Promise<Object>}
     */
    async getDocumentById(id) {
        this.checkAuthentication();
        
        const documents = await dataService.getDocuments();
        const document = documents.find(doc => doc.id === id);
        
        if (!document) {
            throw new Error('Document non trouvé');
        }
        
        // Vérifier si l'utilisateur a accès au document
        const accessibleDocuments = await dataService.getAccessibleDocuments(this.currentUser);
        const hasAccess = accessibleDocuments.some(doc => doc.id === id);
        
        if (!hasAccess) {
            throw new Error('Accès refusé');
        }
        
        return document;
    }
    
    /**
     * Obtient le plan des locaux
     * @returns {Promise<Object>}
     */
    async getOfficeMap() {
        this.checkAuthentication();
        return {
            floors: await dataService.getFloors(),
            roomTypes: await dataService.getRoomTypes()
        };
    }
    
    /**
     * Obtient l'emplacement de l'utilisateur actuel
     * @returns {Promise<Object>}
     */
    async getCurrentUserLocation() {
        this.checkAuthentication();
        return await dataService.getEmployeeLocation(this.currentUser.id);
    }
    
    /**
     * Met à jour le profil de l'utilisateur actuel
     * @param {Object} profileData - Nouvelles données du profil
     * @returns {Promise<Object>} - Promesse résolue avec le profil mis à jour
     */
    async updateCurrentUserProfile(profileData) {
        this.checkAuthentication();
        
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dans une vraie application, les données seraient mises à jour dans la base de données
        // Pour la démonstration, nous simulons la mise à jour
        
        // Mettre à jour l'utilisateur actuel
        this.currentUser = {
            ...this.currentUser,
            ...profileData
        };
        
        return this.currentUser;
    }
    
    /**
     * Recherche des employés
     * @param {string} query - Terme de recherche
     * @returns {Promise<Array>}
     */
    async searchEmployees(query) {
        this.checkAuthentication();
        return await dataService.searchEmployees(query);
    }
    
    /**
     * Recherche des documents
     * @param {string} query - Terme de recherche
     * @returns {Promise<Array>}
     */
    async searchDocuments(query) {
        this.checkAuthentication();
        
        // Obtenir tous les documents correspondants
        const matchingDocuments = await dataService.searchDocuments(query);
        
        // Filtrer pour ne garder que ceux accessibles à l'utilisateur
        const accessibleDocuments = await dataService.getAccessibleDocuments(this.currentUser);
        const accessibleIds = accessibleDocuments.map(doc => doc.id);
        
        return matchingDocuments.filter(doc => accessibleIds.includes(doc.id));
    }
    
    /**
     * Vérifie si l'utilisateur est authentifié
     * @throws {Error} - Si l'utilisateur n'est pas authentifié
     */
    checkAuthentication() {
        if (!this.isAuthenticated()) {
            throw new Error('Utilisateur non authentifié');
        }
    }
    
    /**
     * Vérifie si l'utilisateur actuel a un rôle spécifique
     * @param {string} role - Rôle à vérifier
     * @returns {boolean}
     */
    hasRole(role) {
        if (!this.isAuthenticated()) return false;
        
        if (role === 'Admin') {
            return this.currentUser.role === 'Admin';
        }
        
        if (role === 'Manager') {
            return this.currentUser.role === 'Admin' || this.currentUser.role === 'Manager';
        }
        
        return true; // Tous les utilisateurs ont le rôle de base
    }
}

// Exporter une instance unique du service API
const apiService = new ApiService();
export default apiService;
