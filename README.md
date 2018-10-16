# This 

The `this` keyword can also be refered as `context` object.

## Global Scope

Outside of all functions, objects and definitions, the scope is called the global scope/namespace/environment. `this` is the global object at the global scope.


### Node

The global object in Node is called `global`. At the global scope, this is global.

```js

  this === global // true
  
```


### Browser

The global object in the browser is called `window`. At the global scope, this is window.

```js

  this === window // true
  
```

## Stand Alone Functions

