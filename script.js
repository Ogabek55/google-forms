// Enter Accaunt Img
document.getElementById("upload-button").addEventListener("click", function () {
  document.getElementById("profile-image-input").click();
});
document
  .getElementById("profile-image-input")
  .addEventListener("change", function (event) {
    var input = event.target;
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = document.getElementById("profile-image");
      var secondImg = document.getElementById("second-image");
      img.src = e.target.result;
      img.style.display = "block";
      localStorage.setItem("profileImage", e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("Iltimos, rasm faylini tanlang.");
    }
  });
window.addEventListener("load", function () {
  var storedImage = localStorage.getItem("profileImage");
  if (storedImage) {
    var img = document.getElementById("profile-image");
    var secondImg = document.getElementById("second-image");
    img.src = storedImage;
    secondImg.src = storedImage;
    img.style.display = "block";
    secondImg.style.display = "block";
  }
});

// Text Change 01
let bold01 = document.getElementById("header_div_input");
function boldchange01() {
  if (bold01.style.fontWeight === "300") {
    return (bold01.style.fontWeight = "300");
  } else {
    return (bold01.style.fontWeight = "bold");
  }
}
function italicchange01() {
  if (bold01.style.fontStyle === "normal") {
    return (bold01.style.fontStyle = "italic");
  } else {
    return (bold01.style.fontStyle = "normal");
  }
}
function underlinechange01() {
  if (bold01.style.textDecoration === "none") {
    return (bold01.style.textDecoration = "underline");
  } else {
    return (bold01.style.textDecoration = "none");
  }
}
function deletechange01() {
  if (
    bold01.style.textDecoration === "underline" ||
    bold01.style.fontStyle === "italic" ||
    bold01.style.fontWeight === "bold"
  ) {
    return (
      (bold01.style.textDecoration = "none"),
      (bold01.style.fontStyle = "normal"),
      (bold01.style.fontWeight = "300")
    );
  } else {
    return (bold01.style.textDecoration = "none");
  }
}
var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");
function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Text Change 2
let bold1 = document.getElementById("main_form_div1_inputs1");
function boldchange1() {
  if (bold1.style.fontWeight === "300") {
    return (bold1.style.fontWeight = "300");
  } else {
    return (bold1.style.fontWeight = "bold");
  }
}
function italicchange1() {
  if (bold1.style.fontStyle === "normal") {
    return (bold1.style.fontStyle = "italic");
  } else {
    return (bold1.style.fontStyle = "normal");
  }
}
function underlinechange1() {
  if (bold1.style.textDecoration === "none") {
    return (bold1.style.textDecoration = "underline");
  } else {
    return (bold1.style.textDecoration = "none");
  }
}
function deletechange1() {
  if (
    bold1.style.textDecoration === "underline" ||
    bold1.style.fontStyle === "italic" ||
    bold1.style.fontWeight === "bold"
  ) {
    return (
      (bold1.style.textDecoration = "none"),
      (bold1.style.fontStyle = "normal"),
      (bold1.style.fontWeight = "300")
    );
  } else {
    return (bold1.style.textDecoration = "none");
  }
}
var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");
function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// URL Model
document.querySelector(`#text`).addEventListener(`focusout`, myText);
document.querySelector(`#password`).addEventListener(`focusout`, mypass);
document.querySelector(`#btn`).addEventListener(`click`, function () {
  myText();
  mypass();
});
function myText() {
  let massage, text;
  let errElement = document.getElementById(`text`);
  massage = document.getElementById(`err`);
  text = document.getElementById(`text`).ariaValueMax;
  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `bo'sh`;
    }
    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      massage.innerHTML = "";
    }
  } catch (e) {
    massage.innerHTML = `Qiymat yo'q `;
  }
}
function mypass() {
  let massage, pass;
  let errElement = document.getElementById(`password`);
  massage = document.getElementById(`err2`);
  pass = document.getElementById(`password`).ariaValueMax;
  try {
    if (pass == "") {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `bo'sh`;
    }
    if (pass.length < 3) {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `3 tadan ko'proq parol kirgizing`;
    }
  } catch (e) {
    massage.innerHTML = `Value none `;
  }
}
let bold = document.getElementById("main_form_div1_inputs");
function boldchange() {
  if (bold.style.fontWeight === "300") {
    return (bold.style.fontWeight = "300");
  } else {
    return (bold.style.fontWeight = "bold");
  }
}
function italicchange() {
  if (bold.style.fontStyle === "normal") {
    return (bold.style.fontStyle = "italic");
  } else {
    return (bold.style.fontStyle = "normal");
  }
}
function underlinechange() {
  if (bold.style.textDecoration === "none") {
    return (bold.style.textDecoration = "underline");
  } else {
    return (bold.style.textDecoration = "none");
  }
}
function deletechange() {
  if (
    bold.style.textDecoration === "underline" ||
    bold.style.fontStyle === "italic" ||
    bold.style.fontWeight === "bold"
  ) {
    return (
      (bold.style.textDecoration = "none"),
      (bold.style.fontStyle = "normal"),
      (bold.style.fontWeight = "300")
    );
  } else {
    return (bold.style.textDecoration = "none");
  }
}
var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");
function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// URL Model
document.querySelector(`#text`).addEventListener(`focusout`, myText);
document.querySelector(`#password`).addEventListener(`focusout`, mypass);
document.querySelector(`#btn`).addEventListener(`click`, function () {
  myText();
  mypass();
});
function myText() {
  let massage, text;
  let errElement = document.getElementById(`text`);
  massage = document.getElementById(`err`);
  text = document.getElementById(`text`).ariaValueMax;
  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `bo'sh`;
    }
    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      massage.innerHTML = "";
    }
  } catch (e) {
    massage.innerHTML = `Qiymat yo'q `;
  }
}
function mypass() {
  let massage, pass;
  let errElement = document.getElementById(`password`);
  massage = document.getElementById(`err2`);
  pass = document.getElementById(`password`).ariaValueMax;
  try {
    if (pass == "") {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `bo'sh`;
    }
    if (pass.length < 3) {
      errElement.classList.remove("valid");
      errElement.classList.add(`err`);
      throw `3 tadan ko'proq parol kirgizing`;
    }
  } catch (e) {
    massage.innerHTML = `Value none `;
  }
}
// Drob_block  block
let inputClick = document.getElementById("main_form_div1_inputs");
let blockButton = document.getElementById("drob_blok");
inputClick.addEventListener("click", blockHideChange);

