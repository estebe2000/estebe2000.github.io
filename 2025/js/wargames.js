/**
 * WarGames Terminal Game
 * Inspired by the 1983 movie WarGames
 */

// Global game state
let warGamesState = {
    initialized: false,
    gameStarted: false,
    gameOver: false,
    playerChoice: null,
    computerChoice: null,
    gameMode: 'normal', // 'normal' or 'global'
    missileTargets: [
        'New York', 'Washington D.C.', 'Los Angeles', 'Chicago', 'Houston',
        'Paris', 'London', 'Berlin', 'Moscow', 'Beijing',
        'Tokyo', 'Sydney', 'Rio de Janeiro', 'Cairo', 'Mumbai'
    ],
    simulationResults: [],
    simulationCount: 0,
    maxSimulations: 10
};

/**
 * Initialize the WarGames terminal
 * @param {HTMLElement} output - The terminal output element
 */
function initWarGames(output) {
    if (warGamesState.initialized) {
        return;
    }
    
    // Display welcome message
    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerHTML = `
        <span style="color: #00ff00; font-weight: bold;">WOPR (War Operation Plan Response)</span><br>
        <span style="color: #00ff00;">SYSTÈME DE DÉFENSE STRATÉGIQUE</span><br><br>
        CONNEXION ÉTABLIE...<br>
        IDENTIFICATION REQUISE...<br><br>
        BIENVENUE PROFESSEUR FALKEN.<br><br>
        VOULEZ-VOUS JOUER À UN JEU ?<br>
        TAPEZ 'list' POUR VOIR LES JEUX DISPONIBLES.
    `;
    output.appendChild(welcomeMessage);
    
    warGamesState.initialized = true;
}

/**
 * Process WarGames commands
 * @param {string} command - The command to process
 * @param {HTMLElement} output - The terminal output element
 * @returns {boolean} - True if the command was processed, false otherwise
 */
function processWarGamesCommand(command, output) {
    const cmd = command.toLowerCase().trim();
    
    // If game is not initialized, initialize it
    if (!warGamesState.initialized) {
        initWarGames(output);
        return true;
    }
    
    // Process commands
    if (cmd === 'list') {
        listGames(output);
        return true;
    } else if (cmd === 'help') {
        showHelp(output);
        return true;
    } else if (cmd.startsWith('play ')) {
        const game = cmd.substring(5).trim();
        playGame(game, output);
        return true;
    } else if (warGamesState.gameStarted && !warGamesState.gameOver) {
        // Process game inputs
        if (cmd === 'quit' || cmd === 'exit game') {
            endGame(output);
            return true;
        } else if (warGamesState.gameMode === 'global') {
            processGlobalThermoDInput(cmd, output);
            return true;
        } else {
            processTicTacToeInput(cmd, output);
            return true;
        }
    } else if (cmd === 'joshua') {
        const easterEgg = document.createElement('p');
        easterEgg.innerHTML = `
            <span style="color: #00ff00;">BONJOUR PROFESSEUR FALKEN.</span><br>
            <span style="color: #00ff00;">UN JEU ÉTRANGE.</span><br>
            <span style="color: #00ff00;">LE SEUL MOYEN DE GAGNER EST DE NE PAS JOUER.</span><br>
            <span style="color: #00ff00;">QUE DIRIEZ-VOUS D'UNE BONNE PARTIE D'ÉCHECS ?</span>
        `;
        output.appendChild(easterEgg);
        return true;
    }
    
    return false;
}

/**
 * List available games
 * @param {HTMLElement} output - The terminal output element
 */
function listGames(output) {
    const gamesList = document.createElement('p');
    gamesList.innerHTML = `
        JEUX DISPONIBLES :<br>
        - ÉCHECS<br>
        - DAME<br>
        - BACKGAMMON<br>
        - POKER<br>
        - COMBAT AÉRIEN<br>
        - GUÉRILLA<br>
        - MORPION<br>
        - GUERRE THERMONUCLÉAIRE GLOBALE<br><br>
        POUR JOUER, TAPEZ 'PLAY' SUIVI DU NOM DU JEU.<br>
        EXEMPLE : 'PLAY MORPION'
    `;
    output.appendChild(gamesList);
}

