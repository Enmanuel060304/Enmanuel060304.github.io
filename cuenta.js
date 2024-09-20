document.addEventListener("DOMContentLoaded", function() {
    // Fecha del cumpleaños (aquí pones la fecha de su cumpleaños)
    const birthday = new Date("2024-09-20T00:00:00").getTime();

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = birthday - now;

        // Cálculos para días, horas, minutos y segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Mostrar el tiempo en la página
        document.getElementById("time").innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

        // Cuando se llegue al día del cumpleaños
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
        }
    }, 1000);
});
