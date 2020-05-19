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
const checkColors = () => {
    // console.log(document.getElementById("b"))
    if(document.getElementById("b")) {
        // console.log(document.getElementById("b").style)
        degCol = document.getElementById("d").value
        document.getElementById("b").style.filter = "hue-rotate(" + degCol + "deg)"
        // Find color team to be on
        closestMatch = [Infinity, "brown"]
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
document.getElementById("d").addEventListener("input", () => {
    checkColors()
})
document.getElementById("d").addEventListener("change", () => {
    // For IE because it doesn't work with input
    checkColors()
})

checkColors()

// Now time for rendering some tribbles!