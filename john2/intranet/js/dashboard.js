/**
 * TextileMarine - Dashboard JavaScript
 * Handles dashboard functionality, charts, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize dashboard components
  initSidebar();
  initNotifications();
  initUserProfile();
  initQuickStats();
  initProjectsWidget();
  initKanbanBoard();
  initTeamAvailability();
  initInventoryChart();
  initFactoryMap();
  initDocumentsWidget();
  initThemeToggle();
});

/**
 * Initialize sidebar
 * - Toggle sidebar collapse
 * - Highlight active menu item
 */
function initSidebar() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  
  if (sidebarToggle && sidebar) {
    // Toggle sidebar collapse
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      
      // Update main content margin
      if (mainContent) {
        if (sidebar.classList.contains('collapsed')) {
          mainContent.style.marginLeft = 'var(--sidebar-collapsed-width)';
        } else {
          mainContent.style.marginLeft = 'var(--sidebar-width)';
        }
      }
    });
    
    // Highlight active menu item
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = sidebar.querySelectorAll('.sidebar-nav a');
    
    menuItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === currentPage) {
        item.classList.add('active');
      }
    });
    
    // On mobile, show sidebar toggle button
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
      });
      
      // Close sidebar when clicking outside
      document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target) && window.innerWidth < 768) {
          sidebar.classList.remove('active');
        }
      });
    }
  }
}

/**
 * Initialize notifications
 * - Toggle notification dropdown
 * - Mark notifications as read
 */
function initNotifications() {
  const notificationBtn = document.querySelector('.notification-btn');
  const notificationDropdown = document.querySelector('.notification-dropdown');
  const markAllReadBtn = document.querySelector('.mark-all-read');
  const notificationItems = document.querySelectorAll('.notification-item');
  
  if (notificationBtn && notificationDropdown) {
    // Toggle notification dropdown
    notificationBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle('active');
      
      // Close other dropdowns
      const profileDropdown = document.querySelector('.profile-dropdown');
      if (profileDropdown) {
        profileDropdown.classList.remove('active');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationDropdown.classList.remove('active');
      }
    });
    
    // Mark all notifications as read
    if (markAllReadBtn) {
      markAllReadBtn.addEventListener('click', function() {
        notificationItems.forEach(item => {
          item.classList.remove('unread');
        });
        
        // Update notification badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
          badge.style.display = 'none';
        }
      });
    }
    
    // Mark individual notification as read
    notificationItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.remove('unread');
        
        // Update notification badge
        const unreadCount = document.querySelectorAll('.notification-item.unread').length;
        const badge = document.querySelector('.notification-badge');
        
        if (badge) {
          if (unreadCount > 0) {
            badge.textContent = unreadCount;
          } else {
            badge.style.display = 'none';
          }
        }
      });
    });
  }
}

/**
 * Initialize user profile
 * - Toggle profile dropdown
 */
