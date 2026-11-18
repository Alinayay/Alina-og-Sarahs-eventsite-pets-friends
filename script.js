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
// dark mode

const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");

function handleThemeChange() {
  const isDark = toggleSwitch.checked;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
}
function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  html.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
}
getSavedTheme();
toggleSwitch?.addEventListener("change", handleThemeChange);

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
    temaIcon.src = "img/d-hund.png";
  } else if (tema === "kat") {
    temaImage.src = "img/tema-kat.png";
    temaIcon.src = "img/d-kat.png";
  } else if (tema === "fugl") {
    temaImage.src = "img/tema-fugl.png";
    temaIcon.src = "img/d-fugl.png";
  } else if (tema === "fisk") {
    temaImage.src = "img/tema-fisk.png";
    temaIcon.src = "img/d-fisk.png";
  } else if (tema === "kanin") {
    temaImage.src = "img/tema-kanin.png";
    temaIcon.src = "img/d-kanin.png";
  }

  const Pass = document.querySelector("#pass");
  const gB = document.querySelector("#gb");
  const opNavn = document.querySelector("#opnavn");
  const opPetNavn = document.querySelector("#oppet-name");
  const opPetType = document.querySelector("#oppet-type");
  const ownerType = document.querySelector(".pass-titel");
  const interestList = document.querySelector("#pass-titel");
  const ownerTypeInfo = document.querySelector("#opowner-type-info");
  const opInterests = document.querySelector("#opinterests");
  const farveTema = params.get("farve-tema");
  if (farveTema === "pink") {
    Pass.style.backgroundColor = "#FDC6D5";
    gB.style.color = "#ED93B7";
    opNavn.style.color = "#BF4D67";
    opPetNavn.style.color = "#BF4D67";
    opPetType.style.color = "#BF4D67";
    ownerType.style.color = "#BF4D80";
    interestList.style.color = "#BF4D80";
    ownerTypeInfo.style.color = "#ED93B7";
    opInterests.style.color = "#D76995";
  } else if (farveTema === "orange") {
    Pass.style.backgroundColor = "#FDD1A4";
    gB.style.color = "#EBAC6C";
    opNavn.style.color = "#8A3A09";
    opPetNavn.style.color = "#8A3A09";
    opPetType.style.color = "#8A3A09";
    ownerType.style.color = "#D37236";
    interestList.style.color = "#D37236";
    ownerTypeInfo.style.color = "#EBAC6C";
    opInterests.style.color = "#DF9B56";
  } else if (farveTema === "green") {
    Pass.style.backgroundColor = "#AEE3AD";
    gB.style.color = "#7FC675";
    opNavn.style.color = "#396150";
    opPetNavn.style.color = "#396150";
    opPetType.style.color = "#396150";
    ownerType.style.color = "#417E4A";
    interestList.style.color = "#417E4A";
    ownerTypeInfo.style.color = "#7FC675";
    opInterests.style.color = "#73B36A";
  } else if (farveTema === "blue") {
    Pass.style.backgroundColor = "#BBD8EA";
    gB.style.color = "#76B3E2";
    opNavn.style.color = "#224E69";
    opPetNavn.style.color = "#224E69";
    opPetType.style.color = "#224E69";
    ownerType.style.color = "#2D729C";
    interestList.style.color = "#2D729C";
    ownerTypeInfo.style.color = "#76B3E2";
    opInterests.style.color = "#4987B7";
  } else if (farveTema === "purple") {
    Pass.style.backgroundColor = "#D7BEF5";
    gB.style.color = "#967BB8";
    opNavn.style.color = "#502E7B";
    opPetNavn.style.color = "#502E7B";
    opPetType.style.color = "#502E7B";
    ownerType.style.color = "#7f55b3";
    interestList.style.color = "#7f55b3";
    ownerTypeInfo.style.color = "#967BB8";
    opInterests.style.color = "#906DBD";
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
