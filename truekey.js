const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];
let currentKeyIndex = 0;

const keyElement = document.getElementById('key');
const newGameButton = document.getElementById('new-game');

function updateKey() {
    keyElement.textContent = keys[currentKeyIndex];
}

// Обробник події keydown
document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;
    
    if (pressedKey === keys[currentKeyIndex]) {
        currentKeyIndex++;
        if (currentKeyIndex < keys.length) {
            updateKey();
        } else {
            PNotify.success({
                text: 'Вітаємо! Ви натиснули всі правильні клавіші!',
                delay: 2000
            });
            currentKeyIndex = 0;
            updateKey();
        }
    } else {
        PNotify.error({
            text: `Помилка! Ви натиснули "${pressedKey}", потрібно було "${keys[currentKeyIndex]}"`,
            delay: 2000
        });
    }
});

document.addEventListener('keypress', (event) => {
    event.preventDefault();
});

// Функція для початку нової гри
function startNewGame() {
    currentKeyIndex = 0;
    updateKey();
    PNotify.success({
        text: 'Нова гра розпочалась! Натисніть правильну клавішу.',
        delay: 2000
    });
}

newGameButton.addEventListener('click', startNewGame);

startNewGame();