function initUserProfile() {
  const profileBtn = document.querySelector('.profile-btn');
  const profileDropdown = document.querySelector('.profile-dropdown');
  
  if (profileBtn && profileDropdown) {
    // Toggle profile dropdown
    profileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
      
      // Close other dropdowns
      const notificationDropdown = document.querySelector('.notification-dropdown');
      if (notificationDropdown) {
        notificationDropdown.classList.remove('active');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        profileDropdown.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize quick stats
 * - Animate stat values
 */
function initQuickStats() {
  const statValues = document.querySelectorAll('.stat-value');
  
  statValues.forEach(value => {
    const targetValue = parseInt(value.textContent);
    
    // Animate value from 0 to target
    let currentValue = 0;
    const duration = 1500; // ms
    const increment = targetValue / (duration / 16); // 60fps
    
    function updateValue() {
      currentValue += increment;
      
      if (currentValue < targetValue) {
        value.textContent = Math.floor(currentValue).toLocaleString();
        requestAnimationFrame(updateValue);
      } else {
        value.textContent = targetValue.toLocaleString();
      }
    }
    
    updateValue();
  });
}

/**
 * Initialize projects widget
 * - Load projects from data
 * - Update progress bars
 */
function initProjectsWidget() {
  const projectList = document.querySelector('.project-list');
  
  if (projectList) {
    // Demo projects data (in a real app, this would come from a server)
    const projects = [
      {
        id: 1,
        name: 'Protection du Queen Mary 2',
        client: 'Chantiers de l\'Atlantique',
        deadline: '31/03/2024',
        status: 'completed',
        progress: 100,
        description: 'Installation de bâches de protection pour les travaux de rénovation'
      },
      {
        id: 2,
        name: 'Couverture du Stade Océane',
        client: 'Le Havre AC',
        deadline: '15/06/2024',
        status: 'in-progress',
        progress: 65,
        description: 'Conception et installation d\'une couverture textile innovante'
      },
      {
        id: 3,
        name: 'Festival Les Escales',
        client: 'Ville de Saint-Nazaire',
        deadline: '01/07/2024',
        status: 'in-progress',
        progress: 40,
        description: 'Structures textiles modulaires pour les scènes et espaces du festival'
      },
      {
        id: 4,
        name: 'Protection d\'éoliennes offshore',
        client: 'EDF Renouvelables',
        deadline: '15/05/2024',
        status: 'urgent',
        progress: 25,
        description: 'Housses de protection spécifiques pour composants sensibles'
      }
    ];
    
    // Clear existing projects
    projectList.innerHTML = '';
    
    // Add projects to list
    projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.className = 'project-item';
      
      // Status text and icon
      let statusText = '';
      let statusIcon = '';
      
      switch (project.status) {
        case 'planning':
          statusText = 'Planification';
          statusIcon = 'fa-clipboard-list';
          break;
        case 'in-progress':
          statusText = 'En cours';
          statusIcon = 'fa-spinner';
          break;
        case 'completed':
          statusText = 'Terminé';
          statusIcon = 'fa-check-circle';
          break;
        case 'urgent':
          statusText = 'Urgent';
          statusIcon = 'fa-exclamation-circle';
          break;
        case 'on-hold':
          statusText = 'En attente';
          statusIcon = 'fa-pause-circle';
          break;
      }
      
      projectItem.innerHTML = `
        <div class="project-info">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-meta">
            <span class="project-client"><i class="fas fa-building"></i> ${project.client}</span>
            <span class="project-deadline"><i class="fas fa-calendar-alt"></i> Échéance: ${project.deadline}</span>
            <span class="project-status ${project.status}"><i class="fas ${statusIcon}"></i> ${statusText}</span>
          </div>
        </div>
        <div class="project-progress">
          <div class="progress-bar">
            <div class="progress" style="width: ${project.progress}%"></div>
          </div>
          <span class="progress-value">${project.progress}%</span>
        </div>
      `;
      
      projectList.appendChild(projectItem);
    });
  }
}

/**
 * Initialize Kanban board
 * - Load tasks from data
 * - Enable drag and drop functionality
 */
function initKanbanBoard() {
  const kanbanBoard = document.querySelector('.kanban-board');
  
  if (kanbanBoard) {
    // Demo tasks data (in a real app, this would come from a server)
    const tasks = [
      {
        id: 1,
        title: 'Commande de toile marine',
        description: 'Commander 500m² de toile marine pour le projet Stade Océane',
        status: 'todo',
        priority: 'high',
        dueDate: '10/03/2024',
        project: 'Stade Océane'
      },
      {
        id: 2,
        title: 'Conception des fixations',
        description: 'Finaliser les plans des fixations pour les bâches de protection',
        status: 'todo',
        priority: 'medium',
        dueDate: '15/03/2024',
        project: 'Éoliennes'
      },
      {
        id: 3,
        title: 'Réunion client',
        description: 'Présentation des maquettes au client pour validation',
        status: 'todo',
        priority: 'low',
        dueDate: '08/03/2024',
        project: 'Festival'
      },
      {
        id: 4,
        title: 'Découpe des matériaux',
        description: 'Découpe des toiles selon les plans validés',
        status: 'in-progress',
        priority: 'high',
        dueDate: '12/03/2024',
        project: 'Stade Océane'
      },
      {
        id: 5,
        title: 'Tests d\'étanchéité',
        description: 'Réaliser les tests d\'étanchéité sur les prototypes',
        status: 'in-progress',
        priority: 'medium',
        dueDate: '18/03/2024',
        project: 'Éoliennes'
      },
      {
        id: 6,
        title: 'Préparation livraison',
        description: 'Emballer et préparer les bâches pour livraison',
        status: 'done',
        priority: 'medium',
        dueDate: '05/03/2024',
        project: 'Queen Mary 2'
      },
      {
        id: 7,
        title: 'Facturation client',
        description: 'Émettre la facture finale pour le client',
        status: 'done',
        priority: 'low',
        dueDate: '01/03/2024',
        project: 'Queen Mary 2'
      }
    ];
    
    // Get task lists
    const todoList = document.querySelector('.kanban-column:nth-child(1) .task-list');
    const inProgressList = document.querySelector('.kanban-column:nth-child(2) .task-list');
    const doneList = document.querySelector('.kanban-column:nth-child(3) .task-list');
    
    // Clear existing tasks
    if (todoList) todoList.innerHTML = '';
    if (inProgressList) inProgressList.innerHTML = '';
    if (doneList) doneList.innerHTML = '';
    
    // Add tasks to appropriate lists
    tasks.forEach(task => {
      const taskCard = document.createElement('div');
      taskCard.className = `task-card${task.status === 'done' ? ' completed' : ''}`;
      taskCard.setAttribute('data-id', task.id);
      taskCard.setAttribute('draggable', 'true');
      
      taskCard.innerHTML = `
        <div class="task-priority ${task.priority}"></div>
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <div class="task-meta">
          <span class="task-due-date"><i class="fas fa-calendar-alt"></i> ${task.dueDate}</span>
          <span class="task-project">${task.project}</span>
        </div>
      `;
      
      // Add task to appropriate list
      switch (task.status) {
        case 'todo':
          if (todoList) todoList.appendChild(taskCard);
          break;
        case 'in-progress':
          if (inProgressList) inProgressList.appendChild(taskCard);
          break;
        case 'done':
          if (doneList) doneList.appendChild(taskCard);
          break;
      }
    });
    
    // Update task counts
    updateTaskCounts();
    
    // Initialize drag and drop
    initDragAndDrop();
  }
}

/**
 * Update task counts in Kanban board
 */
function updateTaskCounts() {
  const columns = document.querySelectorAll('.kanban-column');
  
  columns.forEach(column => {
    const taskCount = column.querySelector('.task-count');
    const taskList = column.querySelector('.task-list');
    
    if (taskCount && taskList) {
      const count = taskList.querySelectorAll('.task-card').length;
      taskCount.textContent = count;
    }
  });
}

/**
 * Initialize drag and drop for Kanban board
 */
function initDragAndDrop() {
  const taskCards = document.querySelectorAll('.task-card');
  const dropZones = document.querySelectorAll('.task-list');
  
  // Add drag events to task cards
  taskCards.forEach(card => {
    card.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', card.getAttribute('data-id'));
      setTimeout(() => {
        card.classList.add('dragging');
      }, 0);
    });
    
    card.addEventListener('dragend', function() {
      card.classList.remove('dragging');
    });
  });
  
  // Add drop events to drop zones
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', function(e) {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    
    zone.addEventListener('dragleave', function() {
      zone.classList.remove('drag-over');
    });
    
    zone.addEventListener('drop', function(e) {
      e.preventDefault();
      zone.classList.remove('drag-over');
      
      const taskId = e.dataTransfer.getData('text/plain');
      const taskCard = document.querySelector(`.task-card[data-id="${taskId}"]`);
      
      if (taskCard) {
        // Check if dropping in "Done" column
        const isDoneColumn = zone.closest('.kanban-column').querySelector('.column-header h3').textContent.includes('Terminé');
        
        if (isDoneColumn) {
          taskCard.classList.add('completed');
        } else {
          taskCard.classList.remove('completed');
        }
        
        // Move task to new zone
        zone.appendChild(taskCard);
        
        // Update task counts
        updateTaskCounts();
      }
    });
  });
}

