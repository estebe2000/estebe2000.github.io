/**
 * Service de données pour l'application PME
 * Gère l'accès aux données stockées dans les fichiers JSON
 */

class DataService {
    constructor() {
        // Chemins des fichiers de données
        this.dataFiles = {
            employees: '../data/employees.json',
            departments: '../data/departments.json',
            leaves: '../data/leaves.json',
            documents: '../data/documents.json',
            officeMap: '../data/office-map.json'
        };
        
        // Cache des données
        this.cache = {
            employees: null,
            departments: null,
            leaves: null,
            documents: null,
            officeMap: null
        };
        
        // Indicateurs de chargement
        this.loading = {
            employees: false,
            departments: false,
            leaves: false,
            documents: false,
            officeMap: false
        };
        
        // Files d'attente pour les promesses
        this.queues = {
            employees: [],
            departments: [],
            leaves: [],
            documents: [],
            officeMap: []
        };
    }
    
    /**
     * Charge les données depuis un fichier JSON
     * @param {string} dataType - Type de données à charger (employees, departments, etc.)
     * @returns {Promise<Object>} - Promesse résolue avec les données
     */
    async loadData(dataType) {
        // Si les données sont déjà en cache, les retourner
        if (this.cache[dataType]) {
            return this.cache[dataType];
        }
        
        // Si les données sont en cours de chargement, ajouter à la file d'attente
        if (this.loading[dataType]) {
            return new Promise((resolve, reject) => {
                this.queues[dataType].push({ resolve, reject });
            });
        }
        
        // Marquer comme en cours de chargement
        this.loading[dataType] = true;
        
        try {
            // Simuler un délai réseau (dans une vraie application, ce serait une requête AJAX)
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Dans une vraie application, ce serait une requête AJAX vers le serveur
            // Pour la démonstration, nous simulons le chargement des données
            const data = await this.simulateDataLoad(dataType);
            
            // Mettre en cache
            this.cache[dataType] = data;
            
            // Résoudre toutes les promesses en attente
            this.queues[dataType].forEach(promise => promise.resolve(data));
            this.queues[dataType] = [];
            
            return data;
        } catch (error) {
            // Rejeter toutes les promesses en attente
            this.queues[dataType].forEach(promise => promise.reject(error));
            this.queues[dataType] = [];
            
            throw error;
        } finally {
            // Marquer comme non en cours de chargement
            this.loading[dataType] = false;
        }
    }
    
