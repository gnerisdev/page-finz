// Scroll
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    console.log()
    if (window.scrollY >= 1) {
      header.classList.add('custom-scroll');
    } else {
      header.classList.remove('custom-scroll');
    }
  });
});