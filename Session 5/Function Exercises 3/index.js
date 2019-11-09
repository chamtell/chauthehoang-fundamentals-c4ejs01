function calcCircumfrence(radius, circumference, pi = 3.14) {
    radius = Number(prompt('ENTER r'))
    circumference = radius * 2 * pi
    alert(`The circumference is ${circumference}`)
}

function calcArea(radius, acreage, pi = 3.14) {
    radius = Number(prompt('ENTER r'))
    acreage = pi * Math.pow(radius, 2)
    alert(`The area is ${acreage}`)
}

calcCircumfrence()
calcArea()