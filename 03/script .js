let main = document.querySelector('#main')
let cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', function(fn){
    // console.log(fn);  // ye humko details deta h ki kya kya ho rha h 
    // console.log(fn.y); 
    cursor.style.left = fn.x+'px'  // aur tab he kaam karega jab hum cursor ki position absolute denge CSS me 
    cursor.style.top = fn.y+'px'

})