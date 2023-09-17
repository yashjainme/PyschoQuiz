

// const questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Berlin", "Madrid"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Mars", "Venus", "Jupiter", "Saturn"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "Who wrote the play 'Romeo and Juliet'?",
//         options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
//         correctAnswer: "William Shakespeare"
//     }
//     // Add more questions here
// ];

// let currentQuestion = 0;
// const quizContainer = document.getElementById("quiz-container");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// const userResponses = new Array(questions.length).fill(null);

// function renderQuestion(questionIndex) {
//     const questionData = questions[questionIndex];
//     quizContainer.innerHTML = `
//         <h3>${questionData.question}</h3>
//         <form id="quizForm">
//             <div class="form-check">
//                 <input type="radio" name="answer" value="${questionData.options[0]}" class="form-check-input" ${userResponses[questionIndex] === questionData.options[0] ? 'checked' : ''}>
//                 <label class="form-check-label">${questionData.options[0]}</label>
//             </div>
//             <div class="form-check">
//                 <input type="radio" name="answer" value="${questionData.options[1]}" class="form-check-input" ${userResponses[questionIndex] === questionData.options[1] ? 'checked' : ''}>
//                 <label class="form-check-label">${questionData.options[1]}</label>
//             </div>
//             <div class="form-check">
//                 <input type="radio" name="answer" value="${questionData.options[2]}" class="form-check-input" ${userResponses[questionIndex] === questionData.options[2] ? 'checked' : ''}>
//                 <label class="form-check-label">${questionData.options[2]}</label>
//             </div>
//             <div class="form-check">
//                 <input type="radio" name="answer" value="${questionData.options[3]}" class="form-check-input" ${userResponses[questionIndex] === questionData.options[3] ? 'checked' : ''}>
//                 <label class="form-check-label">${questionData.options[3]}</label>
//             </div>
//         </form>
//     `;

//     if (questionIndex === 0) {
//         prevBtn.disabled = true;
//     } else {
//         prevBtn.disabled = false;
//     }
// }

// function checkAnswer() {
//     const userAnswer = document.querySelector("input[name='answer']:checked");
//     if (userAnswer) {
//         const answerValue = userAnswer.value;
//         userResponses[currentQuestion] = answerValue;
//     }
// }

// prevBtn.addEventListener("click", () => {
//     checkAnswer(); // Save the current answer
//     currentQuestion--;
//     renderQuestion(currentQuestion);
// });

// nextBtn.addEventListener("click", () => {
//     checkAnswer(); // Save the current answer
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         renderQuestion(currentQuestion);
//     } else {
//         // All questions are answered, you can implement submission logic here
//         alert("Quiz completed!");
//     }
// });

// // Initial rendering
// renderQuestion(currentQuestion);



const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    }
    // Add more questions here
];

let currentQuestion = 0;
const quizContainer = document.getElementById("quiz-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const userResponses = new Array(questions.length).fill(null);

function renderQuestion(questionIndex) {
    const questionData = questions[questionIndex];
    quizContainer.innerHTML = `
        <h2>${questionData.question}</h1>
        <form id="quizForm">
            <div class="form-check">
                <input type="radio" id="option0" name="answer" value="${questionData.options[0]}" class="custom-radio form-check-input" ${userResponses[questionIndex] === questionData.options[0] ? 'checked' : ''}>
                <label for="option0" class="form-check-label">${questionData.options[0]}</label>
            </div>
            <div class="form-check">
                <input type="radio" id="option1" name="answer" value="${questionData.options[1]}" class="custom-radio form-check-input" ${userResponses[questionIndex] === questionData.options[1] ? 'checked' : ''}>
                <label for="option1" class="form-check-label">${questionData.options[1]}</label>
            </div>
            <div class="form-check">
                <input type="radio" id="option2" name="answer" value="${questionData.options[2]}" class="custom-radio form-check-input" ${userResponses[questionIndex] === questionData.options[2] ? 'checked' : ''}>
                <label for="option2" class="form-check-label">${questionData.options[2]}</label>
            </div>
            <div class="form-check">
                <input type="radio" id="option3" name="answer" value="${questionData.options[3]}" class="custom-radio form-check-input" ${userResponses[questionIndex] === questionData.options[3] ? 'checked' : ''}>
                <label for="option3" class="form-check-label">${questionData.options[3]}</label>
            </div>
        </form>
    `;

    if (questionIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}

function checkAnswer() {
    const userAnswer = document.querySelector("input[name='answer']:checked");
    if (userAnswer) {
        const answerValue = userAnswer.value;
        userResponses[currentQuestion] = answerValue;
    }
}

prevBtn.addEventListener("click", () => {
    checkAnswer(); // Save the current answer
    currentQuestion--;
    renderQuestion(currentQuestion);
});

nextBtn.addEventListener("click", () => {
    checkAnswer(); // Save the current answer
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion(currentQuestion);
    } else {
        // All questions are answered, you can implement submission logic here
        alert("Quiz completed!");
    }
});

// Initial rendering
renderQuestion(currentQuestion);

