import { mainTime } from "./modules/clock";
import "./style.css";
// document.querySelector('#app').innerHTML = ``

//setupCounter(document.querySelector("#counter"));

function refreshTime() {
  let lune = Number(document.querySelector("#lune").value);
  let soleil = Number(document.querySelector("#soleil").value);
  let terre = Number(document.querySelector("#terre").value);

  document.querySelector("#result span").textContent = mainTime(
    lune,
    soleil,
    terre
  );
}

function enableSubmit() {
  let lune = Number(document.querySelector("#lune").value);
  let soleil = Number(document.querySelector("#soleil").value);
  let terre = Number(document.querySelector("#terre").value);
  if (
    (terre === 1 || terre === 2) &&
    (soleil === 1 || soleil === 2) &&
    (lune === 1 || lune === 2)
  ) {
    document.getElementById("compute").disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#compute").addEventListener("click", function () {
    refreshTime();
  });
  document.querySelector("#lune").addEventListener("change", function () {
    enableSubmit();
  });
  document.querySelector("#soleil").addEventListener("change", function () {
    enableSubmit();
  });
  document.querySelector("#terre").addEventListener("change", function () {
    enableSubmit();
  });
});
