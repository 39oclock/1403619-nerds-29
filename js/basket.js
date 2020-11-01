const basketLink = document.querySelector(".basket-link");
const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelector(".basket-close");

basketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("basket-show");
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("basket-show");
});
