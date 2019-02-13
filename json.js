function nullParser (input) {
  if (!input.startsWith('null')) return null
  return [null, input.slice(4)]
}

function numberParser (input) {
  if (!((input.charCodeAt(0) >= 46 && input.charCodeAt(0) <= 57) || (input.charCodeAt(0) === 45) || (input.charCodeAt(0) === 43))) return null
  let i = 1
  while ((input.charCodeAt(i) >= 46 && input.charCodeAt(i) <= 57) || input.charCodeAt(i) === 69 || input.charCodeAt(i) === 101) {
    if (input.charCodeAt(i + 1) === 43 || input.charCodeAt(i + 1) === 45) i += 1 // to Check if e or E is present
    i += 1
  }
  return [input.substring(0, i), input.substring(i)]
}

function booleanParser (input) {
  if (input.startsWith('true')) return [true, input.slice(4)]
  if (input.startsWith('false')) return [false, input.slice(5)]
  return null
}

function stringParser (input) {
  if (!input.startsWith('"')) return null
  let i = 1
  while (input[i] !== '"') i += 1
  return [input.slice(1, i), input.slice(i + 1)]
}

function arrayParser (input) {
  if (!input.startsWith('[')) return null
  let i = 1
  while (input[i] !== ']') i += 1
  return [input.slice(0, i + 1), input.slice(i + 1)]
}

console.log(nullParser('null123'))
console.log(nullParser('noll124'))
console.log(numberParser('+1.7e23abc'))
console.log(numberParser('hello123'))
console.log(booleanParser('true124'))
console.log(booleanParser('flask556'))
console.log(booleanParser('false345'))
console.log(stringParser('"hello"123'))
console.log(stringParser('123"hello"'))
console.log(arrayParser('[123]"true"'))
console.log(arrayParser('hello[jkj]'))
