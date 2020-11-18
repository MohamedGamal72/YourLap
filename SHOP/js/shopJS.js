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

var filter = document.getElementById('filter'),
    filterArray = Array.from(filter.children),
    allFlex = document.getElementById('allFlex'),
    allFlexArray = Array.from(allFlex.children)


document.addEventListener('click',function(t){
    
    if(t.target.classList.contains('filter')){
        filterArray.forEach(function(ull){
            ull.classList.remove('active')
        })
        t.target.classList.add('active')
    
        data = t.target.getAttribute('data-prand');
       

        for(var i=0; i<allFlexArray.length;i++){
            if(allFlexArray[i].getAttribute('data-prand')==data){  
                allFlexArray[i].classList.remove('none')
                allFlexArray[i].classList.add('look') 
            }else{
                allFlexArray[i].classList.add('none');
            }
        }
        if(t.target.getAttribute('data-prand')=='ALL'){
            allFlexArray.forEach(function(l){
                l.classList.remove('none')
            })
        }

}
})






/************************************ */
var imags = document.getElementsByClassName('img'),
    ul = document.getElementsByClassName('ul'),
    ulArray = Array.from(ul)

    ulArray.forEach(function(ull){
        ull.classList.remove('look')
    })


// show  the details
document.addEventListener('click',function(z){
    
    if(z.target.classList.contains('img')){
        ulArray.forEach(function(ull){
            ull.classList.remove('look')
        })
        z.target.nextElementSibling.classList.toggle('look')
    }
})


// caonsel look the details
document.addEventListener('click',function(e){
    if(e.target.classList.contains('cansle')){
        ulArray.forEach(function(ull){
            ull.classList.remove('look')
        })
    }
})