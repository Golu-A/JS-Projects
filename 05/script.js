
let arr = [
    {dp:"https://images.pexels.com/photos/18423796/pexels-photo-18423796/free-photo-of-processed-with-vsco-with-hb2-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/13235329/pexels-photo-13235329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18193622/pexels-photo-18193622/free-photo-of-smiling-woman-sitting-on-floor-and-leaning-arm-on-stool.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/18099920/pexels-photo-18099920/free-photo-of-woman-posing-in-front-of-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18239149/pexels-photo-18239149/free-photo-of-fashion-people-woman-relaxation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/18013806/pexels-photo-18013806/free-photo-of-top-view-of-a-flock-of-waterfowl-on-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18055320/pexels-photo-18055320/free-photo-of-silhouette-of-a-man-riding-on-a-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/16970074/pexels-photo-16970074/free-photo-of-flowers-and-plants-around-bars.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18460268/pexels-photo-18460268/free-photo-of-curly-red-haired-young-guy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/17024506/pexels-photo-17024506/free-photo-of-green.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/16051631/pexels-photo-16051631/free-photo-of-amor-de-casal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/17781177/pexels-photo-17781177/free-photo-of-close-up-of-a-snail-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18369315/pexels-photo-18369315/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=600&lazy=load", story: "https://images.pexels.com/photos/18403937/pexels-photo-18403937/free-photo-of-festival-high-ferris-wheel-fun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
]
let storiya = document.querySelector('#storiya')
let clutter = ""
arr.forEach(function(elem, idx){
    clutter+= `<div class="story">
    <img id="${idx}" src="${elem.dp}}" alt="">
</div>`
})
storiya.innerHTML = clutter
storiya.addEventListener('click', function (dets){
    // console.log(arr[1]);
    //  console.log(arr[dets.target.id].story);
    document.querySelector('#full-screen').style.display = 'block'
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector('#full-screen').style.display = 'none'
    }, 4000);
})