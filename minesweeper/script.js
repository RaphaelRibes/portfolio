document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const resetBtn = document.getElementById('reset-btn');
    const mineCountDisplay = document.getElementById('mine-count');
    const timerDisplay = document.getElementById('timer');
    const smileyIcon = resetBtn.querySelector('i');

    const width = 9;
    const height = 9; // Grille 9x9 standard débutant
    const bombAmount = 10;
    let cells = [];
    let isGameOver = false;
    let flags = 0;
    let seconds = 0;
    let timerId;
    let firstClick = true;

    // --- Initialisation ---
    function createBoard() {
        grid.innerHTML = '';
        cells = [];
        isGameOver = false;
        flags = 0;
        seconds = 0;
        firstClick = true;
        
        clearInterval(timerId);
        timerDisplay.innerText = '000';
        mineCountDisplay.innerText = formatNumber(bombAmount);
        resetIcon('fa-smile');

        // Créer les cases vides pour l'instant
        for (let i = 0; i < width * height; i++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', i);
            cell.classList.add('cell');
            
            // Événements
            cell.addEventListener('click', () => click(cell));
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                addFlag(cell);
            });
            cell.addEventListener('mousedown', () => {
                 if(!isGameOver && !cell.classList.contains('revealed')) resetIcon('fa-surprise'); // "Ooh" face
            });
            cell.addEventListener('mouseup', () => {
                if(!isGameOver) resetIcon('fa-smile');
            });

            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    // --- Logique du jeu ---

    // Générer les bombes (après le premier clic pour éviter de perdre tout de suite)
    function generateBombs(excludeIndex) {
        // Remplir un tableau avec 'bomb' et 'valid'
        const bombsArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * height - bombAmount).fill('valid');
        const gameArray = emptyArray.concat(bombsArray);
        
        // Mélanger
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

        // Si la case exclue (premier clic) est une bombe, on échange
        if (shuffledArray[excludeIndex] === 'bomb') {
            // Trouver une case vide et échanger
            const safeIndex = shuffledArray.indexOf('valid');
            shuffledArray[safeIndex] = 'bomb';
            shuffledArray[excludeIndex] = 'valid';
        }

        // Assigner les classes et données
        for (let i = 0; i < width * height; i++) {
            cells[i].classList.add(shuffledArray[i]);
            
            // Calculer les nombres pour les cases valides
            if (shuffledArray[i] === 'valid') {
                let total = 0;
                const isLeftEdge = (i % width === 0);
                const isRightEdge = (i % width === width - 1);

                // Vérifier les 8 voisins
                if (i > 0 && !isLeftEdge && shuffledArray[i - 1] === 'bomb') total++; // Ouest
                if (i > 9 && !isRightEdge && shuffledArray[i + 1 - width] === 'bomb') total++; // Nord-Est
                if (i > 10 && shuffledArray[i - width] === 'bomb') total++; // Nord
                if (i > 11 && !isLeftEdge && shuffledArray[i - 1 - width] === 'bomb') total++; // Nord-Ouest
                if (i < 80 && !isRightEdge && shuffledArray[i + 1] === 'bomb') total++; // Est
                if (i < 72 && !isLeftEdge && shuffledArray[i - 1 + width] === 'bomb') total++; // Sud-Ouest
                if (i < 71 && !isRightEdge && shuffledArray[i + 1 + width] === 'bomb') total++; // Sud-Est
                if (i < 70 && shuffledArray[i + width] === 'bomb') total++; // Sud

                cells[i].setAttribute('data', total);
            }
        }

        // Démarrer le chrono
        timerId = setInterval(() => {
            seconds++;
            timerDisplay.innerText = formatNumber(seconds);
        }, 1000);
    }

    function addFlag(cell) {
        if (isGameOver) return;
        if (!cell.classList.contains('revealed') && (flags < bombAmount || cell.classList.contains('flag'))) {
            if (!cell.classList.contains('flag')) {
                cell.classList.add('flag');
                cell.innerHTML = '<i class="fas fa-flag" style="font-size:12px; color:red;"></i>';
                flags++;
                mineCountDisplay.innerText = formatNumber(bombAmount - flags);
                checkForWin();
            } else {
                cell.classList.remove('flag');
                cell.innerHTML = '';
                flags--;
                mineCountDisplay.innerText = formatNumber(bombAmount - flags);
            }
        }
    }

    function click(cell) {
        let currentId = parseInt(cell.id);

        if (isGameOver) return;
        if (cell.classList.contains('revealed') || cell.classList.contains('flag')) return;

        if (firstClick) {
            firstClick = false;
            generateBombs(currentId);
        }

        if (cell.classList.contains('bomb')) {
            gameOver(cell);
        } else {
            let total = cell.getAttribute('data');
            if (total != 0) {
                cell.classList.add('revealed');
                cell.innerText = total;
                cell.setAttribute('data-num', total);
                return;
            }
            checkSquare(currentId); // Inondation (flood fill)
        }
        cell.classList.add('revealed');
        checkForWin();
    }

    // Algorithme de remplissage (Flood Fill) pour révéler les zones vides
    function checkSquare(currentId) {
        const isLeftEdge = (currentId % width === 0);
        const isRightEdge = (currentId % width === width - 1);

        setTimeout(() => {
            // Liste des voisins à vérifier
            // Ouest
            if (currentId > 0 && !isLeftEdge) {
                const newId = cells[currentId - 1].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Nord-Est
            if (currentId > 9 && !isRightEdge) {
                const newId = cells[currentId + 1 - width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Nord
            if (currentId > 10) {
                const newId = cells[currentId - width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Nord-Ouest
            if (currentId > 11 && !isLeftEdge) {
                const newId = cells[currentId - 1 - width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Est
            if (currentId < 80 && !isRightEdge) {
                const newId = cells[currentId + 1].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Sud-Ouest
            if (currentId < 72 && !isLeftEdge) {
                const newId = cells[currentId - 1 + width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Sud-Est
            if (currentId < 71 && !isRightEdge) {
                const newId = cells[currentId + 1 + width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
            // Sud
            if (currentId < 70) {
                const newId = cells[currentId + width].id;
                const newCell = document.getElementById(newId);
                click(newCell);
            }
        }, 10);
    }

    function gameOver(cell) {
        isGameOver = true;
        clearInterval(timerId);
        resetIcon('fa-dizzy'); // Visage mort

        // Révéler toutes les bombes
        cells.forEach(c => {
            if (c.classList.contains('bomb')) {
                c.innerHTML = '<i class="fas fa-bomb" style="font-size:12px;"></i>';
                c.classList.remove('mine'); // Enlever style par défaut si besoin
                c.classList.add('revealed');
                if (c === cell) {
                    c.classList.add('mine-hit'); // Fond rouge pour celle qu'on a cliquée
                }
            }
        });
    }

    function checkForWin() {
        let matches = 0;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].classList.contains('flag') && cells[i].classList.contains('bomb')) {
                matches++;
            }
        }
        // Gagner si toutes les bombes sont trouvées OU si toutes les cases "safe" sont révélées
        // Simplification : Compter les cases révélées
        let revealedCount = 0;
        cells.forEach(c => {
            if (c.classList.contains('revealed') && !c.classList.contains('bomb')) revealedCount++;
        });

        if (revealedCount === (width * height - bombAmount)) {
            isGameOver = true;
            clearInterval(timerId);
            resetIcon('fa-sunglasses'); // Visage cool
            mineCountDisplay.innerText = '000';
        }
    }

    // --- Utilitaires ---
    function formatNumber(num) {
        if (num < 0) return '000'; // Ne pas gérer le négatif pour l'affichage simple
        return num.toString().padStart(3, '0');
    }

    function resetIcon(iconClass) {
        smileyIcon.className = `fas ${iconClass}`;
        // Style spécifique pour garder le rond jaune
        smileyIcon.style.color = '#eebb00';
        smileyIcon.style.background = 'black';
        smileyIcon.style.borderRadius = '50%';
    }

    resetBtn.addEventListener('click', createBoard);

    // Lancer le jeu au chargement
    createBoard();
});