function blockHideChange() {
  if (blockButton.style.display === "none") {
    return (blockButton.style.display = "block");
  } else {
    return (blockButton.style.display = "none");
  }
}
// Drob_block  block
let inputClick1 = document.getElementById("main_form_div1_inputs1");
let blockButton2 = document.getElementById("drob_blok2");
inputClick1.addEventListener("click", blockHideChange2);

function blockHideChange2() {
  if (blockButton2.style.display === "none") {
    return (blockButton2.style.display = "block");
  } else {
    return (blockButton2.style.display = "none");
  }
}
// Add new form
let newForm = document.getElementById("add_new_form_plus_addForm");
function ShowHelloMessage() {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = ` <div class="form">
              <div class="main_form_div11">
                <div>
                  <input
                    class="form_input1"
                    type="text"
                    value="Вопрос без заголовка"
                  />
                </div>
                <div>
                  <p class="form_p">:::</p>
                 <p class="form_img"> <i class="fa-regular fa-image "></i></p>
                </div>
                <div>
                  <select
                    class="form_select"
                    name="select"
                    id="form_input1_select"
                  >
                    <option value="">текст (строка)</option>
                    <option value="">текст (абзац)</option>
                    <option value="">Один из списка</option>
                  </select>
                </div>
              </div>
              <p>краткий ответ</p>
              <hr class="form_hr1" />
              <hr class="form_hr2" />
              <div class="main_form_div22">
                <div><i class="fa-regular fa-copy"></i></div>
                <div><i class="fa-solid fa-trash"></i></div>
                <div></div>
                <div>Обязательный вопрос</div>
              </div>
            </div>`;
  document.getElementById("add").appendChild(newDiv);
}
newForm.onclick = ShowHelloMessage;
