const car = { type: "Fiat", model: "500", color: "white" };

car.title = function () {
  return this
}

console.log(car.title());

const hi = function () {
  console.log(`hi i am a ${this.type} - ${this.model}`)
}

console.log(hi());

Object.assign(car, {
  hello: function () {
    console.log(`hi i am a ${this.type} - ${this.model}`)
  }
})

// car.hello = hi

car.hello()
