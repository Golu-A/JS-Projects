let clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)

// setTimeout(function(){
//     let date = new Date()
//     console.log(date.toLocaleString());
// },5000)