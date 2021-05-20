const calculateBtn = document.getElementById('calc-btn')
const resetBtn = document.getElementById('reset-btn')

const heightinput = document.getElementById('height-input')
const weightinput = document.getElementById('weight-input')
const resultArea = document.getElementById('result')

const resetInputs = () => {
    heightinput.value = ''
    weightinput.value = ''
}

const calculateBmi = () =>{
    const enteredHeight = +heightinput.value
    const enteredWeight = +weightinput.value
    const bmi = enteredWeight / (enteredHeight * enteredHeight)

    if (isNaN(bmi)){
        alert('not a number!')
        return
    }
    
    const resultElement = document.createElement('ion-card')
    resultElement.innerHTML = `
    <ion-card-content>
        <h2>${bmi}<h2/>
    <ion-card-content>
    `
    resultArea.innerHTML = ''
    resultArea.appendChild(resultElement)

}
calculateBtn.addEventListener('click', calculateBmi)
resetBtn.addEventListener('click', resetInputs)