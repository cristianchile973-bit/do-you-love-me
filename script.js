const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const brokenHeartContainer = document.querySelector(".broken-heart-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

function enviarRespuesta(opcion) {
  fetch('/guardar-respuesta', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ opcion })
  })
  .then(res => res.text())
  .then(data => console.log("Servidor:", data))
  .catch(err => console.error("Error:", err));
}

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  enviarRespuesta("Sí");

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});

noBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  brokenHeartContainer.style.display = "block";

  enviarRespuesta("No");
});
