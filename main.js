'use strict';
{

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      document.querySelector('footer a').classList.add('fade');
      } else {
        document.querySelector('footer a').classList.remove('fade');
      }
  });


}
