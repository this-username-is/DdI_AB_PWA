// ===== Animal Card Data =====
const animals = [
    {
        id: 1, name: 'Maus', type: 'light',
        weight: 0.025, weightDisplay: '25 g',
        size: 8, sizeDisplay: '8 cm',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="20" cy="30" r="18" fill="#9CA3AF" />
            <circle cx="80" cy="30" r="18" fill="#9CA3AF" />
            <circle cx="20" cy="30" r="10" fill="#FCA5A5" />
            <circle cx="80" cy="30" r="10" fill="#FCA5A5" />
            <path d="M50 85 C20 85 20 40 50 40 C80 40 80 85 50 85 Z" fill="#D1D5DB" />
            <circle cx="40" cy="55" r="4" fill="#000" />
            <circle cx="60" cy="55" r="4" fill="#000" />
            <circle cx="50" cy="70" r="5" fill="#FCA5A5" />
            <path d="M30 70 L10 65 M70 70 L90 65" stroke="#000" stroke-width="2" />
        </svg>`
    },
    {
        id: 2, name: 'Hund', type: 'light',
        weight: 25, weightDisplay: '25 kg',
        size: 80, sizeDisplay: '80 cm',
        svg: `<svg viewBox="0 0 100 100">
            <rect x="30" y="30" width="40" height="50" rx="15" fill="#D97706" />
            <path d="M30 40 C10 40 10 70 30 50 Z" fill="#92400E" />
            <path d="M70 40 C90 40 90 70 70 50 Z" fill="#92400E" />
            <circle cx="43" cy="50" r="4" fill="#000" />
            <circle cx="57" cy="50" r="4" fill="#000" />
            <ellipse cx="50" cy="65" rx="12" ry="8" fill="#FFF" />
            <circle cx="50" cy="62" r="5" fill="#000" />
        </svg>`
    },
    {
        id: 3, name: 'Igel', type: 'light',
        weight: 1.2, weightDisplay: '1,2 kg',
        size: 25, sizeDisplay: '25 cm',
        svg: `<svg viewBox="0 0 100 100">
            <path d="M10 70 L20 30 L30 60 L40 20 L50 60 L60 20 L70 60 L80 30 L90 70 Z" fill="#78350F" />
            <ellipse cx="50" cy="70" rx="40" ry="25" fill="#B45309" />
            <path d="M60 60 Q90 65 95 75 Q90 85 60 80 Z" fill="#FDE68A" />
            <circle cx="95" cy="75" r="3" fill="#000" />
            <circle cx="75" cy="70" r="3" fill="#000" />
        </svg>`
    },
    {
        id: 4, name: 'Löwe', type: 'medium',
        weight: 190, weightDisplay: '190 kg',
        size: 120, sizeDisplay: '120 cm',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#F59E0B" />
            <circle cx="50" cy="50" r="28" fill="#FCD34D" />
            <circle cx="40" cy="45" r="3" fill="#000" />
            <circle cx="60" cy="45" r="3" fill="#000" />
            <path d="M50 55 L45 65 L55 65 Z" fill="#92400E" />
            <path d="M35 70 Q50 80 65 70" stroke="#000" fill="none" />
        </svg>`
    },
    {
        id: 5, name: 'Katze', type: 'medium',
        weight: 4.5, weightDisplay: '4,5 kg',
        size: 45, sizeDisplay: '45 cm',
        svg: `<svg viewBox="0 0 100 100">
            <path d="M20 30 L30 70 L10 70 Z" fill="#F97316" />
            <path d="M80 30 L70 70 L90 70 Z" fill="#F97316" />
            <circle cx="50" cy="60" r="35" fill="#FDBA74" />
            <path d="M25 35 L35 50 L45 35 Z" fill="#F97316" />
            <path d="M75 35 L65 50 L55 35 Z" fill="#F97316" />
            <circle cx="40" cy="55" r="4" fill="#000" />
            <circle cx="60" cy="55" r="4" fill="#000" />
            <path d="M50 65 L45 70 L55 70 Z" fill="#FCA5A5" />
            <path d="M20 65 L40 65 M60 65 L80 65" stroke="#000" stroke-width="2" />
        </svg>`
    },
    {
        id: 6, name: 'Schaf', type: 'medium',
        weight: 80, weightDisplay: '80 kg',
        size: 110, sizeDisplay: '110 cm',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="3" />
            <circle cx="30" cy="30" r="10" fill="#F3F4F6" />
            <circle cx="70" cy="30" r="10" fill="#F3F4F6" />
            <circle cx="20" cy="50" r="10" fill="#F3F4F6" />
            <circle cx="80" cy="50" r="10" fill="#F3F4F6" />
            <circle cx="30" cy="70" r="10" fill="#F3F4F6" />
            <circle cx="70" cy="70" r="10" fill="#F3F4F6" />
            <rect x="40" y="40" width="20" height="30" rx="10" fill="#000" />
            <circle cx="45" cy="50" r="2" fill="#FFF" />
            <circle cx="55" cy="50" r="2" fill="#FFF" />
        </svg>`
    },
    {
        id: 7, name: 'Elefant', type: 'heavy',
        weight: 5000, weightDisplay: '5.000 kg',
        size: 320, sizeDisplay: '320 cm',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="#9CA3AF" />
            <path d="M20 30 C5 30 5 70 20 70 Z" fill="#9CA3AF" />
            <path d="M80 30 C95 30 95 70 80 70 Z" fill="#9CA3AF" />
            <path d="M45 60 Q50 90 60 85" stroke="#9CA3AF" stroke-width="8" fill="none" stroke-linecap="round"/>
            <circle cx="40" cy="45" r="3" fill="#000" />
            <circle cx="60" cy="45" r="3" fill="#000" />
        </svg>`
    },
    {
        id: 8, name: 'Pferd', type: 'heavy',
        weight: 500, weightDisplay: '500 kg',
        size: 170, sizeDisplay: '170 cm',
        svg: `<svg viewBox="0 0 100 100">
            <path d="M60 20 L55 10 L45 15 Z" fill="#78350F" />
            <path d="M60 20 Q70 40 70 60 L65 90 L35 80 L40 50 L35 30 Z" fill="#92400E" />
            <path d="M70 20 L70 80" stroke="#5C2B0B" stroke-width="8" stroke-linecap="round" />
            <circle cx="50" cy="40" r="4" fill="#000" />
            <circle cx="40" cy="75" r="3" fill="#000" />
        </svg>`
    },
    {
        id: 9, name: 'Kuh', type: 'heavy',
        weight: 720, weightDisplay: '720 kg',
        size: 150, sizeDisplay: '150 cm',
        svg: `<svg viewBox="0 0 100 100">
            <path d="M25 25 L35 40 L25 50 Z" fill="#D4D4D8" />
            <path d="M75 25 L65 40 L75 50 Z" fill="#D4D4D8" />
            <rect x="30" y="30" width="40" height="50" rx="10" fill="#FFF" stroke="#000" stroke-width="2"/>
            <circle cx="40" cy="45" r="5" fill="#000" />
            <circle cx="60" cy="70" r="7" fill="#000" />
            <rect x="35" y="65" width="30" height="15" rx="5" fill="#FCA5A5" />
            <circle cx="45" cy="72" r="2" fill="#000" />
            <circle cx="55" cy="72" r="2" fill="#000" />
            <circle cx="40" cy="45" r="3" fill="#000" />
            <circle cx="60" cy="45" r="3" fill="#000" />
        </svg>`
    }
];

