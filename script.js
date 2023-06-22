// Dapatkan elemen form dan elemen input Fahrenheit dari DOM
const form = document.getElementById("form");
const fahrenheit = document.getElementById("fahrenheit");

// Tambahkan event listener pada form untuk event "submit"
form.addEventListener("submit", submitform);

function submitform() {
    document.getElementById("fahrenheit").innerHTML = parseInt(document.getElementById("celcius").value) * 9 / 5 + 32;
    document.getElementById("cara").innerHTML =
    (document.getElementById("celcius").value) + "°C * (9 / 5) + 32 = " + (document.getElementById("fahrenheit").value) + "°F";
    event.preventDefault();
            }