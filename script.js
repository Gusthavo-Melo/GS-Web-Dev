let slideIndex = 1;
let slideTimer = null;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
// Funções para controle do slideshow
function showSlides(n) {
    if (!slides.length) return;
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.opacity = 0;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].classList.add("active");
}
// Controle dos slides com botões
function plusSlides(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
    autoSlides();
}
// Controle dos slides com pontos
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    autoSlides();
}
// Controle automático dos slides
function autoSlides() {
    slideTimer = setTimeout(() => {
        showSlides(++slideIndex);
        autoSlides();
    }, 3000);
}

// Inicialização do slideshow
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    autoSlides();
});

// Troca de fundo
const fundos = ["#f4f4f4", "#e3f2fd", "#fff3e0"];
let atual = 0;
function trocarFundo() {
    atual = (atual + 1) % fundos.length;
    document.body.style.backgroundColor = fundos[atual];
}

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    // Coleta os valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const feedback = document.getElementById("form-msg");
    // Validação dos campos
    if (!nome || !email || !mensagem) {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";
    this.reset();
});

// Quiz de perguntas e respostas
document.getElementById("quiz_form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Respostas corretas
    const respostas = { q1: "b", q2: "a", q3: "c", q4: "c", q5: "d", q6: "c", q7: "b", q8: "a", q9: "c", q10: "a" };
    let acertos = 0;
    // Verifica as respostas do usuário
    for (let i in respostas) {
        const respostaUsuario = document.querySelector(`input[name="${i}"]:checked`);
        if (respostaUsuario && respostaUsuario.value === respostas[i]) {
            acertos++;
        }
    }
    document.getElementById("resultado").innerText = `Você acertou ${acertos} perguntas!`;
});