// ===== App State =====
let state = {
    algorithm: 'bubble',
    attribute: 'weight',
    cardCount: 6,
    cards: [],
    isRunning: false,
    comparisons: 0,
    swaps: 0,
    startTime: null,
    timerInterval: null,
    currentStep: null,
    bubbleState: { i: 0, j: 0 },
    insertionState: { i: 1, j: 0, key: null },
    selectedCard: null,
    draggedIndex: null
};

// ===== DOM Elements =====
const elements = {
    algorithm: document.getElementById('algorithm'),
    attribute: document.getElementById('attribute'),
    cardCount: document.getElementById('cardCount'),
    startBtn: document.getElementById('startBtn'),
    resetBtn: document.getElementById('resetBtn'),
    instructions: document.getElementById('instructions'),
    cardsContainer: document.getElementById('cardsContainer'),
    comparisons: document.getElementById('comparisons'),
    swaps: document.getElementById('swaps'),
    pass: document.getElementById('pass'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    successModal: document.getElementById('successModal'),
    closeModal: document.getElementById('closeModal'),
    finalTime: document.getElementById('finalTime'),
    finalComparisons: document.getElementById('finalComparisons'),
    finalSwaps: document.getElementById('finalSwaps')
};

// ===== Initialize =====
function init() {
    setupEventListeners();
    renderInitialState();
}

function setupEventListeners() {
    elements.algorithm.addEventListener('change', (e) => {
        state.algorithm = e.target.value;
        if (!state.isRunning) renderInitialState();
    });

    elements.attribute.addEventListener('change', (e) => {
        state.attribute = e.target.value;
        if (!state.isRunning) renderInitialState();
    });

    elements.cardCount.addEventListener('change', (e) => {
        state.cardCount = parseInt(e.target.value);
        if (!state.isRunning) renderInitialState();
    });

    elements.startBtn.addEventListener('click', startExercise);
    elements.resetBtn.addEventListener('click', resetExercise);
    elements.closeModal.addEventListener('click', () => {
        elements.successModal.classList.add('hidden');
        resetExercise();
    });
}

function renderInitialState() {
    // Select random subset of animals
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    state.cards = shuffled.slice(0, state.cardCount);
    renderCards();
    updateInstructions('Wähle einen Algorithmus und klicke <strong>Start</strong>, um die Übung zu beginnen.');
}

// ===== Card Rendering =====
function renderCards() {
    elements.cardsContainer.innerHTML = '';

    state.cards.forEach((card, index) => {
        const cardEl = createCardElement(card, index);
        elements.cardsContainer.appendChild(cardEl);
    });
}

function createCardElement(card, index) {
    const div = document.createElement('div');
    div.className = `animal-card type-${card.type}`;
    div.dataset.index = index;
    div.dataset.id = card.id;

    div.innerHTML = `
        <div class="card-header">
            <span class="card-number">${card.id}</span>
            <span class="card-title">${card.name}</span>
        </div>
        <div class="card-image">
            ${card.svg}
        </div>
        <div class="card-stats">
            <div class="stat-row">
                <span class="stat-label">Gewicht:</span>
                <span>${card.weightDisplay}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Größe:</span>
                <span>${card.sizeDisplay}</span>
            </div>
        </div>
    `;

    return div;
}

// ===== Exercise Control =====
function startExercise() {
    if (state.isRunning) return;

    // Shuffle cards
    state.cards = [...state.cards].sort(() => Math.random() - 0.5);

    // Reset state
    state.isRunning = true;
    state.comparisons = 0;
    state.swaps = 0;
    state.bubbleState = { i: 0, j: 0 };
    state.insertionState = { i: 1, j: 0, key: null };
    state.selectedCard = null;

    // Start Timer
    state.startTime = Date.now();
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(updateTimer, 1000);

    elements.startBtn.disabled = true;
    updateStats();
    renderCards();
    setupInteraction();
    nextStep();
}

function resetExercise() {
    state.isRunning = false;
    state.selectedCard = null;

    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }

    elements.startBtn.disabled = false;
    elements.instructions.className = 'instructions';
    renderInitialState();
    updateStats();
    elements.progressBar.style.width = '0%';
    elements.pass.textContent = '-';
    elements.timer.textContent = '00:00';
}

