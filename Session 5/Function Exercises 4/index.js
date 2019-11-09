function celsiusToFahrenheit(celsius, fahrenheit) {
    celsius = Number(prompt('ENTER into Celsius'))
    fahrenheit = celsius * 1.8 + 32
    alert(`${celsius}°C is ${fahrenheit}°F`)
    return fahrenheit
}

let store_fahrenheit = celsiusToFahrenheit()
function fahrenheitToCelsius(celsius) {
    celsius = (store_fahrenheit - 32) / 1.8
    alert(`${store_fahrenheit}°F is ${celsius.toFixed()}°C`)
}
// celsiusToFahrenheit()
fahrenheitToCelsius()