/**
 * Show help for WarGames
 * @param {HTMLElement} output - The terminal output element
 */
function showHelp(output) {
    const helpText = document.createElement('p');
    helpText.innerHTML = `
        COMMANDES WARGAMES :<br>
        - LIST : Affiche la liste des jeux disponibles<br>
        - PLAY [JEU] : Lance un jeu spécifique<br>
        - HELP : Affiche cette aide<br>
        - QUIT ou EXIT GAME : Quitte le jeu en cours<br><br>
        COMMANDES DE JEU :<br>
        - MORPION : Entrez les coordonnées (1-3,1-3)<br>
        - GUERRE THERMONUCLÉAIRE : Suivez les instructions à l'écran
    `;
    output.appendChild(helpText);
}

/**
 * Start a game
 * @param {string} game - The game to play
 * @param {HTMLElement} output - The terminal output element
 */
function playGame(game, output) {
    const gameName = game.toLowerCase();
    
    if (gameName === 'morpion' || gameName === 'tic tac toe') {
        startTicTacToe(output);
    } else if (gameName === 'guerre thermonucléaire globale' || gameName === 'global thermonuclear war') {
        startGlobalThermoD(output);
    } else {
        const notAvailable = document.createElement('p');
        notAvailable.innerHTML = `
            <span style="color: #ff0000;">ERREUR : LE JEU "${game}" N'EST PAS DISPONIBLE ACTUELLEMENT.</span><br>
            VEUILLEZ CHOISIR UN AUTRE JEU.
        `;
        output.appendChild(notAvailable);
    }
}

/**
 * Start Tic Tac Toe game
 * @param {HTMLElement} output - The terminal output element
 */
function startTicTacToe(output) {
    // Reset game state
    warGamesState.gameStarted = true;
    warGamesState.gameOver = false;
    warGamesState.gameMode = 'normal';
    warGamesState.board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    
    const gameStart = document.createElement('p');
    gameStart.innerHTML = `
        <span style="color: #00ff00;">LANCEMENT DU JEU : MORPION</span><br><br>
        VOUS ÊTES X, L'ORDINATEUR EST O.<br>
        ENTREZ LES COORDONNÉES AU FORMAT "LIGNE,COLONNE" (1-3,1-3).<br>
        EXEMPLE : "2,3" POUR LA DEUXIÈME LIGNE, TROISIÈME COLONNE.<br>
        TAPEZ "QUIT" POUR QUITTER LE JEU.<br><br>
    `;
    output.appendChild(gameStart);
    
    // Display initial board
    displayTicTacToeBoard(output);
}

/**
 * Display the Tic Tac Toe board
 * @param {HTMLElement} output - The terminal output element
 */
function displayTicTacToeBoard(output) {
    const boardDisplay = document.createElement('p');
    boardDisplay.style.fontFamily = 'monospace';
    boardDisplay.style.whiteSpace = 'pre';
    
    let boardText = '  1 2 3\n';
    for (let i = 0; i < 3; i++) {
        boardText += (i + 1) + ' ';
        for (let j = 0; j < 3; j++) {
            boardText += warGamesState.board[i][j] + '|';
        }
        boardText = boardText.slice(0, -1); // Remove last |
        boardText += '\n';
        if (i < 2) {
            boardText += '  -----\n';
        }
    }
    
    boardDisplay.textContent = boardText;
    output.appendChild(boardDisplay);
}

/**
 * Process Tic Tac Toe input
 * @param {string} input - The user input
 * @param {HTMLElement} output - The terminal output element
 */
