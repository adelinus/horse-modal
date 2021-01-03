let cardButtons = document.querySelectorAll(".card button");
let modalOuter = document.querySelector(".modal-outer");
let modalInner = document.querySelector(".modal-inner");

function handleCardButtonClick(event) {
  let button = event.currentTarget;
  let card = button.closest(".card");
  let imgSrc = card.querySelector("img").src;
  let desc = card.dataset.description;
  let name = card.querySelector("h2").innerText;
  // populate the modal
  modalInner.innerHTML = `
<img width="450" height="600" src="${imgSrc}" alt="${name}">
<p>${desc}</p> 
`;

  // show the modal
  modalOuter.classList.add("open");
}

cardButtons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
  let isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
