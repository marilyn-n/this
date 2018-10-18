const car = { type: "Fiat", model: "500", color: "white" };

car.obj = function () {
  return this
}

console.log(car.obj());

const hi = function () {
  return `hi i am a ${this.type} - ${this.model}`
}

console.log(hi());

Object.assign(car, {
  hello: function () {
    console.log(`hi i am a ${this.type} - ${this.model}`)
  }
})

// car.hello = hi

car.hello()

const rover = function (x, y) {
  this.x = x
  this.y = y
  this.isVehicle = true
  this.numWheels = 4
}

const myRover = new rover(5, 10)

const roverFun = rover(5, 10)