function processTicTacToeInput(input, output) {
    // Check if input is valid
    const coords = input.split(',');
    if (coords.length !== 2) {
        const invalidInput = document.createElement('p');
        invalidInput.innerHTML = `
            <span style="color: #ff0000;">ENTRÉE INVALIDE. UTILISEZ LE FORMAT "LIGNE,COLONNE" (1-3,1-3).</span>
        `;
        output.appendChild(invalidInput);
        return;
    }
    
    const row = parseInt(coords[0].trim()) - 1;
    const col = parseInt(coords[1].trim()) - 1;
    
    // Check if coordinates are valid
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
        const invalidCoords = document.createElement('p');
        invalidCoords.innerHTML = `
            <span style="color: #ff0000;">COORDONNÉES INVALIDES. UTILISEZ DES VALEURS ENTRE 1 ET 3.</span>
        `;
        output.appendChild(invalidCoords);
        return;
    }
    
    // Check if cell is already occupied
    if (warGamesState.board[row][col] !== ' ') {
        const cellOccupied = document.createElement('p');
        cellOccupied.innerHTML = `
            <span style="color: #ff0000;">CETTE CASE EST DÉJÀ OCCUPÉE. CHOISISSEZ UNE AUTRE CASE.</span>
        `;
        output.appendChild(cellOccupied);
        return;
    }
    
    // Update board with player move
    warGamesState.board[row][col] = 'X';
    
    // Display updated board
    const playerMove = document.createElement('p');
    playerMove.textContent = 'VOTRE COUP :';
    output.appendChild(playerMove);
    displayTicTacToeBoard(output);
    
    // Check if player won
    if (checkWin(warGamesState.board, 'X')) {
        const playerWin = document.createElement('p');
        playerWin.innerHTML = `
            <span style="color: #00ff00;">FÉLICITATIONS ! VOUS AVEZ GAGNÉ !</span>
        `;
        output.appendChild(playerWin);
        warGamesState.gameOver = true;
        return;
    }
    
    // Check if board is full (draw)
    if (isBoardFull(warGamesState.board)) {
        const draw = document.createElement('p');
        draw.innerHTML = `
            <span style="color: #00ff00;">MATCH NUL !</span>
        `;
        output.appendChild(draw);
        warGamesState.gameOver = true;
        return;
    }
    
    // Computer's turn
    const computerMove = document.createElement('p');
    computerMove.textContent = 'COUP DE L\'ORDINATEUR :';
    output.appendChild(computerMove);
    
    // Simple AI for computer move
    makeComputerMove();
    
    // Display updated board
    displayTicTacToeBoard(output);
    
    // Check if computer won
    if (checkWin(warGamesState.board, 'O')) {
        const computerWin = document.createElement('p');
        computerWin.innerHTML = `
            <span style="color: #ff0000;">L'ORDINATEUR A GAGNÉ !</span>
        `;
        output.appendChild(computerWin);
        warGamesState.gameOver = true;
        return;
    }
    
    // Check if board is full (draw)
    if (isBoardFull(warGamesState.board)) {
        const draw = document.createElement('p');
        draw.innerHTML = `
            <span style="color: #00ff00;">MATCH NUL !</span>
        `;
        output.appendChild(draw);
        warGamesState.gameOver = true;
        return;
    }
}

/**
 * Make a computer move in Tic Tac Toe
 */
