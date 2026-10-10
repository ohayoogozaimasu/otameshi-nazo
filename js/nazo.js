function setupQuestion(correctAnswer, nextPage) {
    const answerInput = document.getElementById("answer");
    const answerButton = document.getElementById("answerButton");
    const message = document.getElementById("message");

    answerButton.addEventListener("click", function () {
        const answer = answerInput.value;

        if (answer === correctAnswer) {
            window.location.href = nextPage;
        } else {
            message.textContent = "違うよ";
        }
    });
}