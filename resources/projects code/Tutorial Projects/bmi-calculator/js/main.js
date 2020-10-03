let userWeightInput = document.getElementById('body-weight-input');
let userHeightInput = document.getElementById('body-height-input');
let calculateBMIButton = document.getElementById('calculate-bmi-button')
let totalBMI = document.getElementById('total-bmi');
let rangeBMI = document.getElementById('range-bmi');

function calculateBMI() {
    let calculateBMI = userWeightInput.valueAsNumber / (userHeightInput.valueAsNumber * userHeightInput.valueAsNumber);
    // console.log(calculateBMI);
    while (calculateBMI < 10) {
        calculateBMI = calculateBMI * 10;
        // console.log(calculateBMI);
    }
    calculateBMI = calculateBMI.toPrecision(3);
    displayBMI(calculateBMI);
}

function displayBMI(bmiValue) {
    totalBMI.innerText = 'Your BMI is ' + bmiValue;
    if (bmiValue < 18.5) {
        rangeBMI.innerText = 'You are in the underweight range';
        rangeBMI.style.backgroundColor = 'yellow';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        rangeBMI.innerText = 'You are in the healty weight range';
        rangeBMI.style.backgroundColor = 'lightgreen';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        rangeBMI.innerText = 'You are in the overweight range';
        rangeBMI.style.backgroundColor = 'orange';
    } else if (bmiValue >= 30 && bmiValue < 100) {
        rangeBMI.innerText = 'You are in the obese range';
        rangeBMI.style.backgroundColor = 'red';
    } 
    // console.log(typeof bmiValue);
}
