// string methods

const sentence ='The quick brown fox jumped over the lazy dog'

// lenght of string
console.log(sentence.length)

// convert to upercase

console.log(sentence.toUpperCase())

// convert to lowercase

console.log(sentence.toLowerCase())

// cut some part of a String

console.log(sentence.slice(0, 10))

// finding index

console.log(sentence[sentence.length - 1])

// finding index of fox

console.log(sentence.indexOf('fox'))

// replace a particular string

console.log(sentence.replace('fox', 'goat'))

// replace all o letter with 0

console.log(sentence.replaceAll('o','0'))

// finding index of fox position 20

console.log(sentence.indexOf('fox', 20))

// check if jump exist

console.log(sentence.includes('jump'))

// check if sentence starts with The

console.log(sentence.startsWith('The'))

// check if sentence ends with dog

console.log(sentence.endsWith('dog'))

// add strings together

console.log('Alphabets:'.concat(sentence))

// find where a strings end

console.log(sentence.endsWith('dog'))

// find a character at a particular index

console.log(sentence.charAt(16))

// convert a string to an array

console.log(sentence.split(' '))

// repeat a particular string

console.log('sentence'.repeat(3))

const num= 80

console.log(typeof num.toString(2))

// using concat

let user = 'oladele'

let surnmame = 'akomolede'

let message = user + ' ' + surnmame.concat(' ', 'i am 35 years old')

console.log(message)

















