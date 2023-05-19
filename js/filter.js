(() => {
  const buttons = document.querySelectorAll(".buttons__button");
  const filterBox = document.querySelectorAll(".flex-container__element");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hidden-title");
      } else {
        item.classList.remove("is-card-hidden");
        item.classList.remove("hidden-title");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let currentCategory = event.target.dataset["filter"];
      buttons.forEach((button) => {
        button.classList.remove("buttons__button--current");
      });
      filterBox.forEach((box) => {
        box.classList.add("is-card-hidden");
        box.ontransitionend = function () {
          filter(currentCategory, filterBox);
        };
      });
      event.target.classList.add("buttons__button--current");
    });
  });
})();
