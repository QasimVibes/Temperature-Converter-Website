// Background changer Logic
const colorChanger = () => {
    let colorPicker = Math.random() * 255 + 1;
    let parseColor = parseInt(Math.floor(colorPicker));
    return parseColor;
}
const abc = () => {
    let firstColor = colorChanger();
    let SecondColor = colorChanger();
    let thirdColor = colorChanger();
    document.body.style.backgroundColor = "rgb(" + firstColor + "," + SecondColor + "," + thirdColor + ")";
}
abc();
setInterval(() => {
    abc();
}, 5000);

// Value converter Logic
let selectedValue = document.getElementById("selected");
let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let formula = document.getElementById("result");

firstInput.addEventListener('input', tempConverter);

function tempConverter() {
    if (selectedValue.value === "celsiusToFahrenheit") {
        let toFahrenheit = (firstInput.value * 9 / 5) + 32;
        secondInput.value = toFahrenheit.toFixed(5);
        formula.innerHTML = `(${firstInput.value}<b>°C</b>× 9/5) + 32 = ${toFahrenheit.toFixed(3)}<b>°F</b>`;

    } else if (selectedValue.value === 'fahrenheitToCelsius') {
        let toCelsius = (firstInput.value - 32) * 5 / 9;
        secondInput.value = toCelsius.toFixed(5);
        formula.innerHTML = `(${firstInput.value}<b>°F</b> − 32) × 5/9 = ${toCelsius.toFixed(3)}<b>°C</b>`;
    } else if (selectedValue.value === 'kelvinToCelsius') {
        let toKelvin = firstInput.value - 273.15;
        secondInput.value = toKelvin.toFixed(5);
        formula.innerHTML = `${firstInput.value}<b>K</b> − 273.15 = ${toKelvin.toFixed(3)}<b>°C</b>`;
    } else if (selectedValue.value === 'kelvinToFahrenheit') {
        let toKelvin = (firstInput.value - 273.15) * 9 / 5 + 32;
        secondInput.value = toKelvin.toFixed(5);
        formula.innerHTML = `(${firstInput.value}<b>K</b> − 273.15) × 9/5 + 32 = ${toKelvin.toFixed(3)}<b>°F</b>`;
    } else if (selectedValue.value === 'fahrenheitToKelvin') {
        let toFahrenheit = (firstInput.value - 32) * 5 / 9 + 273.15;
        secondInput.value = toFahrenheit.toFixed(5);
        formula.innerHTML = `(${firstInput.value}<b>°F</b> − 32) × 5/9 + 273.15 = ${toFahrenheit.toFixed(3)}<b>K</b>`;
    } else if (selectedValue.value === 'celsiusToKelvin') {
        let toCelsiusKelvin = firstInput.value - 1 + 274.15;
        secondInput.value = toCelsiusKelvin;
        formula.innerHTML = `${firstInput.value}<b>°C</b> + 273.15 = ${toCelsiusKelvin}<b>K</b>`;
    }

}
setInterval(() => {
    tempConverter();
}, 500);

