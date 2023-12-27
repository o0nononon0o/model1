'use strict';
{
  let num = 1;

  setInterval(() => {
    document.querySelector(`#pic${num}`).classList.remove('slide');
    if(num === 3){
      num = 1;
    } else{
      num ++;
    }
    document.querySelector(`#pic${num}`).classList.add('slide');
    }, 4000);
}
