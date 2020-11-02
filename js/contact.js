const contactLink = document.querySelector(".send-message");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");
const contactForm = contactPopup.querySelector(".contact-form");
const contactName = contactPopup.querySelector(".input-user-name");
const contactEmail = contactPopup.querySelector(".input-user-email");
const contactMessage = contactPopup.querySelector(".textarea-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");

    if (storage) {
        contactName.value = storage;
        contactEmail.focus();
    } else {
        contactName.focus();
    }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("message", contactPopup.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }
});
