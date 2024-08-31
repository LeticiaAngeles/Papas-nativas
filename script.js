// Variables globales
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progress = document.getElementById('progress');
const totalSlides = slides.length;
let score = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    updateProgress(index);
}

// Función para actualizar la barra de progreso
function updateProgress(index) {
    const percentage = ((index + 1) / totalSlides) * 100;
    progress.style.width = `${percentage}%`;
}

// Función para iniciar la lección
function startLesson() {
    const userName = document.getElementById('user-name').value;
    if (userName.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    showSlide(1); // Muestra la primera diapositiva con contenido educativo
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

// Función para reiniciar la lección
function restartLesson() {
    currentSlide = 0;
    score = 0;
    showSlide(currentSlide);
    document.getElementById('final-score').innerText = '';
    progress.style.width = '0%';
}

// Función para mostrar el popup
function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').style.display = 'flex';
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Función para verificar la respuesta de la Pregunta 1
function checkQuestion1() {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'b') {
        showPopup('¡Correcto!');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: b) tienen diferentes colores, formas y sabores que las hacen especiales.');
    }
    currentSlide++; // Avanza al slide de datos interesantes
    showSlide(currentSlide);
}

// Función para verificar la respuesta de la Pregunta 2
function checkQuestion2() {
    const answer = document.querySelector('input[name="q2"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'b') {
        showPopup('¡Correcto!');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: b) tienen muchas vitaminas y minerales que ayudan a mantenernos saludables.');
    }
    currentSlide++; // Avanza al slide de datos interesantes
    showSlide(currentSlide);
}

// Función para verificar la respuesta de la Pregunta 3
function checkQuestion3() {
    const answer = document.querySelector('input[name="q3"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'c') {
        showPopup('¡Correcto');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: c) miles de años, siendo parte de nuestra historia y cultura.');
    }
    currentSlide++; // Avanza al slide de datos interesantes
    showSlide(currentSlide);
}

// Función para verificar la respuesta de la Pregunta 4
function checkQuestion4() {
    const answer = document.querySelector('input[name="q4"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'b') {
        showPopup('¡Correcto!');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: b) apoyando a los agricultores locales y conservando nuestra herencia cultural.');
    }
    currentSlide++; // Avanza al slide de datos interesantes
    showSlide(currentSlide);
}

// Función para verificar la respuesta de la Pregunta 5
function checkQuestion5() {
    const answer = document.querySelector('input[name="q5"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'b') {
        showPopup('¡Correcto!');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: b) son una parte importante de la identidad y tradiciones peruanas.');
    }
    currentSlide++; // Avanza al slide de datos interesantes
    showSlide(currentSlide);
}
// Función para mostrar el puntaje final
function showFinalScore() {
    document.getElementById('final-score').innerText = `Tu puntaje final es ${score} de ${totalQuestions}.`;
    // Puedes ocultar el botón de avanzar si ya no hay más preguntas
    document.getElementById('next-button').style.display = 'none'; 
}

// Función para verificar la respuesta de la Pregunta 5
function checkQuestion5() {
    const answer = document.querySelector('input[name="q5"]:checked');
    if (!answer) {
        showPopup('Por favor, selecciona una respuesta.');
        return;
    }
    if (answer.value === 'b') {
        showPopup('¡Correcto!');
        score++;
    } else {
        showPopup('Incorrecto. La respuesta correcta es: b) son una parte importante de la identidad y tradiciones peruanas.');
    }
    currentSlide++; // Avanza al slide de resultados finales
    showSlide(currentSlide);
    showFinalScore(); // Muestra el puntaje final
}

// Función para reiniciar la lección
function restartLesson() {
    currentSlide = 0;
    score = 0;
    showSlide(currentSlide);
    document.getElementById('final-score').innerText = ''; // Borra el puntaje final
    progress.style.width = '0%';
    document.getElementById('next-button').style.display = 'inline'; // Muestra el botón de avanzar
}


// Función para enviar las respuestas y mostrar el puntaje final
const totalQuestions = 5; // Número exacto de preguntas
document.getElementById('final-score').innerText = `Tu puntaje final es ${score} de ${totalQuestions}.`;
