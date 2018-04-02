var mainCatalog = document.querySelector(".catalog-list");
var mainCatalogItems = mainCatalog.querySelectorAll(".catalog-section-item a");

var modalSendMessage = document.querySelector(".modal-send-message");
var modalMap = document.querySelector(".modal-map");

var mapLink = document.querySelector(".map");
var sendMessageLink = document.querySelector(".contacts-btn");
var sendMessageForm = document.querySelector(".send-message-form");
var userName = document.querySelector("[name=name]");
var userEmail = document.querySelector("[name=email]");

var modalSendMessageClose = document.querySelector(".modal-send-message-close");
var modalMapClose = document.querySelector(".modal-map-close");

var servicesDeliverySlide = document.getElementById("services-delivery");
var servicesWarrantySlide = document.getElementById("services-warranty");
var servicesCreditSlide = document.getElementById("services-credit");

var btnDelivery = document.querySelector(".btn-delivery");
var btnWarranty = document.querySelector(".btn-warranty");
var btnCredit = document.querySelector(".btn-credit");

var bestProductSlide1 = document.getElementById("slide-1");
var bestProductSlide2 = document.getElementById("slide-2");
var bestProductSlide3 = document.getElementById("slide-3");

var btnSlider1 = document.querySelector(".slider-btn-1");
var btnSlider2 = document.querySelector(".slider-btn-2");
var btnSlider3 = document.querySelector(".slider-btn-3");


for (var i = 0; i < mainCatalogItems.length; i++) {
  mainCatalogItems[i].addEventListener("focus", function (evt) {
    evt.preventDefault();
    mainCatalog.classList.add('catalog-list-opened');
  });

  mainCatalogItems[i].addEventListener("blur", function (evt) {
    evt.preventDefault();
    mainCatalog.classList.remove('catalog-list-opened');
  });
}

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("hidden-element");
  modalSendMessage.classList.add("hidden-element");
});

modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("hidden-element");
});

sendMessageLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSendMessage.classList.remove("hidden-element");
  modalMap.classList.add("hidden-element");

  userName.focus();

  userName.classList.remove('input-text-field-invalid');
  userEmail.classList.remove('input-text-field-invalid');
});

modalSendMessageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSendMessage.classList.add("hidden-element");
  modalSendMessage.classList.remove("modal-error-submit");
});

sendMessageForm.addEventListener('submit', function (evt) {

  if (!userName.value) {
    evt.preventDefault();
    userName.classList.add('input-text-field-invalid');
    modalSendMessage.classList.add("modal-error-submit");
  }

  if (!userEmail.value) {
    evt.preventDefault();
    userEmail.classList.add('input-text-field-invalid');
    modalSendMessage.classList.add("modal-error-submit");
  }
});

userName.addEventListener('focus', function () {
  userName.classList.remove('input-text-field-invalid');
});

userEmail.addEventListener('focus', function () {
  userEmail.classList.remove('input-text-field-invalid');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (!modalMap.classList.contains("hidden-element")) {
      modalMap.classList.add("hidden-element");
    }

    if (!modalSendMessage.classList.contains("hidden-element")) {
      modalSendMessage.classList.add("hidden-element");
    }
    if (modalSendMessage.classList.contains("modal-error-submit")) {
      modalSendMessage.classList.remove("modal-error-submit");
    }

  }
});


btnDelivery.addEventListener("click", function (evt) {
  servicesDeliverySlide.classList.remove("hidden-element");
  btnDelivery.classList.add("services-active-btn");

  servicesCreditSlide.classList.add("hidden-element");
  servicesWarrantySlide.classList.add("hidden-element");

  btnWarranty.classList.remove("services-active-btn");
  btnCredit.classList.remove("services-active-btn");
});

btnWarranty.addEventListener("click", function (evt) {
  servicesWarrantySlide.classList.remove("hidden-element");
  btnWarranty.classList.add("services-active-btn");

  servicesDeliverySlide.classList.add("hidden-element");
  servicesCreditSlide.classList.add("hidden-element");

  btnCredit.classList.remove("services-active-btn");
  btnDelivery.classList.remove("services-active-btn");
});

btnCredit.addEventListener("click", function (evt) {
  servicesCreditSlide.classList.remove("hidden-element");
  btnCredit.classList.add("services-active-btn");

  servicesWarrantySlide.classList.add("hidden-element");
  servicesDeliverySlide.classList.add("hidden-element");

  btnDelivery.classList.remove("services-active-btn");
  btnWarranty.classList.remove("services-active-btn");
});


btnSlider1.addEventListener("click", function (evt) {
  bestProductSlide1.classList.remove("hidden-element");
  btnSlider1.classList.add("slider-btn-active");

  bestProductSlide2.classList.add("hidden-element");
  bestProductSlide3.classList.add("hidden-element");

  btnSlider2.classList.remove("slider-btn-active");
  btnSlider3.classList.remove("slider-btn-active");
});

btnSlider2.addEventListener("click", function (evt) {
  bestProductSlide2.classList.remove("hidden-element");
  btnSlider2.classList.add("slider-btn-active");

  bestProductSlide1.classList.add("hidden-element");
  bestProductSlide3.classList.add("hidden-element");

  btnSlider1.classList.remove("slider-btn-active");
  btnSlider3.classList.remove("slider-btn-active");
});

btnSlider3.addEventListener("click", function (evt) {
  bestProductSlide3.classList.remove("hidden-element");
  btnSlider3.classList.add("slider-btn-active");

  bestProductSlide1.classList.add("hidden-element");
  bestProductSlide2.classList.add("hidden-element");

  btnSlider1.classList.remove("slider-btn-active");
  btnSlider2.classList.remove("slider-btn-active");
});

