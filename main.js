let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")

let current = 0
let count = 0
let questions = [
    {
        question: "2+2",
        correct: "4",
        answers: [3, 4, 6, 8, 10],
    },
    {
        question: "5+5",
        correct: "10",
        answers: [6, 8, 10, 15, 12],
    },
    {
        question: "Какой массив объектов обозначен для представления вопросов",
        correct: "question",
        answers: ['question', 'answer', 'result'],
    },
    {
        question: "Какое значение вернёт выражение 2+2",
        correct: "22",
        answers: [4, 22, 'Ошибка', 'undefined'],
    },
    {
        question: "Что делает querySelector()",
        correct: "Находит первый элемент",
        answers: ['Создаёт новый элемент', 'Находит первый элемент', 'Удаляет элемент', 'Изменяет стили элемента'],
    }
]

function startProgram() {
    start.classList.add("close"); 
    main.classList.remove("close");
    result.classList.add("close");
    generate()
}

start.addEventListener("click", startProgram)

function generate() {
    let question = questions[current].question
    main.innerHTML = `<h2 class="title">${question}</h2>`;

    let answers = questions[current].answers
    let block = ""
    for(let i of answers) {
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`;
    }

    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer) {
    correct = questions[current].correct;
    if (correct == answer) {
        count += 1;
    }
    current += 1;
    if (questions.length > current) {
         generate()
    } else {
        stop()
    }     
}

function stop() {
    start.classList.remove("close"); 
    main.classList.add("close");
    result.classList.remove("close");

    result.innerHTML = `Решено ${count} из ${questions.length}`
    current = 0;
    count = 0;
}