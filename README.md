# This 

The `this` keyword can also be refered as the `context` object. `this` is an identifier set to an object - the **call site** determines what the object is.

The **call site** is the neighbourhood (as a **stand-alone function** or **object method**;  with or without the `use strict` pragma.) where the function is called [with `.call()`, `.apply()`, `.bind()` or plain `()`].

## Global Namespace

Outside of all functions, objects and definitions, the namespace is called the global namespace/environment. `this` is the global object at the global namespace.


### Node

The global object in Node is called `global`. At the global namespace, this is global.

```js

  this === global // true
  
```


### Browser

The global object in the browser is called `window`. At the global namespace, this is window.

```js

  this === window // true
  
```
## Non Arrow Functions

All functions that are not arrow functions, i.e. 

* function declaration
* function expression
* function constructor
* object literal shorthand function
* ES6 class shorthand method

have a `this` keyword at execution time. Depending on the call-site the value  of `this` is set.

### Stand Alone Functions

A stand alone function is a function that is not attached to an object. (It doesn't matter if the function is nested in many other functions or objects).

#### With 'use strict' pragma

If the 'use strict' is applied, `this` is set to undefined, at the call-site.

```js
'use strict'

const returnThis = function () {
  return this
}

returnThis() === undefined

// true

returnThis()

// undefined
```

#### Without 'use strict' pragma

If the 'use strict' is not applied, `this` is set to the Global object (`global` for node, `window` for the Browser), at the call-site.

```js
const returnThis = function () {
  return this
}

returnThis() === global
// true for node

returnThis() === window
// true for browser

returnThis()

// global in node
// window in browser

```

### Method Functions

If an object property is a function, then we call it a object method **(method or method function)** .
At the call site (where the function is executed), if the function is a method the `this` keyword is set to the attached object.

```js

const car = { 
  type: "Fiat", 
  model: "500", 
  color: "white" 
  }

car.colorInSpanish = function () {
  console.log(car)
  const tono = this.color === 'white' ? 'blanco' : 'no sé'
  return tono
}

car.colorInSpanish()
// blanco

const hi = function () {
  return `hi i am a ${this.type} - ${this.model}`
}

hi() === 'hi I am a undefined - undefined'
car.hi()
// true

Object.assign(car, {
  hello: function () {
    return `hi I am a ${this.type} - ${this.model}`
  }
})

// car.hello = hi

car.hello()

// Hi I am a Fiat - 500

const tonoDeCoche = car.colorInSpanish

// function () {
//   console.log(car)
//   const tono = this.color === 'white' ? 'blanco' : 'no sé'
//   return tono
// }

tonoDeCoche()
// TypeError: Cannot read property 'color' of undefined

// (function () {
//   const tono = this.color === 'white' ? 'blanco' : 'no sé'
//   return tono
// })()

const coche = car

coche.colorInSpanish()

```

### Function Constructors with `new` Keyword

`new` changes how a function and `this` behave.

At the first line in the function body `this` is set to:

```js
const this = Object.prototype

```

at the end of the function body:

```js
return this

```

`this` starts as an empty object, then the funcion is run (properties are attached to this) and `this` is returned. It is a way to create new objects from a template (Prototype).


```js
const superHero = function (name, superPower) {
  console.log('this is:', this)
  this.name = name
  this.superPower = superPower
  this.allegiance = 'Good'
}

const mySuperHero = superHero('Venom', 'Eating Heads')
const mySuperHero2 = new superHero('Hulk', 'Getting Angry') 

console.log(mySuperHero)
console.log(mySuperHero2)

```
## Arrow Functions

## Helpful Strategies

##  bind

## this and that

## call and apply

`.call()` and `.apply()` are different ways to execute a stand alone function. They allow over-writing the value of `this`.


### call

`.call()` accepts parameters that are `this` and the formal function arguments individually - like a list.

```js

fun.call(this, arg1, arg2)

```

```js

const superHero = function (name, superPower) {
  console.log('this is:', this)
  this.name = name
  this.superPower = superPower
  this.allegiance = 'Good'
    console.log('this is:', this,'???????????')
}

superHero('Wasp', 'Flying insect')

const ladyHero = {
  gender: 'Female',
  strong: true
}

const myThis = {
  ojos: 'negros'
}

superHero.call(ladyHero,'Wasp', 'Flying insect')
superHero.call(myThis,'Wasp', 'Flying insect')

```
### apply

`.apply()` accepts parameters that are `this` and the formal function arguments as an array(or array-like object).

```js

fun.apply(this, [arg1, arg2])

```

```js
superHero.apply(ladyHero, ['Wasp', 'Flying insect'])
superHero.apply(myThis, ['Wasp', 'Flying insect'])

const heros = ['black panter', 'spiderman']
superHero.call(ladyHero, ...heros)
```