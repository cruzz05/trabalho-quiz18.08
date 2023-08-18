const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["a) São Paulo", "b) Rio de Janeiro", "c) Brasília", "d) Belo Horizonte"],
        answer: "c"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["a) Terra", "b) Júpiter", "c) Saturno", "d) Marte"],
        answer: "b"
    },
    {
        question: "Quem escreveu a obra 'Dom Quixote'?",
        options: ["a) Machado de Assis", "b) Jorge Luis Borges", "c) Gabriel García Márquez", "d) Miguel de Cervantes"],
        answer: "d"
    },
    {
        question: "Qual é o número atômico do hidrogênio?",
        options: ["a) 1", "b) 10", "c) 7", "d) 2"],
        answer: "a"
    }
];

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const submitButton = document.getElementById("submit-answer");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionText.textContent = `Pergunta ${index + 1}: ${currentQuestion.question}`;
    optionsList.innerHTML = "";
    
    currentQuestion.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.className = "option";
        li.textContent = option;
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        message.textContent = "Resposta correta!";
    } else {
        message.textContent = "Resposta incorreta. Tente novamente.";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        questionText.textContent = "Quiz concluído!";
        optionsList.innerHTML = "";
        submitButton.disabled = true;
        scoreDisplay.textContent = `Pontuação: ${score}`;
    }
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[type='radio']:checked");
    if (selectedOption) {
        checkAnswer(selectedOption.value);
    } else {
        message.textContent = "Selecione uma opção antes de responder.";
    }
});