    /**
     * Simule le chargement des données depuis un fichier JSON
     * Dans une vraie application, ce serait une requête AJAX vers le serveur
     * @param {string} dataType - Type de données à charger
     * @returns {Promise<Object>} - Promesse résolue avec les données
     */
    async simulateDataLoad(dataType) {
        // Dans une vraie application, ce serait une requête AJAX vers le serveur
        // Pour la démonstration, nous retournons des données codées en dur
        
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Retourner les données en fonction du type
        switch (dataType) {
            case 'employees':
                return {
                    employees: [
                        {
                            id: 1,
                            username: 'admin',
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
                            fullName: 'Jean Dupont',
                            email: 'jean.dupont@entreprise.fr',
                            role: 'Employé',
                            department: 'Marketing',
                            position: 'Responsable Marketing',
                            avatar: '../assets/img/avatars/user1.jpg',
                            office: 'B205'
                        },
                        // Autres employés...
                    ]
                };
            
            case 'departments':
                return {
                    departments: [
                        {
                            id: 1,
                            name: 'Direction',
                            description: 'Direction générale de l\'entreprise',
                            headId: 8,
                            location: 'Étage 1, Aile A',
                            color: '#34495e'
                        },
                        {
                            id: 2,
                            name: 'Marketing',
                            description: 'Département responsable de la stratégie marketing et de la communication',
                            headId: 5,
                            location: 'Étage 2, Aile B',
                            color: '#3498db'
                        },
                        // Autres départements...
                    ],
                    hierarchy: {
                        id: 8,
                        name: 'Paul Dupuis',
                        title: 'Directeur Général',
                        children: [
                            // Structure hiérarchique...
                        ]
                    }
                };
            
            case 'leaves':
                return {
                    leaves: [
                        {
                            id: 1,
                            employeeId: 2,
                            type: 'Congés payés',
                            startDate: '2025-03-10',
                            endDate: '2025-03-15',
                            duration: 5,
                            status: 'Approuvé',
                            approvedBy: 5,
                            approvedDate: '2025-02-15',
                            reason: 'Vacances familiales',
                            comments: 'Demande approuvée par la directrice marketing'
                        },
                        // Autres congés...
                    ],
                    leaveTypes: [
                        {
                            id: 1,
                            name: 'Congés payés',
                            color: '#3498db',
                            icon: 'umbrella-beach',
                            maxDuration: 25,
                            requiresApproval: true
                        },
                        // Autres types de congés...
                    ]
                };
            
            case 'documents':
                return {
                    documents: [
                        {
                            id: 1,
                            title: 'Rapport annuel 2024',
                            description: 'Rapport annuel de l\'entreprise pour l\'année 2024',
                            category: 'Rapports',
                            type: 'pdf',
                            path: 'documents/rapports/rapport_annuel_2024.pdf',
                            size: 2458000,
                            uploadedBy: 8,
                            uploadDate: '2025-01-15',
                            lastModified: '2025-01-15',
                            tags: ['rapport', 'annuel', '2024', 'finance'],
                            access: ['Direction', 'Finance'],
                            isPublic: false
                        },
                        // Autres documents...
                    ],
                    categories: [
                        {
                            id: 1,
                            name: 'Rapports',
                            icon: 'chart-bar',
                            color: '#3498db'
                        },
                        // Autres catégories...
                    ]
                };
            
            case 'officeMap':
                return {
                    floors: [
                        {
                            id: 1,
                            name: 'Étage 1',
                            description: 'Rez-de-chaussée - Direction, Finance et Logistique',
                            map: {
                                width: 1200,
                                height: 800,
                                background: 'maps/floor1.png',
                                areas: [
                                    // Zones...
                                ]
                            },
                            rooms: [
                                {
                                    id: 'A100',
                                    name: 'Bureau du Directeur Général',
                                    type: 'office',
                                    area: 'A',
                                    capacity: 1,
                                    occupants: [8],
                                    coordinates: {
                                        x: 150,
                                        y: 150,
                                        width: 100,
                                        height: 80
                                    }
                                },
                                // Autres salles...
                            ]
                        },
                        // Autres étages...
                    ],
                    roomTypes: [
                        {
                            id: 'office',
                            name: 'Bureau',
                            color: '#3498db',
                            icon: 'desk'
                        },
                        // Autres types de salles...
                    ]
                };
            
            default:
                throw new Error(`Type de données inconnu: ${dataType}`);
        }
    }
    
    /**
     * Obtient tous les employés
     * @returns {Promise<Array>} - Promesse résolue avec la liste des employés
     */
    async getEmployees() {
        const data = await this.loadData('employees');
        return data.employees;
    }
    
    /**
     * Obtient un employé par son ID
     * @param {number} id - ID de l'employé
     * @returns {Promise<Object>} - Promesse résolue avec les données de l'employé
     */
    async getEmployeeById(id) {
        const employees = await this.getEmployees();
        return employees.find(employee => employee.id === id);
    }
    
    /**
     * Obtient tous les départements
     * @returns {Promise<Array>} - Promesse résolue avec la liste des départements
     */
    async getDepartments() {
        const data = await this.loadData('departments');
        return data.departments;
    }
    
    /**
     * Obtient un département par son ID
     * @param {number} id - ID du département
     * @returns {Promise<Object>} - Promesse résolue avec les données du département
     */
    async getDepartmentById(id) {
        const departments = await this.getDepartments();
        return departments.find(department => department.id === id);
    }
    
    /**
     * Obtient la hiérarchie de l'entreprise
     * @returns {Promise<Object>} - Promesse résolue avec la hiérarchie
     */
    async getHierarchy() {
        const data = await this.loadData('departments');
        return data.hierarchy;
    }
    
    /**
     * Obtient tous les congés
     * @returns {Promise<Array>} - Promesse résolue avec la liste des congés
     */
    async getLeaves() {
        const data = await this.loadData('leaves');
        return data.leaves;
    }
    
    /**
     * Obtient les congés d'un employé
     * @param {number} employeeId - ID de l'employé
     * @returns {Promise<Array>} - Promesse résolue avec la liste des congés de l'employé
     */
    async getEmployeeLeaves(employeeId) {
        const leaves = await this.getLeaves();
        return leaves.filter(leave => leave.employeeId === employeeId);
    }
    
