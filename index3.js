strings / text
"happy weekend !"
'good morning'
"1234"
"true"
console.log(typeof("1234"))

// wait i'll be there a second
// : escape character
var greet = 'wait i\'be there a second'
console.log(greet)

// i am "okay"
// : escape character
var text = "i am \"okay"
console.log(text)

// new line
// membuat garis baru layaknya menekan tombol
console.log("hello \nGuys")

//tab
// membuat jarak layaknya menekan tombol "enter"
console.log("hello\tGuys")

// concatinate string
var firstName = "max"
var lastName = "verstapen"
var fullName = firstName + " " + lastName
// console.log(fullName)

//concatinate with number
var a = "8"
var b = 12
// string + number ==> number akan di ubah menjadi string
var c = a + b
console.log(c)

var c = a + b
var d = a * b
var e = a - b

console.log(c)
console.log(d)
console.log(e)

var intro = `my full name is ${firstName} ${lastName}`
console.log(intro)

//string properties and methods

var x = "Hello World!"
console.log(x.length) // mencari berapa banyak karakter pada string x

var resultOne = x.indexOf("W")
console.log(resultOne) // mencari index atau posisi karakter

var resultTwo = x.substr(6, 3) // mengcopy 3 karakter dimulain index ke 6
console.log(resultTwo)

var resultFour = x.split(' ')
console.log(resultFour)

var x = "Hello World!"
var y = "hello"
var z = "WORLD"

var resultUpper = y.toUpperCase()
console.log(y)
console.log(resultUpper)

var resultLower = z.toLowerCase()
console.log(resultLower) 

var resultRep = x.replace('l', 'n') // mengganti huruf l menjadi n
console.log(resultRep)

console.log(x.includes("Hello")) // true
console.log(x.includes("world")) // false
