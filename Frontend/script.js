// let b = document.getElementById("a"),
// c = b.getContext("2d")

// b.width = window.innerWidth
// b.height = window.innerHeight
let deg = 0,
colors = {
    "BROWN": 0,
    "BLUE": 150,
    "GREEN": 50,
    "PINK": 300,
    "AQUAMARINE": 125,
    // "dark blue": 200,
    "PURPLE": 250,
    "RED": 337
}
let closestMatch = [Infinity, "brown"]
const checkColors = () => {
    // console.log(document.getElementById("b"))
    if(document.getElementById("b")) {
        // console.log(document.getElementById("b").style)
        degCol = document.getElementById("d").value
        document.getElementById("b").style.filter = "hue-rotate(" + degCol + "deg)"
        // Find color team to be on
        for(let i = 0; i < Object.values(colors).length; i++) {
            if(Math.abs(degCol - Object.values(colors)[i]) < closestMatch[0]) {
                closestMatch = [Math.abs(degCol - Object.values(colors)[i]), Object.keys(colors)[i]]
            }
        }
        document.documentElement.style.setProperty("--color", closestMatch[1])
        document.getElementById("c").innerHTML = closestMatch[1];
        // console.log(Object.keys(colors), colors.length, deg)
    }
}
document.forms["InitialStartup"].addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(document.forms["InitialStartup"]["fcolor"].value)
    // Send a post request to get the user set up; once we recieve info, we'll
    // Reroute to a new page.
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            // Recieved data. This is great. Now we're going to load the page and go to
            // localhost:xxxx/formRes.html
            location.href = xhttp.responseText
        }
    }
    xhttp.open("POST", "newUser", true)
    xhttp.send(`fcolor=${document.forms["InitialStartup"]["fcolor"].value}&username=${document.forms["InitialStartup"]["fusername"].value}`)
    return false
})
document.getElementById("d").addEventListener("input", () => {
    checkColors()
})
document.getElementById("d").addEventListener("change", () => {
    // For IE because it doesn't work with input
    checkColors()
})

checkColors()

// Now time for rendering some tribbles!