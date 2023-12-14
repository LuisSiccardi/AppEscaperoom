const numeros = document.querySelectorAll(".numero");
const segmentos = Array.from(numeros).map(numero => numero.querySelectorAll("svg"));
const mapaNumeros = [
  [1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1]
];

function setNumero(i, valor) {
  segmentos[i].forEach((segmento, j) => {
    segmento.children[0].classList.toggle("on", mapaNumeros[valor][j])
  })
}

// Temporizador de cuenta regresiva de 45 minutos
const timerElement = document.getElementById('timer');
let countdown = 30; // 45 minutos en segundos

function updateTimer() {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  setNumero(0, Math.floor(minutes / 10));
  setNumero(1, minutes % 10);
  setNumero(2, Math.floor(seconds / 10));
  setNumero(3, seconds % 10);
}

function startCountdown() {
    const countdownInterval = setInterval(() => {
      countdown--;
      updateTimer();
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'impacto.html';
      }
    }, 1000);
}

// Iniciar el temporizador cuando se carga la página
window.onload = function () {
  updateTimer();
  startCountdown();
};

// Verificación de palabras y desbloqueo del botón
function checkWords() {
  const correctWords = ['1', '2', '3', '4', '5'];
  const enteredWords = Array.from({ length: 5 }, (_, i) => document.getElementById(`word${i + 1}`).value.toLowerCase());

  const allWordsCorrect = enteredWords.every(word => correctWords.includes(word));

  if (allWordsCorrect) {
    document.getElementById('unlockBtn').disabled = true;
    window.location.href = 'lanzamiento.html';
  } else {
    alert('Al menos una palabra es incorrecta. Inténtalo de nuevo.');
  }
}

