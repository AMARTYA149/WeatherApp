const submitBtn = document.getElementById("submitBtn");

const getInfo = (event) => {
  event.preventDefault();
  alert("eh yep");
};

submitBtn.addEventListener("click", getInfo);