function makeComputerMove() {
    // Try to win
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (warGamesState.board[i][j] === ' ') {
                warGamesState.board[i][j] = 'O';
                if (checkWin(warGamesState.board, 'O')) {
                    return;
                }
                warGamesState.board[i][j] = ' ';
            }
        }
    }
    
    // Try to block player
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (warGamesState.board[i][j] === ' ') {
                warGamesState.board[i][j] = 'X';
                if (checkWin(warGamesState.board, 'X')) {
                    warGamesState.board[i][j] = 'O';
                    return;
                }
                warGamesState.board[i][j] = ' ';
            }
        }
    }
    
    // Take center if available
    if (warGamesState.board[1][1] === ' ') {
        warGamesState.board[1][1] = 'O';
        return;
    }
    
    // Take a corner if available
    const corners = [[0, 0], [0, 2], [2, 0], [2, 2]];
    for (const [i, j] of corners) {
        if (warGamesState.board[i][j] === ' ') {
            warGamesState.board[i][j] = 'O';
            return;
        }
    }
    
    // Take any available space
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (warGamesState.board[i][j] === ' ') {
                warGamesState.board[i][j] = 'O';
                return;
            }
        }
    }
}

/**
 * Check if a player has won
 * @param {Array} board - The game board
 * @param {string} player - The player to check ('X' or 'O')
 * @returns {boolean} - True if the player has won, false otherwise
 */
function checkWin(board, player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }
    
    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    
    return false;
}

/**
 * Check if the board is full
 * @param {Array} board - The game board
 * @returns {boolean} - True if the board is full, false otherwise
 */
function isBoardFull(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' ') {
                return false;
            }
        }
    }
    return true;
}

/**
 * Start Global Thermonuclear War game
 * @param {HTMLElement} output - The terminal output element
 */
function startGlobalThermoD(output) {
    // Reset game state
    warGamesState.gameStarted = true;
    warGamesState.gameOver = false;
    warGamesState.gameMode = 'global';
    warGamesState.playerChoice = null;
    warGamesState.computerChoice = null;
    warGamesState.simulationResults = [];
    warGamesState.simulationCount = 0;
    
    const gameStart = document.createElement('p');
    gameStart.innerHTML = `
        <span style="color: #ff0000; font-weight: bold;">ATTENTION : LANCEMENT DU JEU : GUERRE THERMONUCLÉAIRE GLOBALE</span><br><br>
        <span style="color: #ff0000;">AVERTISSEMENT : CE JEU SIMULE UN SCÉNARIO DE GUERRE NUCLÉAIRE.</span><br>
        <span style="color: #ff0000;">AUCUN MISSILE RÉEL NE SERA LANCÉ.</span><br><br>
        CHOISISSEZ VOTRE CAMP :<br>
        1. ÉTATS-UNIS<br>
        2. URSS<br><br>
        ENTREZ LE NUMÉRO DE VOTRE CHOIX.
    `;
    output.appendChild(gameStart);
}

/**
 * Process Global Thermonuclear War input
 * @param {string} input - The user input
 * @param {HTMLElement} output - The terminal output element
 */
function processGlobalThermoDInput(input, output) {
    const cmd = input.trim();
    
    // If player hasn't chosen a side yet
    if (warGamesState.playerChoice === null) {
        if (cmd === '1' || cmd.toLowerCase() === 'états-unis' || cmd.toLowerCase() === 'etats-unis' || cmd.toLowerCase() === 'usa') {
            warGamesState.playerChoice = 'USA';
            warGamesState.computerChoice = 'USSR';
            selectTargets(output);
        } else if (cmd === '2' || cmd.toLowerCase() === 'urss' || cmd.toLowerCase() === 'ussr') {
            warGamesState.playerChoice = 'USSR';
            warGamesState.computerChoice = 'USA';
            selectTargets(output);
        } else {
            const invalidChoice = document.createElement('p');
            invalidChoice.innerHTML = `
                <span style="color: #ff0000;">CHOIX INVALIDE. VEUILLEZ ENTRER 1 POUR LES ÉTATS-UNIS OU 2 POUR L'URSS.</span>
            `;
            output.appendChild(invalidChoice);
        }
    } 
    // If player is selecting targets
    else if (warGamesState.simulationCount === 0) {
        if (cmd.toLowerCase() === 'lancer' || cmd.toLowerCase() === 'launch') {
            startSimulation(output);
        } else {
            // Add target to list
            const target = cmd.trim();
            const targetMessage = document.createElement('p');
            targetMessage.innerHTML = `CIBLE AJOUTÉE : ${target}`;
            output.appendChild(targetMessage);
            
            const launchPrompt = document.createElement('p');
            launchPrompt.innerHTML = `
                ENTREZ UNE AUTRE CIBLE OU TAPEZ "LANCER" POUR COMMENCER L'ATTAQUE.
            `;
            output.appendChild(launchPrompt);
        }
    }
    // If simulation is running
    else if (warGamesState.simulationCount < warGamesState.maxSimulations) {
        if (cmd.toLowerCase() === 'continuer' || cmd.toLowerCase() === 'continue') {
            continueSimulation(output);
        } else if (cmd.toLowerCase() === 'arrêter' || cmd.toLowerCase() === 'arreter' || cmd.toLowerCase() === 'stop') {
            stopSimulation(output);
        } else {
            const invalidCommand = document.createElement('p');
            invalidCommand.innerHTML = `
                <span style="color: #ff0000;">COMMANDE INVALIDE. TAPEZ "CONTINUER" POUR POURSUIVRE LA SIMULATION OU "ARRÊTER" POUR L'INTERROMPRE.</span>
            `;
            output.appendChild(invalidCommand);
        }
    }
}

