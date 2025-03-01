/**
 * Utilitaires pour l'application PME
 * Fonctions communes utilisées dans toute l'application
 */

/**
 * Formate une date au format local français
 * @param {string|Date} date - Date à formater
 * @param {boolean} includeTime - Inclure l'heure dans le format
 * @returns {string} - Date formatée
 */
export function formatDate(date, includeTime = false) {
    if (!date) return '';
    
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    
    if (includeTime) {
        options.hour = '2-digit';
        options.minute = '2-digit';
    }
    
    return dateObj.toLocaleDateString('fr-FR', options);
}

/**
 * Formate un nombre avec séparateur de milliers
 * @param {number} number - Nombre à formater
 * @param {number} decimals - Nombre de décimales
 * @returns {string} - Nombre formaté
 */
export function formatNumber(number, decimals = 0) {
    if (number === null || number === undefined) return '';
    
    return number.toLocaleString('fr-FR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

/**
 * Formate une taille de fichier en Ko, Mo, Go
 * @param {number} bytes - Taille en octets
 * @returns {string} - Taille formatée
 */
export function formatFileSize(bytes) {
    if (bytes === 0) return '0 octet';
    
    const k = 1024;
    const sizes = ['octets', 'Ko', 'Mo', 'Go', 'To'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Calcule la durée entre deux dates en jours
 * @param {string|Date} startDate - Date de début
 * @param {string|Date} endDate - Date de fin
 * @returns {number} - Nombre de jours
 */
export function calculateDuration(startDate, endDate) {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    
    // Réinitialiser les heures pour ne compter que les jours
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    // Calculer la différence en jours
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays + 1; // +1 car on compte le jour de début et le jour de fin
}

/**
 * Tronque un texte à une longueur maximale
 * @param {string} text - Texte à tronquer
 * @param {number} maxLength - Longueur maximale
 * @returns {string} - Texte tronqué
 */
export function truncateText(text, maxLength = 100) {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength) + '...';
}

/**
 * Génère une couleur aléatoire au format hexadécimal
 * @returns {string} - Couleur au format hexadécimal
 */
export function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Génère un identifiant unique
 * @returns {string} - Identifiant unique
 */
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Filtre un tableau d'objets par une valeur de recherche
 * @param {Array} array - Tableau d'objets à filtrer
 * @param {string} searchValue - Valeur de recherche
 * @param {Array} fields - Champs à rechercher
 * @returns {Array} - Tableau filtré
 */
export function filterArrayBySearchValue(array, searchValue, fields) {
    if (!searchValue || !array || !fields || fields.length === 0) {
        return array;
    }
    
    const lowerSearchValue = searchValue.toLowerCase();
    
    return array.filter(item => {
        return fields.some(field => {
            const value = item[field];
            
            if (value === null || value === undefined) {
                return false;
            }
            
            if (typeof value === 'string') {
                return value.toLowerCase().includes(lowerSearchValue);
            }
            
            if (typeof value === 'number') {
                return value.toString().includes(lowerSearchValue);
            }
            
            return false;
        });
    });
}

/**
 * Trie un tableau d'objets par un champ
 * @param {Array} array - Tableau d'objets à trier
 * @param {string} field - Champ de tri
 * @param {boolean} ascending - Ordre ascendant ou descendant
 * @returns {Array} - Tableau trié
 */
export function sortArrayByField(array, field, ascending = true) {
    if (!array || !field) {
        return array;
    }
    
    return [...array].sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];
        
        if (valueA === valueB) {
            return 0;
        }
        
        if (valueA === null || valueA === undefined) {
            return ascending ? -1 : 1;
        }
        
        if (valueB === null || valueB === undefined) {
            return ascending ? 1 : -1;
        }
        
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return ascending
                ? valueA.localeCompare(valueB, 'fr', { sensitivity: 'base' })
                : valueB.localeCompare(valueA, 'fr', { sensitivity: 'base' });
        }
        
        return ascending ? valueA - valueB : valueB - valueA;
    });
}

/**
 * Groupe un tableau d'objets par un champ
 * @param {Array} array - Tableau d'objets à grouper
 * @param {string} field - Champ de groupement
 * @returns {Object} - Objet avec les groupes
 */
export function groupArrayByField(array, field) {
    if (!array || !field) {
        return {};
    }
    
    return array.reduce((groups, item) => {
        const key = item[field];
        
        if (!groups[key]) {
            groups[key] = [];
        }
        
        groups[key].push(item);
        
        return groups;
    }, {});
}

