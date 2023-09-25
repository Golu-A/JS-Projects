// let height = document.querySelector('#height')
// let weight = document .querySelector('#weight')

let form = document.querySelector("form")

form.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault()

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document .querySelector('#weight').value)
    let result = document.querySelector('#results')
    let comment = document.querySelector('#comment')

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please give us a valid height"
    }
    else if(weight == "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give us a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`

        if(bmi<18.6){
            comment.innerHTML = "You are underweight"
        } else if (bmi >= 18.6 || bmi <= 24.9){
            comment.innerHTML = 'You are OK'
        } else{
           comment.innerHTML =  "You are OVER WEIGHT"
        }

    }

    

    
})