/**
 * Initialize team availability
 * - Load team data
 * - Handle date navigation
 */
function initTeamAvailability() {
  const availabilityTable = document.querySelector('.availability-table');
  const prevDateBtn = document.querySelector('.date-nav.prev');
  const nextDateBtn = document.querySelector('.date-nav.next');
  const dateDisplay = document.querySelector('.availability-date h3');
  
  if (availabilityTable && dateDisplay) {
    // Demo team data (in a real app, this would come from a server)
    const team = [
      {
        id: 1,
        name: 'Sophie Dubois',
        position: 'Chef de Projet',
        avatar: '../images/employee1.jpg',
        availability: ['present', 'present', 'present', 'present', 'present']
      },
      {
        id: 2,
        name: 'Marc Leroy',
        position: 'Ingénieur Textile',
        avatar: '../images/employee2.jpg',
        availability: ['present', 'present', 'absent', 'present', 'present']
      },
      {
        id: 3,
        name: 'Julie Martin',
        position: 'Designer',
        avatar: '../images/employee3.jpg',
        availability: ['present', 'partial', 'partial', 'present', 'present']
      },
      {
        id: 4,
        name: 'Thomas Bernard',
        position: 'Technicien',
        avatar: '../images/employee4.jpg',
        availability: ['absent', 'absent', 'present', 'present', 'present']
      },
      {
        id: 5,
        name: 'Émilie Petit',
        position: 'Responsable Qualité',
        avatar: '../images/employee5.jpg',
        availability: ['present', 'present', 'present', 'partial', 'absent']
      }
    ];
    
    // Current date
    let currentDate = new Date();
    
    // Update availability table
    function updateAvailabilityTable() {
      // Update date display
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      dateDisplay.textContent = currentDate.toLocaleDateString('fr-FR', options);
      
      // Generate dates for the week
      const dates = [];
      const weekStart = new Date(currentDate);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1); // Start from Monday
      
      for (let i = 0; i < 5; i++) { // Monday to Friday
        const date = new Date(weekStart);
        date.setDate(date.getDate() + i);
        dates.push(date);
      }
      
      // Generate table HTML
      let tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Employé</th>
      `;
      
      // Add date headers
      dates.forEach(date => {
        const day = date.toLocaleDateString('fr-FR', { weekday: 'short' });
        const dayNum = date.getDate();
        tableHTML += `<th>${day} ${dayNum}</th>`;
      });
      
      tableHTML += `
            </tr>
          </thead>
          <tbody>
      `;
      
      // Add team rows
      team.forEach(employee => {
        tableHTML += `
          <tr>
            <td>
              <div class="employee-name">
                <img src="${employee.avatar}" alt="${employee.name}">
                <div>
                  <strong>${employee.name}</strong>
                  <div>${employee.position}</div>
                </div>
              </div>
            </td>
        `;
        
        // Add availability cells
        employee.availability.forEach(status => {
          let statusText = '';
          
          switch (status) {
            case 'present':
              statusText = '';
              break;
            case 'absent':
              statusText = 'Congé';
              break;
            case 'partial':
              statusText = 'Mi-temps';
              break;
          }
          
          tableHTML += `<td class="${status}">${statusText}</td>`;
        });
        
        tableHTML += `</tr>`;
      });
      
      tableHTML += `
          </tbody>
        </table>
      `;
      
      // Update table
      availabilityTable.innerHTML = tableHTML;
    }
    
    // Initial update
    updateAvailabilityTable();
    
    // Handle date navigation
    if (prevDateBtn) {
      prevDateBtn.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() - 7);
        updateAvailabilityTable();
      });
    }
    
    if (nextDateBtn) {
      nextDateBtn.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() + 7);
        updateAvailabilityTable();
      });
    }
  }
}

/**
 * Initialize inventory chart
 * - Create doughnut chart for inventory status
 */
function initInventoryChart() {
  const inventoryChart = document.querySelector('.inventory-chart');
  
  if (inventoryChart) {
    // Create canvas for chart
    const canvas = document.createElement('canvas');
    canvas.id = 'inventory-doughnut';
    inventoryChart.appendChild(canvas);
    
    // Get chart context
    const ctx = canvas.getContext('2d');
    
    // Chart data
    const data = {
      labels: ['Toile Marine', 'Toile Ignifugée', 'Structures Alu', 'Fixations', 'Accessoires'],
      datasets: [{
        data: [35, 20, 15, 10, 20],
        backgroundColor: [
          '#0a4d68',
          '#088395',
          '#05bfdb',
          '#00ffca',
          '#e76f51'
        ],
        borderWidth: 0
      }]
    };
    
    // Chart options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12,
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}%`;
            }
          }
        }
      },
      cutout: '70%'
    };
    
    // Create chart
    if (typeof Chart !== 'undefined') {
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
      });
    } else {
      // Fallback if Chart.js is not loaded
      inventoryChart.innerHTML = '<div class="chart-fallback">Chargement du graphique...</div>';
      
      // Load Chart.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = function() {
        inventoryChart.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.id = 'inventory-doughnut';
        inventoryChart.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: options
        });
      };
      document.head.appendChild(script);
    }
  }
}