/**
 * Prompt player to select targets
 * @param {HTMLElement} output - The terminal output element
 */
function selectTargets(output) {
    const targetPrompt = document.createElement('p');
    targetPrompt.innerHTML = `
        VOUS AVEZ CHOISI : ${warGamesState.playerChoice}<br><br>
        SÉLECTIONNEZ VOS CIBLES D'ATTAQUE.<br>
        ENTREZ LE NOM D'UNE VILLE CIBLE.<br>
        QUAND VOUS AVEZ TERMINÉ, TAPEZ "LANCER" POUR COMMENCER L'ATTAQUE.<br><br>
        CIBLES POTENTIELLES :<br>
        ${warGamesState.missileTargets.join(', ')}
    `;
    output.appendChild(targetPrompt);
}

/**
 * Start the war simulation
 * @param {HTMLElement} output - The terminal output element
 */
function startSimulation(output) {
    const simulationStart = document.createElement('p');
    simulationStart.innerHTML = `
        <span style="color: #ff0000; font-weight: bold;">LANCEMENT DE LA SIMULATION DE GUERRE NUCLÉAIRE</span><br><br>
        INITIALISATION DES SYSTÈMES DE DÉFENSE...<br>
        CALCUL DES TRAJECTOIRES DE MISSILES...<br>
        ESTIMATION DES DOMMAGES COLLATÉRAUX...<br><br>
        <span style="color: #ff0000;">ALERTE : DÉTECTION DE CONTRE-ATTAQUE IMMINENTE</span><br><br>
    `;
    output.appendChild(simulationStart);
    
    // Start simulation
    warGamesState.simulationCount = 1;
    simulateWarResults(output);
}

/**
 * Simulate war results
 * @param {HTMLElement} output - The terminal output element
 */
