document.addEventListener("DOMContentLoaded", function() {
    let celsiusInput = document.getElementById("celsiusInput");
    let fahrenheitInput = document.getElementById("fahrenheitInput");

    if (celsiusInput) {
        celsiusInput.addEventListener("input", function() {
            let celsius = parseFloat(celsiusInput.value);
            let result = !isNaN(celsius) ? `${(celsius * 9/5 + 32).toFixed(2)} °F` : '';
            document.getElementById("celsiusResult").innerText = result;
        });
    }

    if (fahrenheitInput) {
        fahrenheitInput.addEventListener("input", function() {
            let fahrenheit = parseFloat(fahrenheitInput.value);
            let result = !isNaN(fahrenheit) ? `${((fahrenheit - 32) * 5/9).toFixed(2)} °C` : '';
            document.getElementById("fahrenheitResult").innerText = result;
        });
    }
});