/**
 * Vérifie si une chaîne est un email valide
 * @param {string} email - Email à vérifier
 * @returns {boolean} - true si l'email est valide
 */
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Vérifie si une chaîne est un numéro de téléphone valide (format français)
 * @param {string} phone - Numéro de téléphone à vérifier
 * @returns {boolean} - true si le numéro est valide
 */
export function isValidPhone(phone) {
    const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return regex.test(phone);
}

/**
 * Formate un numéro de téléphone au format français
 * @param {string} phone - Numéro de téléphone à formater
 * @returns {string} - Numéro formaté
 */
export function formatPhone(phone) {
    if (!phone) return '';
    
    // Supprimer tous les caractères non numériques
    const digits = phone.replace(/\D/g, '');
    
    // Si le numéro commence par 33, le formater comme un numéro international
    if (digits.startsWith('33')) {
        const formatted = digits.substring(2).replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
        return '+33 ' + formatted;
    }
    
    // Sinon, formater comme un numéro français standard
    return digits.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

/**
 * Obtient le premier jour de la semaine pour une date donnée
 * @param {Date} date - Date
 * @returns {Date} - Premier jour de la semaine
 */
export function getFirstDayOfWeek(date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Ajuster si dimanche
    return new Date(date.setDate(diff));
}

/**
 * Obtient le dernier jour de la semaine pour une date donnée
 * @param {Date} date - Date
 * @returns {Date} - Dernier jour de la semaine
 */
export function getLastDayOfWeek(date) {
    const firstDay = getFirstDayOfWeek(new Date(date));
    return new Date(firstDay.setDate(firstDay.getDate() + 6));
}

/**
 * Obtient le premier jour du mois pour une date donnée
 * @param {Date} date - Date
 * @returns {Date} - Premier jour du mois
 */
export function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Obtient le dernier jour du mois pour une date donnée
 * @param {Date} date - Date
 * @returns {Date} - Dernier jour du mois
 */
export function getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Ajoute des jours à une date
 * @param {Date} date - Date
 * @param {number} days - Nombre de jours à ajouter
 * @returns {Date} - Nouvelle date
 */
export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Ajoute des mois à une date
 * @param {Date} date - Date
 * @param {number} months - Nombre de mois à ajouter
 * @returns {Date} - Nouvelle date
 */
export function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

/**
 * Obtient la différence en jours entre deux dates
 * @param {Date} date1 - Première date
 * @param {Date} date2 - Deuxième date
 * @returns {number} - Différence en jours
 */
export function getDaysDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Vérifie si deux dates sont le même jour
 * @param {Date} date1 - Première date
 * @param {Date} date2 - Deuxième date
 * @returns {boolean} - true si les dates sont le même jour
 */
export function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

/**
 * Obtient le nom du mois en français
 * @param {number} month - Numéro du mois (0-11)
 * @param {boolean} short - Format court ou long
 * @returns {string} - Nom du mois
 */
export function getMonthName(month, short = false) {
    const months = [
        { short: 'Jan', long: 'Janvier' },
        { short: 'Fév', long: 'Février' },
        { short: 'Mar', long: 'Mars' },
        { short: 'Avr', long: 'Avril' },
        { short: 'Mai', long: 'Mai' },
        { short: 'Juin', long: 'Juin' },
        { short: 'Juil', long: 'Juillet' },
        { short: 'Août', long: 'Août' },
        { short: 'Sep', long: 'Septembre' },
        { short: 'Oct', long: 'Octobre' },
        { short: 'Nov', long: 'Novembre' },
        { short: 'Déc', long: 'Décembre' }
    ];
    
    return short ? months[month].short : months[month].long;
}

/**
 * Obtient le nom du jour en français
 * @param {number} day - Numéro du jour (0-6)
 * @param {boolean} short - Format court ou long
 * @returns {string} - Nom du jour
 */
export function getDayName(day, short = false) {
    const days = [
        { short: 'Dim', long: 'Dimanche' },
        { short: 'Lun', long: 'Lundi' },
        { short: 'Mar', long: 'Mardi' },
        { short: 'Mer', long: 'Mercredi' },
        { short: 'Jeu', long: 'Jeudi' },
        { short: 'Ven', long: 'Vendredi' },
        { short: 'Sam', long: 'Samedi' }
    ];
    
    return short ? days[day].short : days[day].long;
}
