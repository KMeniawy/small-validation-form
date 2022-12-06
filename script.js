var inputName = document.getElementsByTagName("input")[0];
var inputEmail = document.getElementsByTagName("input")[1];
var inputage = document.getElementsByTagName("input")[2];
var button = document.getElementsByTagName("button");
var span = document.getElementsByTagName("span");
var tbody = document.getElementById("tbody");
var table = document.getElementById("table");
var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button[0].addEventListener("click", function (e) {
  if (inputName.value == "") {
    span[0].textContent = "This field is required";
    span[0].style.display = "inline";
  } else if (isFinite(inputName.value)) {
    span[0].textContent = "Please enter character";
    inputName.value = "";
    span[0].style.display = "inline";
  } else {
    span[0].style.display = "none";
    var tr = document.createElement("tr");
    tr.innerHTML += "<td>" + inputName.value + "</td>";
    tbody.append(tr);
    table.style.display = "block";
  }
  if (inputEmail.value == "") {
    span[1].textContent = "This field is required";
    span[1].style.display = "inline";
  } else if (isFinite(inputEmail.value)) {
    span[1].textContent = "Please enter Character";
    inputEmail.value = "";
    span[1].style.display = "inline";
  } else if (!emailReg.test(inputEmail.value)) {
    span[1].textContent = "This email not valid";
    inputEmail.value = "";
    span[1].style.display = "inline";
  } else {
    span[1].style.display = "none";
    tr.innerHTML += "<td>" + inputEmail.value + "</td>";
  }
  if (inputage.value == "") {
    span[2].textContent = "This field is required";
    span[2].style.display = "inline";
  } else if (!isFinite(inputage.value)) {
    span[2].style.display = "none";
    span[2].textContent = "Please enter number";
    inputage.value = "";
    span[2].style.display = "inline";
  } else {
    span[2].style.display = "none";
    tr.innerHTML += "<td>" + inputage.value + "</td>";
  }
});

button[1].addEventListener("click", () => {
  inputName.value="";
  inputEmail.value="";
  inputage.value="";
});
