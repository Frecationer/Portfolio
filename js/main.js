// window.addEventListener('scroll', function() {
//   var scrollTopButton = document.querySelector('.scroll-to-top');
//   if (window.scrollY > 100) {
//     scrollTopButton.style.display = 'block';
//   } else {
//     scrollTopButton.style.display = 'none';
//   }
// });
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

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);