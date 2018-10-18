# This 

The `this` keyword can also be refered as `context` object.

## Global namespace

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

have a `this` keyword at execution time. Depending on the neighbours of the function when it is called (executed) the value  of `this` is set.

### Stand Alone Functions

A stand alone function is a funciton that is not attached to an object. (It doesn't matter if the function is nested in many other functions or objects).

#### With 'use strict' pragma

If the 'use strict' is applied, `this` is set to undefined, in that execution.

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

If the 'use strict' is not applied, `this` is set to the Global object (`global` for node, `window` for the Browser), in that execution.

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

If an object property is a function, then we call it a object method ** (method or method function) ** .
At the call site (where the function is executed), if the function is a method the `this` keyword is set to the attached object.

### Function Constructors With new Keyword

## Arrow Functions

## Helpful Strategies

##  bind

## this and that

## call and apply
