// when condition is ture then use for show alert by toastify
let message = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// when condition is false then use for show alert by toastify

let messred = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to top, red, black)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
let cities = ["Faisalabad", "Lahore", "Karachi"]
var show = document.getElementById("output");
// print cities 
function printCities() {
    show.innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1
        show.innerHTML += num + ") " + cities[i] + " <br>"
    }
}
// printCities()
function addCity() {
    let city = document.getElementById("input").value;
    if (!city) {
        messred("enter city name")
        return
    }

    // cityFirstLetter = city.slice(0,1).toUpperCase()
    cityFirstLetter = city.charAt(0).toUpperCase()
    cityAllLetters = city.slice(1).toLowerCase()
    cityWordCapitalize = cityFirstLetter + cityAllLetters
    let cityfound = false
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordCapitalize) {
            cityfound = true
            messred("Already in list")
        }
    }
    if (cityfound == false) {
        cities.push(cityWordCapitalize)
        message("Sucessfull adding")
        printCities()
    }

}
// clear cities
function clear() {
    document.getElementById("output").innerHTML = ""
}


// login
function login() {
    event.preventDefault()
    var name1 = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    if (email === "admin@user.com") {
        if (pass === "123456") {
            if (name1.length >= 3) {
                window.location.href = "home.html";
                document.getElementById("username").innerText = name1
            } else {
                messred("enter correct name")
                return
            }
        } else {
            messred("enter correct password")
            return
        }
    } else if (email != "admin@user.com" && pass != "123456") {
        messred("enter correct email and password")
        return
    } else {
        messred("enter correct email")
        return
    }
    message("Successfull login")
}



// forgetpass()

function forgetpass() {
    messred("email is admin@user.com  & password is 123456")
}


function logout(){
    addEventListener("click", () => {
        window.location.replace("index.html")
    })
}