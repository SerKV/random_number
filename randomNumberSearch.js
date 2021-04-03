const Num = function ranNumber (max, min = 1) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function how_many (number, max, min = 1) {
  number = Num(number)
  let counter = 0
  let cube = 0

  if (number > max || number < min) {return { counter, number, min, max }} else {
    while (number !== cube && number <= max) {
      cube = Math.floor(min + Math.random() * (max + 1 - min))
      ++counter
    }
  }

  return { counter, number, min, max }

}

class Number_table {
  #minNumber
  randomNumber
  how_many_times
  #maxNumber
  constructor({ counter, number, min, max }) {
    this.#minNumber = min
    this.#maxNumber = max
    this.randomNumber = number
    this.how_many_times = counter
  }
}
let my={}
 my.number1 = new Number_table(how_many(36, 36))
 my.number2 = new Number_table(how_many(1_000, 1_000))
 my.number3 = new Number_table(how_many(10_000, 10_000))
 my.number4 = new Number_table(how_many(10, 1_000_000))

// console.table([number1, number2, number3, number4])

console.log(my)
console.table(my)
// Git test day1
console.log(my.number1)
// Git test day2
console.log(my.number2)