/**
 * Initialize factory map
 * - Create interactive map of factory
 */
function initFactoryMap() {
  const mapContainer = document.getElementById('factory-map-container');
  
  if (mapContainer) {
    // Create SVG map
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 800 400");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    
    // Factory layout
    const areas = [
      {
        type: 'production',
        name: 'Atelier de Découpe',
        path: 'M50,50 L300,50 L300,200 L50,200 Z',
        tooltip: 'Atelier de Découpe - 6 machines en activité'
      },
      {
        type: 'production',
        name: 'Atelier d\'Assemblage',
        path: 'M350,50 L600,50 L600,200 L350,200 Z',
        tooltip: 'Atelier d\'Assemblage - 4 postes de travail'
      },
      {
        type: 'storage',
        name: 'Stockage Matières Premières',
        path: 'M50,250 L200,250 L200,350 L50,350 Z',
        tooltip: 'Stockage Matières Premières - 75% de capacité'
      },
      {
        type: 'storage',
        name: 'Stockage Produits Finis',
        path: 'M250,250 L400,250 L400,350 L250,350 Z',
        tooltip: 'Stockage Produits Finis - 40% de capacité'
      },
      {
        type: 'office',
        name: 'Bureaux',
        path: 'M650,50 L750,50 L750,150 L650,150 Z',
        tooltip: 'Bureaux - 12 postes de travail'
      },
      {
        type: 'loading',
        name: 'Zone de Chargement',
        path: 'M450,250 L600,250 L600,350 L450,350 Z',
        tooltip: 'Zone de Chargement - 2 quais disponibles'
      }
    ];
    
    // Add areas to map
    areas.forEach(area => {
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", area.path);
      path.setAttribute("class", `map-area ${area.type}`);
      path.setAttribute("data-name", area.name);
      path.setAttribute("data-tooltip", area.tooltip);
      
      // Set fill color based on area type
      let fillColor = '';
      switch (area.type) {
        case 'production':
          fillColor = '#3498db';
          break;
        case 'storage':
          fillColor = '#f39c12';
          break;
        case 'office':
          fillColor = '#2ecc71';
          break;
        case 'loading':
          fillColor = '#9b59b6';
          break;
      }
      
      path.setAttribute("fill", fillColor);
      path.setAttribute("stroke", "#fff");
      path.setAttribute("stroke-width", "2");
      
      // Add hover effect
      path.addEventListener('mouseover', function(e) {
        this.setAttribute("opacity", "0.8");
        
        // Show tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.zIndex = '1000';
        tooltip.style.pointerEvents = 'none';
        document.body.appendChild(tooltip);
        
        // Store tooltip reference
        this.tooltip = tooltip;
      });
      
      path.addEventListener('mousemove', function(e) {
        if (this.tooltip) {
          this.tooltip.style.left = `${e.clientX + 10}px`;
          this.tooltip.style.top = `${e.clientY + 10}px`;
        }
      });
      
      path.addEventListener('mouseout', function() {
        this.setAttribute("opacity", "1");
        
        // Remove tooltip
        if (this.tooltip) {
          document.body.removeChild(this.tooltip);
          this.tooltip = null;
        }
      });
      
      // Add area labels
      const textPath = document.createElementNS(svgNS, "text");
      
      // Extract center coordinates from path
      const coords = area.path.match(/\d+/g).map(Number);
      const x = (coords[0] + coords[2]) / 2;
      const y = (coords[1] + coords[5]) / 2;
      
      textPath.setAttribute("x", x);
      textPath.setAttribute("y", y);
      textPath.setAttribute("text-anchor", "middle");
      textPath.setAttribute("fill", "white");
      textPath.setAttribute("font-size", "14");
      textPath.setAttribute("font-weight", "bold");
      textPath.setAttribute("pointer-events", "none");
      textPath.textContent = area.name;
      
      svg.appendChild(path);
      svg.appendChild(textPath);
    });
    
    // Add map to container
    mapContainer.appendChild(svg);
  }
}

