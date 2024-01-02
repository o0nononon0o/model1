'use strict';
{

  const secElements = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    secElements.forEach(secElement => {
      if (secElement.getBoundingClientRect().top < window.innerHeight * 0.8) {
        secElement.classList.add('fadein');
      }
    })
  });


}
