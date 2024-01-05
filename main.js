'use strict';
{

  const imgElements = document.querySelectorAll('.container');

  window.addEventListener('scroll', () => {
    imgElements.forEach(imgElement => {
      if (imgElement.getBoundingClientRect().top < window.innerHeight * 0.8) {
        imgElement.classList.add('fadein');
      }
    })
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      document.querySelector('footer a').classList.add('fade');
      } else {
        document.querySelector('footer a').classList.remove('fade');
      }
  });


}
