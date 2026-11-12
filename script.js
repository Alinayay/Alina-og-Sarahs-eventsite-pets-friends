// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
// functionen bliver brugt til potten i navigationen
function mypaw(x) {
  x.classList.toggle("change");
}
// svg kode
document.querySelector("#pick-ind").addEventListener("click", pickInd);

function pickInd() {
  document.querySelector("#besked").textContent = "Du står ved Indgangen";
  document.querySelector(".pil").style.translate = "6% -5%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-adoption").addEventListener("click", pickAdo);

function pickAdo() {
  document.querySelector("#besked").textContent =
    "Du står ved Adoptions caféen";
  document.querySelector(".pil").style.translate = "-33% -1%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-dono").addEventListener("click", pickDon);

function pickDon() {
  document.querySelector("#besked").textContent = "Du står ved Donations boden";
  document.querySelector(".pil").style.translate = "13% -38%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-frilej").addEventListener("click", pickFri);

function pickFri() {
  document.querySelector("#besked").textContent =
    "Du står ved Fri lejs området";
  document.querySelector(".pil").style.translate = "-1% -43%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-scene").addEventListener("click", pickSce);

function pickSce() {
  document.querySelector("#besked").textContent = "Du står ved Oplægs scenen";
  document.querySelector(".pil").style.translate = "-57.5% -49.7%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-social").addEventListener("click", pickSoc);

function pickSoc() {
  document.querySelector("#besked").textContent =
    "Du står ved Socialiserings området";
  document.querySelector(".pil").style.translate = "-32.8% -26%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-folk-mad").addEventListener("click", pickFol);

function pickFol() {
  document.querySelector("#besked").textContent =
    "Du står ved Foodtrucks til mennesker";
  document.querySelector(".pil").style.translate = "-58% -19%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}
document.querySelector("#pick-dyr-mad").addEventListener("click", pickDyr);

function pickDyr() {
  document.querySelector("#besked").textContent =
    "Du står ved Foodtrucks til Dyr";
  document.querySelector(".pil").style.translate = "-2% -67%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-butik-bod").addEventListener("click", pickBut);

function pickBut() {
  document.querySelector("#besked").textContent = "Du står ved Butik boderne";
  document.querySelector(".pil").style.translate = "-28% -64%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-ud").addEventListener("click", pickUd);

function pickUd() {
  document.querySelector("#besked").textContent = "Du står ved Udgangen";
  document.querySelector(".pil").style.translate = "19.5% -25%";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
}

document.querySelector("#pick-info").addEventListener("click", pickInf);

function pickInf() {
  document.querySelector("#besked").textContent =
    "Du står ved Informations boden";
  document.querySelector(".pil").classList.remove("hidden");
  document.querySelector(".wc").classList.remove("highlight-wc");
  document.querySelector(".pil").style.translate = "-7.5% -5%";
}

document.querySelector("#pick-wc").addEventListener("click", pickWc);

function pickWc() {
  document.querySelector("#besked").textContent = "Du står ved Toiletterne";
  document.querySelector(".pil").classList.add("hidden");
  document.querySelector(".wc").classList.add("highlight-wc");
}
