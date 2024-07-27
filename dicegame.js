var score1 = 0,
  score2 = 0,
  score,
  i = 1;

function rollTheDice() {
  score = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").src = "assets/dice" + score + ".png";
  if (i % 2 != 0) {
    score1 += score;
    document.getElementById("score1").innerHTML = score1;
    btn();
  } else {
    score2 += score;
    document.getElementById("score2").innerHTML = score2;
    btn();
  }
}

function btn() {
  if (i % 2 != 0) {
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = false;
    if (score1 >= 30) {
      document.getElementById("chance").innerHTML =
        "Player-1 has won the game!";
      disableButtons();
      showConfetti();
      setTimeout(reset, 5000);
    } else {
      document.getElementById("chance").innerHTML = "Player-2 to Play";
    }
    i++;
  } else {
    document.getElementById("btn-1").disabled = false;
    document.getElementById("btn-2").disabled = true;
    if (score2 >= 30) {
      document.getElementById("chance").innerHTML =
        "Player-2 has won the game!";
      disableButtons();
      showConfetti();
      setTimeout(reset, 5000);
    } else {
      document.getElementById("chance").innerHTML = "Player-1 to Play";
    }
    i++;
  }
}

function disableButtons() {
  document.getElementById("btn-1").disabled = true;
  document.getElementById("btn-2").disabled = true;
}

function reset() {
  score1 = 0;
  score2 = 0;
  i = 1;
  document.getElementById("score1").innerHTML = score1;
  document.getElementById("score2").innerHTML = score2;
  document.getElementById("chance").innerHTML = "Player-1 to Play";
  document.getElementById("btn-1").disabled = false;
  document.getElementById("btn-2").disabled = true;

  clearConfetti();
}

function showConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";

  const createConfetti = () => {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 100 + "%";
    confettiContainer.appendChild(confetti);

    // Remove confetti after 5 seconds
    setTimeout(() => {
      confetti.remove();
    }, 500);
  };

  for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 100);
  }
}

function clearConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";
}
