let elem = document.querySelectorAll('.elem')
// let elemImg = document.querySelector('#elem1 img')

// elem1.addEventListener('mousemove', function(fn){
//     elemImg.style.left = fn.x+'px'
//     elemImg.style.top = fn.y+'px'
// })
// elem1.addEventListener('mouseenter', function(){
//     elemImg.style.opacity = 1
// })
// elem1.addEventListener('mouseleave', function(){
//     elemImg.style.opacity= 0
// })
elem.forEach(function(fn) {
    console.log(fn.childNodes[3]);
    fn.addEventListener('mouseenter', function(){
        fn.childNodes[3].style.opacity = 1
        
        
    })
    fn.addEventListener('mouseleave', function(){
        fn.childNodes[3].style.opacity = 0
        
    })
    
    fn.addEventListener('mousemove', function(dets){
        fn.childNodes[3].style.left = dets.x+'px'
        fn.childNodes[3].style.top = dets.y+'px'
    })
    
});