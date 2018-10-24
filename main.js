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


const superHero = function (name, superPower) {
  console.log('this is:', this)
  this.name = name
  this.superPower = superPower
  this.allegiance = 'Good'
}

const superHeroStrict = function (name, superPower) {
  'use strict'
  console.log('this is: ', this)
  this.name = name
  this.superPower = superPower
  this.allegiance = 'Good'
}

const spiderman = {
  name: 'Peter Parker',
  superPower: 'spider skills',
  allegiance: 'good',
  superHero: superHero
}

superHero()
// superHero(undefined, undefined) returns undefined, but has side effect (adds properties to global)
// this is: global 

// superHeroStrict()
// superHeroStrict(undefined, undefined)
// this is: undefined because of 'use strict' pragma
// superHeroStrict() will fail because cannot attach properties to undefined
console.log(spiderman, 'before<<<-----')

const res = spiderman.superHero()

console.log(res, '<<<<---after')

// spiderman.superHero(undefined, undefined)
// this is spiderman object
// 
console.log(spiderman, 'before<<<-----')

spiderman.superHero('rafael', 'pedos')

console.log(spiderman, '<<<<---after')

const mySuperHero = superHero('mira', 'pinche wey') // undefined
const mySuperHero2 = new superHero('wey', 'si') 
console.log(mySuperHero,'hhhhhh');
console.log(mySuperHero2,'kkkkkk');

// 
// new (function (name, superPower) {
//   console.log('this is:', this)
//   this.name = name
//   this.superPower = superPower
//   this.allegiance = 'Good'
// })()

// new (function (name, superPower) {
// const this = {}
//   console.log('this is:', this)
//   this.name = name
//   this.superPower = superPower
//   this.allegiance = 'Good'
// return this
// })(undefined, undefined)

// const this = {}
//   console.log('this is:', {})
//   {}.name = undefined
//   { 'name': undefined }.superPower = undefined
//   { name: undefined, superPower: undefined }.allegiance = 'Good'
// return this
// })

// { name: undefined, superPower: undefined, allegiance = 'Good' }


