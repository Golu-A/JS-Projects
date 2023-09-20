let cont = document.querySelector('#container')
let love = document.querySelector('i')
let love2 = document.querySelector('#bl')

cont.addEventListener('dblclick', function () {
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.color = 'red'
    love2.style.color = 'red'
    love.style.opacity = 0.8

    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1500);
    setTimeout(() => {
        love.style.opacity = 0
    }, 1000)
})
love2.addEventListener('click', function(){
    love2.style.color = '#fff'
})
