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
// formel side
const bringPet = document.querySelectorAll('input[name="bring-pet"]');
const petInfo = document.querySelector(".pet-info");
bringPet.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "ja") {
      petInfo.style.display = "grid";
    } else {
      petInfo.style.display = "none";
    }
  });
});
// opsamlings kode
const eventPass = document.querySelector(".event-pass");
if (eventPass) {
  console.log(eventPass);
  const output_navn = document.querySelector("#opnavn");
  const output_titel = document.querySelector("#optitel");
  const output_petname = document.querySelector("#oppet-name");
  const output_pettype = document.querySelector("#oppet-type");
  const params = new URLSearchParams(window.location.search);
  const navn = params.get("navn");
  const titel = params.get("titel");
  const petName = params.get("pet-name");
  const petType = params.get("pet-type");
  output_navn.textContent = navn;
  output_titel.textContent = titel;
  output_petname.textContent = petName;
  output_pettype.textContent = petType;
  const output_dato = document.querySelector("#opdato");
  const dato = params.get("dato");
  output_dato.textContent = dato;

  const output_opowner_type = document.querySelector("#opowner-type");
  const output_opowner_type_info = document.querySelector("#opowner-type-info");
  const ownertype = params.get("ownertype");
  output_opowner_type.textContent = ownertype;
  if (ownertype === "Lover of pets") {
    output_opowner_type_info.textContent =
      "du elsker dit kæledyr ligeså meget (eller mere) end dine familie og venner, det dig og dem mod resten af verdnen.";
  } else if (ownertype === "Pet træner") {
    output_opowner_type_info.textContent =
      "du elsker at lære dit kæledyr alle mulige tricks, når det kommer til at vise dit dem frem så er du slet ikke genert.";
  } else if (ownertype === "Pet fotograf") {
    output_opowner_type_info.textContent =
      "du typen som elsker at fange alle de søde, sjove og bedste momenter af dit kæledyr, og selvfølgelig skal alle se dem.";
  } else if (ownertype === "Pet newbie") {
    output_opowner_type_info.textContent =
      "du helt ny når det kommer til at eje kæledyr og der meget du ikke ved endnu, men du villig til at lære og gøre dit bedste.";
  } else if (ownertype === "Pet uvidende") {
    output_opowner_type_info.textContent =
      "du ved intet hvordan det er at eje et kæledyr, men du elsker dem og har flere gange overvejet at stjæle dine venners kæledyr.";
  }
  const output_interest = document.querySelector("#opinterests");
  const chosenInterest = params.getAll("interest");
  if (chosenInterest.length > 0) {
    output_interest.innerHTML = chosenInterest
      .map((currentValue) => `<li>${currentValue}</li>`)
      .join("");
  } else {
    output_interest.innerHTML =
      "<li>Der var ikke noget du ønskede ud af eventet...?</li>";
  }

  const temaImage = document.querySelector(".tema-id");
  const temaIcon = document.querySelector("#tema-ikon");
  const tema = params.get("tema");
  if (tema === "hund") {
    temaImage.src = "img/tema-hund.png";
  } else if (tema === "kat") {
    temaImage.src = "img/tema-kat.png";
    temaIcon.src = "img/paws_deco.png";
  } else if (tema === "fugl") {
    temaImage.src = "img/tema-fugl.png";
    temaIcon.src = "img/claw_deco.png";
  } else if (tema === "fisk") {
    temaImage.src = "img/tema-fisk.png";
    temaIcon.src = "img/algae_deco.png";
  } else if (tema === "kanin") {
    temaImage.src = "img/tema-kanin.png";
  }
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
