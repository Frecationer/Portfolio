let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function scrollToClass(groupIndex) {
    const wrapper = document.querySelector(".horizontal-scroll-wrapper");
    const cards = document.querySelectorAll(".class-card");

    const groupWidth = cards[0].offsetWidth * 4 + 50 * 3; 
    const scrollPosition = groupIndex * groupWidth;

    wrapper.scrollTo({ left: scrollPosition, behavior: "smooth" });

    const dots = document.querySelectorAll(".scroll-indicators .dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === groupIndex);
    });
  }

  const wrapper = document.querySelector(".horizontal-scroll-wrapper");
  wrapper.addEventListener("scroll", () => {
    const dots = document.querySelectorAll(".scroll-indicators .dot");
    const cards = document.querySelectorAll(".class-card");

    const scrollPosition = wrapper.scrollLeft;
    const groupWidth = cards[0].offsetWidth * 4 + 50 * 3;

    const activeGroup = Math.round(scrollPosition / groupWidth);

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeGroup);
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
  const prevArrow = document.getElementById('prev-arrow');
  const nextArrow = document.getElementById('next-arrow');

  const scrollAmount = 300; // Jumlah scroll per klik (px)

  prevArrow.addEventListener('click', () => {
      scrollWrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  });

  nextArrow.addEventListener('click', () => {
      scrollWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });

