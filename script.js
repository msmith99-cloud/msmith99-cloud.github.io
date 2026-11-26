// Yankees Trivia Quiz

const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

// Correct answers
const correctAnswers = {
  q1: "b",
  q2: "d",
  q3: "b",
  q4: "a",
  q5: "c",
  q6: "d",
  q7: "a",
};

// Grade the quiz when the visitor submits it
quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  let unanswered = [];

  for (let question in correctAnswers) {
    const selectedAnswer = quizForm.querySelector(
      `input[name="${question}"]:checked`
    );

    if (!selectedAnswer) {
      unanswered.push(question);
    } else if (selectedAnswer.value === correctAnswers[question]) {
      score++;
    }
  }

  if (unanswered.length > 0) {
    quizResult.textContent =
      "Please answer all seven questions before submitting!";
    return;
  }

  let ranking;

  if (score <=3) {
    ranking = "Rookie";
  } else if (score <=5) {
    ranking ="All-Star";
  } else {
    ranking = "Hall of Famer";
  }

  quizResult.textContent =
    `You scored ${score} out of 7! Your Yankees fan ranking is: ${ranking}!`;
});

// Clear the score when the visitor tries again
quizForm.addEventListener("reset", function() {
  quizResult.textContent = "";
});

// Yankees Fan Favorite Form

const fanForm = document.getElementById("fan-form");

if (fanForm) {
  fanForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for sharing your Yankees fan favorites!");

    fanForm.reset();
  });
}
