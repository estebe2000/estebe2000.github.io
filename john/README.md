# Application de Gestion PME

Application web full HTML/CSS/JS permettant la gestion des informations d'une PME, avec un portail public et un intranet sécurisé.

## Fonctionnalités

### Portail public
- Présentation de l'entreprise
- Accès aux démarches administratives
- Guide d'accueil des nouveaux arrivants
- Informations de contact
- Plan des locaux

### Intranet sécurisé
- Gestion des employés avec fiches personnelles
- Affichage de l'organigramme interactif
- Emplacement des employés sur le plan des locaux
- Consultation des congés prévus
- Mise à jour des informations personnelles
- Interface d'administration
- Système de Gestion Électronique des Documents (GED)

## Structure du projet

```
/
├── index.html                  # Page d'accueil du portail public
├── css/
│   ├── normalize.css           # Reset CSS pour uniformiser l'affichage
│   └── styles.css              # Styles principaux de l'application
├── js/
│   ├── main.js                 # Script principal du portail public
│   ├── data-service.js         # Service d'accès aux données
│   ├── api-service.js          # Service API simulant un backend
│   └── utils.js                # Fonctions utilitaires
├── data/
│   ├── employees.json          # Données des employés
│   ├── departments.json        # Données des départements et hiérarchie
│   ├── leaves.json             # Données des congés
│   ├── documents.json          # Métadonnées des documents
│   └── office-map.json         # Données du plan des locaux
├── intranet/
│   ├── login.html              # Page de connexion à l'intranet
│   ├── dashboard.html          # Tableau de bord de l'intranet
│   ├── css/
│   │   └── intranet.css        # Styles spécifiques à l'intranet
│   └── js/
│       ├── auth.js             # Gestion de l'authentification
│       └── dashboard.js        # Script du tableau de bord
└── assets/
    └── img/                    # Images et ressources graphiques
```

## Utilisation

### Exécution locale

L'application est entièrement en HTML/CSS/JS et peut être exécutée localement sans serveur. Il suffit d'ouvrir le fichier `index.html` dans un navigateur web.

Pour une expérience optimale, il est recommandé d'utiliser un serveur web local comme Live Server (extension VS Code) ou http-server (Node.js).

### Connexion à l'intranet

Pour accéder à l'intranet, utilisez les identifiants suivants :

- **Administrateur** :
  - Identifiant : `admin`
  - Mot de passe : `admin123`

- **Utilisateur standard** :
  - Identifiant : `jdupont`
  - Mot de passe : `user123`

## Stockage des données

Toutes les données sont stockées dans des fichiers JSON dans le dossier `data/`. Dans une application réelle, ces données seraient stockées dans une base de données et accessibles via une API.

Pour cette démonstration, les modifications effectuées dans l'application (comme l'ajout de documents ou la modification de profils) ne sont pas persistantes et seront perdues lors du rechargement de la page.

## Fonctionnalités techniques

- **Architecture modulaire** : Séparation claire entre les services de données, l'API et l'interface utilisateur
- **Responsive design** : Interface adaptée à tous les appareils (ordinateurs, tablettes, mobiles)
- **Authentification** : Système de connexion avec gestion des sessions
- **Gestion des droits** : Accès différenciés selon le rôle de l'utilisateur
- **Visualisation interactive** : Organigramme et plan des locaux interactifs

## Développement

### Structure des données

Les données sont organisées en plusieurs fichiers JSON :

- `employees.json` : Informations sur les employés (profil, compétences, etc.)
- `departments.json` : Structure des départements et hiérarchie de l'entreprise
- `leaves.json` : Demandes de congés et soldes
- `documents.json` : Métadonnées des documents et catégories
- `office-map.json` : Plan des locaux avec emplacements des employés

### Services

- `data-service.js` : Gère l'accès aux données JSON
- `api-service.js` : Simule une API RESTful pour les opérations CRUD
- `auth.js` : Gère l'authentification et les sessions utilisateur

## Améliorations possibles

- Implémentation d'un backend réel avec une base de données
- Ajout d'un système de notifications
- Intégration d'un calendrier partagé
- Mise en place d'un système de messagerie interne
- Développement d'une application mobile