function updateStats() {
    elements.comparisons.textContent = state.comparisons;
    elements.swaps.textContent = state.swaps;
}

function updateInstructions(text, type = '') {
    elements.instructions.innerHTML = `<p>${text}</p>`;
    elements.instructions.className = 'instructions' + (type ? ` ${type}` : '');
}

// ===== Interaction Setup =====
function setupInteraction() {
    const cards = document.querySelectorAll('.animal-card');

    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);

        // Touch events
        card.addEventListener('touchstart', handleTouchStart, { passive: true });
        card.addEventListener('touchmove', handleTouchMove, { passive: false });
        card.addEventListener('touchend', handleTouchEnd);
    });
}

function handleCardClick(e) {
    if (!state.isRunning) return;

    const clickedIndex = parseInt(e.currentTarget.dataset.index);

    if (state.algorithm === 'bubble') {
        handleBubbleClick(clickedIndex);
    } else {
        handleInsertionClick(clickedIndex);
    }
}

// ===== Bubble Sort Logic =====
function handleBubbleClick(clickedIndex) {
    const { j } = state.bubbleState;

    // User must click one of the highlighted cards
    if (clickedIndex !== j && clickedIndex !== j + 1) {
        showFeedback('incorrect');
        return;
    }

    if (state.selectedCard === null) {
        state.selectedCard = clickedIndex;
        highlightCard(clickedIndex, 'highlight-active');
    } else {
        // Second click - check if swap is needed
        const card1 = state.cards[j];
        const card2 = state.cards[j + 1];
        const attr = state.attribute;
        const needsSwap = card1[attr] > card2[attr];

        const selectedFirst = state.selectedCard;
        const selectedSecond = clickedIndex;

        // User clicked two different cards = wants to swap
        const userWantsSwap = selectedFirst !== selectedSecond;

        state.comparisons++;
        updateStats();

        if (userWantsSwap === needsSwap) {
            // Correct decision
            showFeedback('correct');
            if (needsSwap) {
                swapCards(j, j + 1);
                state.swaps++;
                updateStats();
            }
            state.selectedCard = null;
            setTimeout(() => advanceBubbleSort(), 500);
        } else {
            // Incorrect decision
            showFeedback('incorrect');
            state.selectedCard = null;
            setTimeout(() => highlightBubbleStep(), 300);
        }
    }
}