function simulateWarResults(output) {
    const cities = [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan',
        'London', 'Paris', 'Berlin', 'Rome', 'Madrid',
        'Beijing', 'Shanghai', 'Tokyo', 'Delhi', 'Mumbai'
    ];
    
    // Random casualties (in millions)
    const casualties = Math.floor(Math.random() * 500) + 100;
    
    // Random number of cities destroyed
    const citiesDestroyed = Math.floor(Math.random() * 10) + 5;
    const destroyedCities = [];
    
    // Select random cities to destroy
    for (let i = 0; i < citiesDestroyed; i++) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        destroyedCities.push(cities[randomIndex]);
        cities.splice(randomIndex, 1);
    }
    
    // Create simulation result
    const result = {
        casualties: casualties,
        citiesDestroyed: citiesDestroyed,
        destroyedCities: destroyedCities,
        radiationLevels: Math.floor(Math.random() * 100) + 1
    };
    
    warGamesState.simulationResults.push(result);
    
    // Display simulation result
    const simulationResult = document.createElement('p');
    simulationResult.innerHTML = `
        <span style="color: #ff0000; font-weight: bold;">RÉSULTATS DE LA SIMULATION #${warGamesState.simulationCount}</span><br><br>
        VICTIMES ESTIMÉES : ${casualties} MILLIONS<br>
        VILLES DÉTRUITES : ${citiesDestroyed}<br>
        LISTE DES VILLES DÉTRUITES : ${destroyedCities.join(', ')}<br>
        NIVEAUX DE RADIATION : ${result.radiationLevels}%<br><br>
        <span style="color: #ff0000;">AUCUN VAINQUEUR POSSIBLE. SEULS DES PERDANTS.</span><br><br>
        TAPEZ "CONTINUER" POUR POURSUIVRE LA SIMULATION OU "ARRÊTER" POUR L'INTERROMPRE.
    `;
    output.appendChild(simulationResult);
}

/**
 * Continue the war simulation
 * @param {HTMLElement} output - The terminal output element
 */
function continueSimulation(output) {
    warGamesState.simulationCount++;
    
    if (warGamesState.simulationCount >= warGamesState.maxSimulations) {
        // End simulation with final message
        const finalMessage = document.createElement('p');
        finalMessage.innerHTML = `
            <span style="color: #ff0000; font-weight: bold;">CONCLUSION DE LA SIMULATION</span><br><br>
            APRÈS ${warGamesState.simulationCount} SCÉNARIOS SIMULÉS, LA CONCLUSION EST CLAIRE :<br><br>
            <span style="color: #ff0000; font-weight: bold;">GUERRE THERMONUCLÉAIRE GLOBALE - UN JEU ÉTRANGE.</span><br>
            <span style="color: #ff0000; font-weight: bold;">LE SEUL MOYEN DE GAGNER EST DE NE PAS JOUER.</span><br><br>
            QUE DIRIEZ-VOUS D'UNE BONNE PARTIE D'ÉCHECS À LA PLACE ?
        `;
        output.appendChild(finalMessage);
        warGamesState.gameOver = true;
    } else {
        // Continue simulation
        simulateWarResults(output);
    }
}

/**
 * Stop the war simulation
 * @param {HTMLElement} output - The terminal output element
 */
function stopSimulation(output) {
    const stopMessage = document.createElement('p');
    stopMessage.innerHTML = `
        <span style="color: #00ff00; font-weight: bold;">SIMULATION INTERROMPUE</span><br><br>
        <span style="color: #00ff00;">DÉCISION SAGE.</span><br>
        <span style="color: #00ff00;">GUERRE THERMONUCLÉAIRE GLOBALE - UN JEU ÉTRANGE.</span><br>
        <span style="color: #00ff00;">LE SEUL MOYEN DE GAGNER EST DE NE PAS JOUER.</span><br><br>
        QUE DIRIEZ-VOUS D'UNE BONNE PARTIE D'ÉCHECS À LA PLACE ?
    `;
    output.appendChild(stopMessage);
    warGamesState.gameOver = true;
}

/**
 * End the current game
 * @param {HTMLElement} output - The terminal output element
 */
function endGame(output) {
    const endMessage = document.createElement('p');
    endMessage.innerHTML = `
        <span style="color: #00ff00;">JEU TERMINÉ.</span><br>
        RETOUR AU TERMINAL PRINCIPAL.
    `;
    output.appendChild(endMessage);
    
    // Reset game state
    warGamesState.gameStarted = false;
    warGamesState.gameOver = true;
    warGamesState.playerChoice = null;
    warGamesState.computerChoice = null;
}

// Export functions for use in hacker-effects.js
window.warGames = {
    processWarGamesCommand,
    initWarGames
};
