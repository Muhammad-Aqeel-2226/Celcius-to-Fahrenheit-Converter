function convertToFahrenheit() {
    const celsius = document.getElementById("cg").value;
    if (celsius !== '') {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fh").value = fahrenheit;
    }
}

function convertToCelsius() {
    const fahrenheit = document.getElementById("fh").value;
    if (fahrenheit !== '') {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("cg").value = celsius;
    }
}