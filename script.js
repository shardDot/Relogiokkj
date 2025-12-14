const latestStatus = document.querySelector("#latest-status");
latestStatus.textContent = `Latest visit: ${localStorage.getItem(
  "latestVisited"
)}`;

function atualizarRelogio() {
  let agora = new Date();

  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  horas = horas < 10 ? `0${horas}:` : horas + ":";
  minutos = minutos < 10 ? `0${minutos}:` : minutos + ":";
  segundos = segundos < 10 ? "0" + segundos : segundos;

  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");

  hoursEl.textContent = horas;
  minutesEl.textContent = minutos;
  secondsEl.textContent = segundos;
  console.log(segundos);
  latestVisited = `${horas}${minutos}${segundos}`;

  localStorage.setItem("latestVisited", latestVisited);
}

setInterval(atualizarRelogio, 1000);
