$(".feedbacks-container").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: true,
  rtl: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".tabs .tab");
menuItems[0].classList = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      menuItems.forEach((item) => {
        item.classList.remove("active");
        document
          .querySelector(".tabs a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
AOS.init({
  duration: 500,
  easing: "ease-in-sine",
});
