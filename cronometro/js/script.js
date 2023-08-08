const minutosEl = document.querySelector ("#minutos")
const segundosEl = document.querySelector ("#segundos")
const milisegundosEl = document.querySelector ("#milisegundos")
const inicioBtn = document.querySelector ("#inicioBtn")
const pausaBtn = document.querySelector ("#pausaBtn")
const continuaBtn = document.querySelector ("#continuaBtn")
const resetBtn = document.querySelector ("#resetBtn")

let interval;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPausa = false;

inicioBtn.addEventListener("click", startTimer);
pausaBtn.addEventListener("click", pauseTimer);
continuaBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if(!isPausa) {
            milisegundos += 10

            if(milisegundos === 1000) {
                segundos++;
                milisegundos = 0;
            }

            if(segundos === 60) {
                minutos++;
                segundos = 0;
            }

            minutosEl.textContent = formatTime(minutos);
            segundosEl.textContent = formatTime(segundos);
            milisegundosEl.textContent = formatMilesegundos(milisegundos);
        }
    }, 10);

    inicioBtn.style.display = "none";
    pausaBtn.style.display = "block";
    
}

function pauseTimer() {
    isPausa = true;
    inicioBtn.style.display = "none";
    continuaBtn.style.display = "block";
}

function resumeTimer() {
    isPausa = false
    inicioBtn.style.display = "block";
    continuaBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    milisegundosEl.textContent = "000"

    inicioBtn.style.display = "block";
    pausaBtn.style.display = "none";
    continuaBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilesegundos(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}