/**
 * Initialize documents widget
 * - Load documents from data
 * - Handle document actions
 */
function initDocumentsWidget() {
  const documentsList = document.querySelector('.documents-list');
  
  if (documentsList) {
    // Demo documents data (in a real app, this would come from a server)
    const documents = [
      {
        id: 1,
        name: 'Devis_StadeOceane_2024.pdf',
        type: 'pdf',
        size: '2.4 MB',
        date: '28/02/2024'
      },
      {
        id: 2,
        name: 'Plan_Technique_Eolienne.pdf',
        type: 'pdf',
        size: '5.1 MB',
        date: '15/02/2024'
      },
      {
        id: 3,
        name: 'Catalogue_Produits_2024.pdf',
        type: 'pdf',
        size: '8.7 MB',
        date: '10/02/2024'
      },
      {
        id: 4,
        name: 'Rapport_Qualite_Fevrier.doc',
        type: 'doc',
        size: '1.2 MB',
        date: '29/02/2024'
      },
      {
        id: 5,
        name: 'Inventaire_Stock_Mars.xls',
        type: 'xls',
        size: '3.5 MB',
        date: '01/03/2024'
      }
    ];
    
    // Clear existing documents
    documentsList.innerHTML = '';
    
    // Add documents to list
    documents.forEach(document => {
      const documentItem = document.createElement('div');
      documentItem.className = 'document-item';
      
      // Document icon based on type
      let iconClass = '';
      switch (document.type) {
        case 'pdf':
          iconClass = 'fa-file-pdf';
          break;
        case 'doc':
          iconClass = 'fa-file-word';
          break;
        case 'xls':
          iconClass = 'fa-file-excel';
          break;
        case 'img':
          iconClass = 'fa-file-image';
          break;
        default:
          iconClass = 'fa-file';
      }
      
      documentItem.innerHTML = `
        <div class="document-icon ${document.type}">
          <i class="fas ${iconClass}"></i>
        </div>
        <div class="document-info">
          <h4>${document.name}</h4>
          <p>${document.size} • ${document.date}</p>
        </div>
        <div class="document-actions">
          <button class="doc-action" title="Télécharger">
            <i class="fas fa-download"></i>
          </button>
          <button class="doc-action" title="Partager">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      `;
      
      // Add document to list
      documentsList.appendChild(documentItem);
      
      // Add event listeners for document actions
      const downloadBtn = documentItem.querySelector('.doc-action:first-child');
      const shareBtn = documentItem.querySelector('.doc-action:last-child');
      
      if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
          // In a real app, this would download the document
          alert(`Téléchargement de ${document.name}`);
        });
      }
      
      if (shareBtn) {
        shareBtn.addEventListener('click', function() {
          // In a real app, this would open a share dialog
          alert(`Partage de ${document.name}`);
        });
      }
    });
  }
}

/**
 * Initialize theme toggle
 * - Switch between light and dark mode
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    // Check if user has a preferred theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      document.body.classList.add('dark-mode');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save theme preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
}
