var mainCatalog = document.querySelector(".catalog-list");
var mainCatalogItems = mainCatalog.querySelectorAll(".catalog-section-item a");

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
