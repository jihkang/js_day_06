// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const countrySelector = document.querySelector("select");

function getCountry() {
  var countries = countrySelector.selectedOptions;

  localStorage.setItem("country", countries[0].text);
}

function setInit(data) {
  for (let i = 0; i < countrySelector.length; i++) {
    if (countrySelector[i].text === data) {
      countrySelector[i].selected = true;
      return;
    }
  }
}

function init() {
  var selectedBefore;

  if (localStorage.getItem("country")) {
    selectedBefore = localStorage.getItem("country");
    setInit(selectedBefore);
  }
  countrySelector.addEventListener("change", getCountry);
}

init();
