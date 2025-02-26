const searchBtn = document.getElementById("searchBtn");
const quizBtn = document.getElementById("quizBtn");
const resourceSection = document.getElementById("resourceSection");
const quizSection = document.getElementById("quizSection");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("nextQuestion");

// Danh sách 20 câu hỏi khó
const questions = [
    { question: "Giải phương trình: 2x + 3 = 7", answer: "2" },
    { question: "Tính giá trị của 3^3", answer: "27" },
    { question: "Chu vi của hình vuông có cạnh 5 là bao nhiêu?", answer: "20" },
    { question: "Số nguyên tố nhỏ nhất là số nào?", answer: "2" },
    { question: "Giá trị của 5! (5 giai thừa) là bao nhiêu?", answer: "120" },
    { question: "Phương trình x^2 - 4 = 0 có nghiệm là gì?", answer: "2,-2" },
    { question: "Tìm x: 4x - 8 = 0", answer: "2" },
    { question: "Tổng các góc trong của tam giác bằng bao nhiêu độ?", answer: "180" },
    { question: "Diện tích hình chữ nhật có chiều dài 6 và chiều rộng 3 là bao nhiêu?", answer: "18" },
    { question: "Căn bậc hai của 64 là bao nhiêu?", answer: "8" },
    { question: "Số Pi (π) xấp xỉ bằng bao nhiêu?", answer: "3.14" },
    { question: "Một giờ có bao nhiêu phút?", answer: "60" },
    { question: "Hình nào có đúng một trục đối xứng: tam giác, hình thoi hay hình tròn?", answer: "tam giác" },
    { question: "Số lớn nhất có hai chữ số là bao nhiêu?", answer: "99" },
    { question: "Một ngày có bao nhiêu giây?", answer: "86400" },
    { question: "Tìm x: x^3 = 27", answer: "3" },
    { question: "Một nửa của 1/2 là bao nhiêu?", answer: "1/4" },
    { question: "Có bao nhiêu số nguyên tố nhỏ hơn 10?", answer: "4" },
    { question: "Số chẵn nhỏ nhất là số nào?", answer: "0" },
    { question: "Nếu cạnh hình lập phương là 2, thể tích của nó là bao nhiêu?", answer: "8" }
];

let currentQuestionIndex = 0;

// Xử lý khi nhấn nút tìm kiếm tài liệu
searchBtn.addEventListener("click", () => {
    resourceSection.classList.toggle("hidden");
});

// Xử lý khi nhấn nút bài toán khó
quizBtn.addEventListener("click", () => {
    quizSection.classList.remove("hidden");
    loadQuestion();
});

// Hiển thị câu hỏi tiếp theo
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        answerInput.value = "";
        feedback.textContent = "";
        nextQuestion.classList.add("hidden");
    } else {
        questionText.textContent = "Chúc mừng! Bạn đã hoàn thành 20 câu hỏi.";
        answerInput.style.display = "none";
        submitAnswer.style.display = "none";
        nextQuestion.style.display = "none";
    }
}

// Xử lý khi người dùng nhấn trả lời
submitAnswer.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Chính xác!";
        feedback.style.color = "green";
        nextQuestion.classList.remove("hidden");
    } else {
        feedback.textContent = `❌ Sai rồi! Đáp án đúng là ${correctAnswer}. Hãy suy nghĩ lại cách làm nhé!`;
        feedback.style.color = "red";
        nextQuestion.classList.remove("hidden");
    }
});

// Xử lý khi nhấn nút câu tiếp theo
nextQuestion.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});