function advanceBubbleSort() {
    const n = state.cards.length;
    let { i, j } = state.bubbleState;

    j++;

    if (j >= n - 1 - i) {
        i++;
        j = 0;

        if (i >= n - 1 || isSorted()) {
            completeExercise();
            return;
        }
    }

    state.bubbleState = { i, j };
    elements.pass.textContent = `${i + 1}`;
    elements.progressBar.style.width = `${(i / (n - 1)) * 100}%`;

    nextStep();
}

function highlightBubbleStep() {
    clearHighlights();
    const { j } = state.bubbleState;

    const cards = document.querySelectorAll('.animal-card');
    if (cards[j]) cards[j].classList.add('highlight');
    if (cards[j + 1]) cards[j + 1].classList.add('highlight');

    const card1 = state.cards[j];
    const card2 = state.cards[j + 1];
    const attrLabel = state.attribute === 'weight' ? 'Gewicht' : 'Größe';
    const val1 = state.attribute === 'weight' ? card1.weightDisplay : card1.sizeDisplay;
    const val2 = state.attribute === 'weight' ? card2.weightDisplay : card2.sizeDisplay;

    updateInstructions(
        `Vergleiche <strong>${card1.name}</strong> (${val1}) mit <strong>${card2.name}</strong> (${val2}).<br>` +
        `Klicke beide Karten zum Tauschen, oder dieselbe Karte zweimal um zu bestätigen.`,
        'highlight-swap'
    );
}

// ===== Insertion Sort Logic =====
function handleInsertionClick(clickedIndex) {
    const { i, j } = state.insertionState;

    if (state.selectedCard === null) {
        // First selection should be the current card to insert (at position i)
        if (clickedIndex === i) {
            state.selectedCard = clickedIndex;
            highlightCard(clickedIndex, 'highlight-active');
            updateInstructions(
                `Gut! Jetzt klicke auf die Position, wo <strong>${state.cards[i].name}</strong> eingefügt werden soll.`,
                'highlight-insert'
            );
        } else {
            showFeedback('incorrect');
        }
    } else {
        // Second click - insert position
        const keyCard = state.cards[i];
        const correctPos = findInsertPosition(i);

        state.comparisons++;
        updateStats();

        if (clickedIndex === correctPos || (clickedIndex < i && correctPos === clickedIndex)) {
            showFeedback('correct');

            if (correctPos < i) {
                // Move card to correct position
                const removed = state.cards.splice(i, 1)[0];
                state.cards.splice(correctPos, 0, removed);
                state.swaps += i - correctPos;
                updateStats();
            }

            state.selectedCard = null;
            setTimeout(() => advanceInsertionSort(), 500);
        } else {
            showFeedback('incorrect');
            state.selectedCard = null;
            setTimeout(() => highlightInsertionStep(), 300);
        }
    }
}

function findInsertPosition(currentIndex) {
    const key = state.cards[currentIndex];
    const attr = state.attribute;

    for (let j = 0; j < currentIndex; j++) {
        if (state.cards[j][attr] > key[attr]) {
            return j;
        }
    }
    return currentIndex; // Already in correct position
}

