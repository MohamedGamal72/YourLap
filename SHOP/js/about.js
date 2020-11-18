var menue = document.getElementById('menue'),
    cansel = document.getElementById('cansel');

menue.onclick=function () {
   document.querySelector('nav').classList.add('back')
   menue.classList.add('go');
   menue.classList.remove('come')
}
cansel.onclick=function () {
    document.querySelector('nav').classList.remove('back')
    menue.classList.remove('go');
    menue.classList.add('come')
 }

/************************************************************* */

// Looding
window.onload=function(){
    setTimeout(function(){
        document.querySelector('.looding').classList.add('go');
        document.querySelector('.looding').remove();
        document.querySelector('body').style.overflow='auto'
    },1500)
}
/***************************************** */