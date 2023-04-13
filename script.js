const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Paris",
            c: "Madrid"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Saturn"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the author of The Hitchhiker's Guide to the Galaxy?",
        answers: {
            a: "J.K. Rowling",
            b: "Douglas Adams",
            c: "Terry Pratchett"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Italy?",
        answers: {
            a: "Rome",
            b: "Venice",
            c: "Milan"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Michelangelo",
            b: "Leonardo da Vinci",
            c: "Vincent van Gogh"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the currency of Japan?",
        answers: {
            a: "Dollar",
            b: "Euro",
            c: "Yen"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the highest mountain in the world?",
        answers: {
            a: "Mount Everest",
            b: "K2",
            c: "Makalu"
        },
        correctAnswer: "a"
    },
    {
        question: "Who directed the movie Jaws?",
        answers: {
            a: "Steven Spielberg",
            b: "George Lucas",
            c: "Martin Scorsese"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the smallest country in the world?",
        answers: {
            a: "Monaco",
            b: "San Marino",
            c: "Vatican City"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the largest ocean in the world?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Pacific Ocean"
        },
        correctAnswer: "c"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter}: ${currentQuestion.answers[letter]}
			</label>`
            );
        }

        output.push(
            `<div class="question">
			<h2>${currentQuestion.question}</h2>
			${answers.join("")}
		</div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".question");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "green";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.createElement("div");
const submitButton = document.getElementById("submit");

buildQuiz();

submitButton.addEventListener("click", showResults);

quizContainer.appendChild(resultsContainer);