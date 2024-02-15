// operator matematika pada javascript

//number
var a = 23
var b = 3
var c = 3.1

//penjumlahan atau addition
var addOne = a + b +c
console.log(addOne)
console.log(addOne + 10)
console.log(a + b +10)

//pengurangan atau subtraction
var subOne = a - b
console.log(subOne)
subOne = b - a
console.log(subOne)

var x = 30
console.log(x)
x = 40
console.log(x)

//perkalian atau multiplication
console.log(a * b)
console.log(a * -3)

//pembagian atau division
console.log(a / 3)

//modulus, mencari hasil sisa bagi
var modTwo = 10 % 2
console.log(modTwo)

var modThree = 10 % 3
console.log(modThree)

var modFour = 10 % 4
console.log(modFour)

//ganjil jika di modulus hasil nya 1
//genap jika di modulus hasil nya 0

//incremen menjumlahkan dengan 1
var number = 10
number++
console.log(number) // hasil nya akan 11
number++
console.log(number) // hasil nya akan 12

// decrement pengurangan dengan 1
number--
console.log(number) // jadi 11
number--
console.log(number) // jadi 10

//shorthand operators

//version 1
var score = 0
score = score + 10 // nilai score jadi 10
score = score - 3 // nilai score jadi 7
console.log(score)

// version 2
var number = 3
number += 2 // nilai number jadi 5
number *= 2 // nilai number jadi 10
console.log(number)

//properties dan method pada object math
//properties = variable di dalam object
//bject math memiliki property bernama PI
Math.PI
console.log

// absolute mengubah bilangan negatif menjadi positif
// dan hasilnya akan disimpan ke variabel
var result = Math.abs(-4.7)
console.log(result)

// power memangkat bilangan
// delapan pangkat 2
var powResult = Math.pow(8, 2)
console.log(powResult)

// square root, mencari akar dua bilangan
// akar dua dari 64
var sqrResult = Math.sqrt(64)
console.log(sqrResult)

// cube root, mencari akar tiga bilangan
// akar 3 dari 8
var cubResult = Math.cbrt(8)
console.log(cubResult)

// round, pembulatan dengan mengikuti aturan matematika
// desimal >= 5 , dibulatkan ke ats
// desimal <= 4 , dibulatkan ke bawah
var rndResult = Math.round(4.7) // 5
console.log(rndResult)

rndResult = Math.round(4.4)  //4
console.log(rndResult)

// floor, membulatkan ke bawah
var floResult = Math.floor(4.9)
console.log(floResult)

// ceil, membulatkan ke atas
var ceiResult = Math.ceil(4.2)
console.log(ceiResult)

// min, mencari nilai minimal
console.log(Math.min(12, 4, 100))

// max, mencari nilai maximal
console.log(Math.max(12, 4, 100))

0.00 - 0.99
var ran = Math.random()
console.log(ran)