function advanceInsertionSort() {
    let { i } = state.insertionState;
    const n = state.cards.length;

    i++;

    if (i >= n) {
        completeExercise();
        return;
    }

    state.insertionState = { i, j: 0, key: null };
    elements.pass.textContent = `${i}`;
    elements.progressBar.style.width = `${((i - 1) / (n - 1)) * 100}%`;

    renderCards();
    setupInteraction();
    nextStep();
}

function highlightInsertionStep() {
    clearHighlights();
    const { i } = state.insertionState;

    const cards = document.querySelectorAll('.animal-card');

    // Highlight sorted portion
    for (let k = 0; k < i; k++) {
        if (cards[k]) cards[k].classList.add('sorted');
    }

    // Highlight current card to insert
    if (cards[i]) cards[i].classList.add('highlight');

    const card = state.cards[i];
    const attrLabel = state.attribute === 'weight' ? 'Gewicht' : 'Größe';
    const val = state.attribute === 'weight' ? card.weightDisplay : card.sizeDisplay;

    updateInstructions(
        `Wähle <strong>${card.name}</strong> (${val}) und füge sie an die richtige Stelle ein.`,
        'highlight-insert'
    );
}

// ===== Next Step Router =====
function nextStep() {
    if (state.algorithm === 'bubble') {
        highlightBubbleStep();
    } else {
        renderCards();
        setupInteraction();
        highlightInsertionStep();
    }
}

// ===== UI Helpers =====
function highlightCard(index, className) {
    const cards = document.querySelectorAll('.animal-card');
    cards[index]?.classList.add(className);
}

function clearHighlights() {
    document.querySelectorAll('.animal-card').forEach(card => {
        card.classList.remove('highlight', 'highlight-active', 'highlight-compare', 'sorted');
    });
}

function showFeedback(type) {
    const cards = document.querySelectorAll('.animal-card');
    cards.forEach(card => {
        card.classList.remove('correct', 'incorrect');
        if (card.classList.contains('highlight') || card.classList.contains('highlight-active')) {
            card.classList.add(type);
        }
    });

    // Play sound feedback (using Web Audio API for simple beeps)
    playSound(type === 'correct');
}

function swapCards(index1, index2) {
    // Swap in data
    [state.cards[index1], state.cards[index2]] = [state.cards[index2], state.cards[index1]];

    // Animate swap in DOM
    const cards = document.querySelectorAll('.animal-card');
    const card1 = cards[index1];
    const card2 = cards[index2];

    if (card1 && card2) {
        const rect1 = card1.getBoundingClientRect();
        const rect2 = card2.getBoundingClientRect();
        const diff = rect2.left - rect1.left;

        card1.style.transition = 'transform 0.3s ease';
        card2.style.transition = 'transform 0.3s ease';
        card1.style.transform = `translateX(${diff}px)`;
        card2.style.transform = `translateX(${-diff}px)`;

        setTimeout(() => {
            renderCards();
            setupInteraction();
        }, 300);
    }
}

function isSorted() {
    const attr = state.attribute;
    for (let i = 0; i < state.cards.length - 1; i++) {
        if (state.cards[i][attr] > state.cards[i + 1][attr]) {
            return false;
        }
    }
    return true;
}

function completeExercise() {
    state.isRunning = false;
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }

    clearHighlights();

    const finalTimeFormatted = formatTime(Date.now() - state.startTime);
    elements.finalTime.textContent = finalTimeFormatted;
    elements.finalComparisons.textContent = state.comparisons;
    elements.finalSwaps.textContent = state.swaps;
    elements.progressBar.style.width = '100%';

    updateInstructions('🎉 <strong>Glückwunsch!</strong> Du hast alle Karten erfolgreich sortiert!');
    elements.instructions.className = 'instructions';

    setTimeout(() => {
        elements.successModal.classList.remove('hidden');
    }, 500);
}

function updateTimer() {
    if (!state.isRunning) return;
    const elapsed = Date.now() - state.startTime;
    elements.timer.textContent = formatTime(elapsed);
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ===== Sound Feedback =====
let audioContext = null;

function playSound(isCorrect) {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (isCorrect) {
            oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E5
        } else {
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        }

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // Audio not supported
    }
}

// ===== Touch Handling for Mobile =====
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    e.preventDefault();
}

function handleTouchEnd(e) {
    // Treat as click
    handleCardClick(e);
}

// ===== Start App =====
init();
