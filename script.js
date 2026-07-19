const quizForm = document.getElementById("quiz-form");

if (quizForm) {
  const result = document.getElementById("quiz-result");
  const answers = {
    question1: "html",
    question2: "flexbox",
    question3: "interaction"
  };

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    let unanswered = false;

    Object.keys(answers).forEach(function (question) {
      const selectedAnswer = quizForm.querySelector(
        'input[name="' + question + '"]:checked'
      );

      if (!selectedAnswer) {
        unanswered = true;
      } else if (selectedAnswer.value === answers[question]) {
        score += 1;
      }
    });

    if (unanswered) {
      result.textContent = "Please answer all three questions first.";
      result.className = "try-again-result";
      return;
    }

    result.textContent = "You scored " + score + " out of 3.";
    result.className = score === 3 ? "correct-result" : "try-again-result";
  });

  quizForm.addEventListener("reset", function () {
    result.textContent = "";
    result.className = "";
  });
}
