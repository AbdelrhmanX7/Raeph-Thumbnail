let Episode_Name = document.getElementById("Episode_name");
Episode_Name.addEventListener("keyup", update_Episode_Name);
function update_Episode_Name() {
  document.getElementById("Episode-Name").innerHTML = Episode_Name.value;
}

let Rapper_Name = document.getElementById("Rapper_name");
Rapper_Name.addEventListener("keyup", update_Rapper_name);

function update_Rapper_name() {
  document.getElementById("Rapper-Name").innerHTML = Rapper_Name.value;
}

let Producer_Name = document.getElementById("Producer_name");
Producer_Name.addEventListener("keyup", updateValue_Producer_name);
function updateValue_Producer_name() {
  document.getElementById("Producer-Name").innerHTML = Producer_Name.value;
}

let Episode_Number = document.getElementById("Episode_number");
Episode_Number.addEventListener("keyup", updateValue_Episode_number);
function updateValue_Episode_number() {
  document.getElementById("Epsiode-Number").innerHTML = Episode_Number.value;
}

let Season_Number = document.getElementById("Season_number");
Season_Number.addEventListener("keyup", updateValue_Season_Number);
function updateValue_Season_Number() {
  document.getElementById("Season-Number").innerHTML = Season_Number.value;
}
$(document).ready(function () {
  $("#btn_convert").on("click", function () {
    document.querySelector("#Raepgh-photo").src =
      "Raeph-img/channel-img-black.jpg";
      setTimeout(function() {
        document.querySelector("#myhtml").removeAttribute("class");
        document.querySelector("#myhtml").setAttribute("class", "banner_black");
        document.querySelector(".season-text h1").innerHTML = "Watch";
        html2canvas(document.getElementById("myhtml")).then(function (canvas) {
          var anchorTag = document.createElement("a");
          document.body.appendChild(anchorTag);
          anchorTag.download = `(Watch)${Episode_Name.value}${Rapper_Name.value}`;
          anchorTag.href = canvas.toDataURL();
          anchorTag.target = "_blank";
          anchorTag.click();
        });
      }, 1000)
    setTimeout(function() {
        document.querySelector("#myhtml").removeAttribute("class");
        document.querySelector("#myhtml").setAttribute("class", "banner");
        document.querySelector(".season-text h1").innerHTML = "New";
        document.querySelector("#Raepgh-photo").src = "Raeph-img/channel-img.jpg";
        html2canvas(document.getElementById("myhtml")).then(function (canvas) {
          var anchorTag = document.createElement("a");
          document.body.appendChild(anchorTag);
          anchorTag.download = `(New)${Episode_Name.value}${Rapper_Name.value}`;
          anchorTag.href = canvas.toDataURL();
          anchorTag.target = "_blank";
          anchorTag.click();
        });
    }, 2000)
  });
});