    /**
     * Obtient tous les types de congés
     * @returns {Promise<Array>} - Promesse résolue avec la liste des types de congés
     */
    async getLeaveTypes() {
        const data = await this.loadData('leaves');
        return data.leaveTypes;
    }
    
    /**
     * Obtient tous les documents
     * @returns {Promise<Array>} - Promesse résolue avec la liste des documents
     */
    async getDocuments() {
        const data = await this.loadData('documents');
        return data.documents;
    }
    
    /**
     * Obtient les documents accessibles à un employé
     * @param {Object} employee - Données de l'employé
     * @returns {Promise<Array>} - Promesse résolue avec la liste des documents accessibles
     */
    async getAccessibleDocuments(employee) {
        const documents = await this.getDocuments();
        return documents.filter(doc => {
            // Documents publics
            if (doc.isPublic) return true;
            
            // Documents accessibles à tous
            if (doc.access.includes('all')) return true;
            
            // Documents accessibles au département de l'employé
            if (doc.access.includes(employee.department)) return true;
            
            // Documents accessibles au rôle de l'employé
            if (doc.access.includes(employee.role)) return true;
            
            return false;
        });
    }
    
    /**
     * Obtient toutes les catégories de documents
     * @returns {Promise<Array>} - Promesse résolue avec la liste des catégories
     */
    async getDocumentCategories() {
        const data = await this.loadData('documents');
        return data.categories;
    }
    
    /**
     * Obtient tous les étages du plan des locaux
     * @returns {Promise<Array>} - Promesse résolue avec la liste des étages
     */
    async getFloors() {
        const data = await this.loadData('officeMap');
        return data.floors;
    }
    
    /**
     * Obtient un étage par son ID
     * @param {number} id - ID de l'étage
     * @returns {Promise<Object>} - Promesse résolue avec les données de l'étage
     */
    async getFloorById(id) {
        const floors = await this.getFloors();
        return floors.find(floor => floor.id === id);
    }
    
    /**
     * Obtient tous les types de salles
     * @returns {Promise<Array>} - Promesse résolue avec la liste des types de salles
     */
    async getRoomTypes() {
        const data = await this.loadData('officeMap');
        return data.roomTypes;
    }
    
    /**
     * Obtient l'emplacement d'un employé
     * @param {number} employeeId - ID de l'employé
     * @returns {Promise<Object>} - Promesse résolue avec les données de l'emplacement
     */
    async getEmployeeLocation(employeeId) {
        const floors = await this.getFloors();
        
        for (const floor of floors) {
            for (const room of floor.rooms) {
                if (room.occupants && room.occupants.includes(employeeId)) {
                    return {
                        floor: floor,
                        room: room
                    };
                }
            }
        }
        
        return null;
    }
    
    /**
     * Recherche des employés par nom, département, etc.
     * @param {string} query - Terme de recherche
     * @returns {Promise<Array>} - Promesse résolue avec la liste des employés correspondants
     */
    async searchEmployees(query) {
        if (!query) return [];
        
        const employees = await this.getEmployees();
        const lowerQuery = query.toLowerCase();
        
        return employees.filter(employee => {
            return (
                employee.fullName.toLowerCase().includes(lowerQuery) ||
                employee.username.toLowerCase().includes(lowerQuery) ||
                employee.email.toLowerCase().includes(lowerQuery) ||
                employee.department.toLowerCase().includes(lowerQuery) ||
                employee.position.toLowerCase().includes(lowerQuery)
            );
        });
    }
    
    /**
     * Recherche des documents par titre, description, tags, etc.
     * @param {string} query - Terme de recherche
     * @returns {Promise<Array>} - Promesse résolue avec la liste des documents correspondants
     */
    async searchDocuments(query) {
        if (!query) return [];
        
        const documents = await this.getDocuments();
        const lowerQuery = query.toLowerCase();
        
        return documents.filter(doc => {
            // Recherche dans le titre et la description
            if (doc.title.toLowerCase().includes(lowerQuery)) return true;
            if (doc.description.toLowerCase().includes(lowerQuery)) return true;
            
            // Recherche dans les tags
            if (doc.tags && doc.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) return true;
            
            // Recherche dans la catégorie
            if (doc.category.toLowerCase().includes(lowerQuery)) return true;
            
            return false;
        });
    }
}

// Exporter une instance unique du service de données
const dataService = new DataService();
export default dataService;
