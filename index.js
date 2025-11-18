// variables
const yourName = document.querySelector(".name");
const date = document.querySelector(".date");
const email = document.querySelector(".email");
const hobby = document.querySelector(".hobby");
const gender = document.querySelector(".gender");
const resultName = document.querySelector(".main__resultName");
const resultDate = document.querySelector(".main__resultDate");
const resultEmail = document.querySelector(".main__resultEmail");
const resultHobby = document.querySelector(".main__resultHobby");
const resultGender = document.querySelector(".main__resultGender");
const save = document.querySelector(".save");
const clear = document.querySelector(".clear");

// events
save.addEventListener("click", (saveEvent) => {
  saveEvent.preventDefault();
  const resName = yourName.value.trim();
  const resDate = date.value.trim();
  const resEmail = email.value.trim();
  const resHobby = hobby.value.trim();
  const resGender = gender.value.trim();
  if (!(resName && resDate && resEmail && resHobby && resGender)) {
    alert("Empty!");
  } else {
    resultName.textContent = yourName.value.trim();
    resultEmail.textContent = email.value.trim();
    resultHobby.textContent = hobby.value.trim();
    resultGender.textContent = gender.value.trim();
    const category = Number(date.value.trim());

    if (category >= 0 && category < 12) {
      resultDate.textContent = date.value.trim() + " (child)";
    } else if (category >= 12 && category < 19) {
      resultDate.textContent = date.value.trim() + " (teenager)";
    } else if (category >= 19 && category < 59) {
      resultDate.textContent = date.value.trim() + " (adult)";
    } else if (category >= 59 && category < 100) {
      resultDate.textContent = date.value.trim() + " (senior";
    } else if (category < 0 || category > 100) {
      resultDate.textContent = "Error!";
    }
  }
});

clear.addEventListener("click", (clearEvent) => {
  resultName.textContent = "";
  resultDate.textContent = "";
  resultEmail.textContent = "";
  resultHobby.textContent = "";
  resultGender.textContent = "";
  yourName.value = "";
  date.value = "";
  email.value = "";
  hobby.value = "";
  gender.value = "";
});
