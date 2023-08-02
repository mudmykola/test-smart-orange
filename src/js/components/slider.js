let swiper = new Swiper(".headercont-slider__cards", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".headercont-pagination",
    type: 'fraction',
    clickable: true,
  },
  on: {
    paginationRender() {
      const { pagination } = this;
      const paginationEl = pagination.el.querySelector('.swiper-pagination-current');
      const { realIndex: currentPage, slides: totalSlides } = this;
      const formattedPage = String(currentPage + 1).padStart(2, '0');
      const formattedTotalSlides = String(totalSlides.length).padStart(2, '0');
      paginationEl.textContent = formattedPage;
      pagination.el.querySelector('.swiper-pagination-total').textContent = formattedTotalSlides;
    },
  },
  navigation: {
    nextEl: ".headercont-info__btn--next",
    prevEl: ".headercont-info__btn--prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
