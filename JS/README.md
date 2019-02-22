# JavaScript Review

## let declaration

The let statement declares a block scope local variable, optionally initializing it to a value.

```
{
  let x = 1;

  if (x === 1) {
    let x = 2;
    console.log(x);   // expected output: 2
  }
  console.log(x);   // expected output: 1
}
```

Reference: [let MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

## const declaration

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

```
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);    // expected output: 42
```

Reference: [const MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

## Block-scoped functions

The foo() function is declared inside the { .. } block, So it's not available outside that block.
But also note that it is "hoisted" within the block, as opposed to let declarations.

```
{
	foo();   // works!

	function foo() {
		// ..
	}
}

foo();    // ReferenceError
```

## Spread operator (...)

When ... is used in front of an array it acts to "spread" it out into its individual values.

```
{
  //Array to values
  const a = [1,2,3,4,5];
  const b = [ 0, ...a, 6 ];
  console.log(...a);    //expected output: 1 2 3 4 5
  console.log(b); // expected output: [0,1,2,3,4,5,6]

  //Values to array
  function foo(...z) {
	  console.log( z );   //expected output: [1,2,3,4,5]
  }

  foo( 1, 2, 3, 4, 5 );

  //rest parameters
  function foo(x, y, ...z) {
	  console.log( x, y, z );
  }
  //The ...z argument "gather the rest of the values (if any) into an array called z."
  foo( 1, 2, 3, 4, 5 );			// 1 2 [3,4,5]
}
```

## Default parameters values

```
//setting a default value for a function parameter
{
  function foo (n = 0, a = [0], o = {'value': '0'}) {
    console.log(n, a, o);
  }

  foo();    //expected output: 0 [0] {value:0}
  foo(1);   //expected output: 0 [0] {value:0}
  foo(1, [1,2]);    //expected output: 1 [1,2] {value:0}
}
```

## Default value expressions

Default values can be also a function call.

```
{
  //function used as parameters
  function missedData(){
    return 'there is no data to show';
  }

  //function with default values, b is equal to function
  function test (a=1, b = missedData() ) {
    console.log(a, b);
  }

  test();   //expected output: 1 "there is no data to show"
  test(10);   //expected output: 10 "there is no data to show"
  test(10, undefined);    //expected output: 10 "there is no data to show"
  test(10, null);   //expected output: 10 "there is no data to show"
  test(10, {'language': 'JavaScript'}); //expected output: 10 {language: JavaScript}
}
```

## Destructuring

ES6 introduces a new syntactic feature called destructuring

```
//Destructuring array
const array = [1,2,3];
{
  //before to ES6
  let a = array[0];
  let b = array[1];
  let c = array[2];
  console.log(a,b,c);   //expected output: 1,2,3
}
{
  //ES6
  let [a, b, c] = array;
  console.log(a,b,c);   //expected output: 1,2,3
}

//Destructuring object
const obj = {'languaje': 'JavaScript', 'version': 'ES6'};
{
  //before to ES6
  let languaje = obj.languaje;
  let version = obj.version;
  console.log(languaje, version);   //expected output: JavaScript ES6
}
{
  //ES6
  let {languaje, version} = obj;
  console.log(languaje, version);
}
```

## Object Property Assignment Pattern (renaming)

```
allows you to assign a property to a different variable name

const obj = {'x': 'JavaScript', 'y': 'ES6'};
{
  //source: target
  let {x: languaje, y: version} = obj;
  console.log(languaje, version);   //expected output JavaScript ES6
}
```

## Object Literal Extensions
Define a property that is the same name as a lexical identifier, you can shorten it from x: x to x
```
{
  const x = 1, y = 2, f1 = function () {return 'f1'}, f2 = function () {return 'f2'};

  //Properties
  let obj = {
    x,
    y
  };
  console.log(x, y);    //expected output 1 2

  //Methods
  let func = {
    f1,
    f2
  };
  console.log(func.f1());   //expected output f1
  console.log(func.f2());   //expected output f2
}
```

## Template literals

As you can see, we used the `..` around a series of characters, which are interpreted as a string literal, but any expressions of the form ${..} are parsed and evaluated inline immediately

```
//general scope
let name = "JavaScript";
//pre-ES6
{
  //blocked scope
  let greeting = "Hello world, this is " + name + "!";
  console.log(greeting);    //expected output: Hello world, this is JavaScript!
}
//ES6
{
  //blocked scope
  let greeting = `Hello world
this is ${name}!`;  //works as line-break
  console.log(greeting);    //expected output: Hello world,
                            //                 this is JavaScript!
}
```

## Interpolated Expressions

Any valid expression is allowed to appear inside ${..} in an interpolated string literal, including function calls

```
//global scope
{
  //blocked scope
  function upper(s) {
	  return s.toUpperCase();
  }

  let who = "reader";
  let language = 'JavaScript';

  let message = `${upper( `${who}s` )} welcome to ${upper( `${language}` )}!`;

  console.log( message );    //expected output: READERS welcome to JAVASCRIPT!
}
```
Warning: As a word of caution, be very careful about the readability of your code

## Tagged Template Literals

```
//global scope
{
  //blocked scope
  function foo(strings, ...values) {
    console.log( strings );   // is an array of all the plain strings
    console.log( values );    //array of the results of the already-evaluated interpolation expressions found in the string literal.
  }

  var language = "javaScript";

  foo`This is ${language} ES6`;   //expected output
                                // [ "Everything is ", " ES6"]
                                // [ "JavaScript" ]
}
```

## Arrow functions

The arrow function definition consists of a parameter list (of zero or more parameters, and surrounding ( .. ) if there's not exactly one parameter), followed by the => marker, followed by a function body.

```
//global scope
//PRE-ES6
{
  //blocked scope
 function foo(x,y) {
	return x + y;
 }
}

//ES6
{
  //blocked scope
 let foo = (x,y) => x + y;    // If there's only one expression, and you omit the surrounding { .. }, there's an implied return in front of the expression
}

//Arrow functions are always function expressions; there is no arrow function declaration. It also should be clear that they are anonymous function expressions

//Note: All the capabilities of normal function parameters are available to arrow functions, including default values, destructuring, rest parameters, and so on.


//it is easeier to add function as parameter
{
  let a = [1,2,3,4,5];
  a = a.map( v => v * 2 );
  console.log( a );   //expected output: [2,4,6,8,10]
}
```

## for..of loops

Let's compare for..of to for..in to illustrate the difference:

```
//global scope
{
  //block scope
  var a = ["a","b","c","d","e"];

  for (var idx in a) {
	  console.log( idx );    //expected output: 0 1 2 3 4
  }

  for (var val of a) {
    console.log( val );   //expected output: // "a" "b" "c" "d" "e"
  }

}
```

for..in loops over the keys/indexes in the a array, while for..of loops over the values in a.

## Symbols

 New primitive type has been added to JavaScript: the symbol.
 This is how to create a Symbol

 ```
 //global scope
{
  //block scope
  let sym = Symbol( "symbol description" );
  console.log(typeof sym);		//expected output:  "symbol"

  //The description, if provided, is solely used for the stringification representation of the symbo
  console.log(sym.toString());    //expected output: Symbol(symbol description)
}
```

## Classes

```
Classes are in fact "special functions"

{
  class foo {   //lass Foo implies creating a (special) function of the name Foo
    constructor (a, b){   //identifies the signature of that Foo(..) function, as well as its body contents.
      this.x = a;
      this.y = b;
    }
    addition(){
      return this.x + this.y;
    }
  }

  let f = new foo(1,2);
  console.log(f.addition());    //expected output: 3
  console.log(f.x);   //expected output: 1
}
```

## Promises

Let's clear up some misconceptions: Promises are not about replacing callbacks. Promises provide a trustable intermediary -- that is, between your calling code and the async code that will perform the task -- to manage callbacks.

A Promise can only have one of two possible resolution outcomes: fulfilled or rejected, with an optional single value
Promises can only be resolved (fulfillment or rejection) once.

To construct a promise instance, use the Promise(..) constructor:

* Constructor
```
// do something asynchronous which eventually calls either:
{
  let promise = new Promise( function pr(resolve,reject){
	//  resolve('success message'); // fulfilled
  //  or
  //  reject("failure reason"); // rejected
  } );
}
```

* How to use it

```
promise.then(function(result) {
  console.log(result); // "success message!"
}, function(err) {
  console.log(err); // failure reason"
});
```

The Promise(..) constructor takes a single function (pr(..)), which is called immediately and receives two control functions as arguments, usually named resolve(..) and reject(..). They are used as:

* If you call reject(..), the promise is rejected, and if any value is passed to reject(..), it is set as the reason for rejection.

* If you call resolve(..) with no value, or any non-promise value, the promise is fulfilled.

* If you call resolve(..) and pass another promise, this promise simply adopts the state -- whether immediate or eventual -- of the passed promise (either fulfillment or rejection)

## Import & Export

Import:
The static import statement is used to import bindings which are exported by another module.

* Syntax
import defaultExport from "module-name";

Export:
The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

export { name1, name2, …, nameN };

## Prototype inheritance

JavaScript objects have a link to a prototype object
When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```
//Prototype inheritance
{
  let parent = function (){
    this.property1 = 'property1';
    this.property2 = 'property2';
  }

  let child = new parent();
  console.log(child); // expected output: {property1: 'property1', property2: 'property2'}

  //Parent updated
  parent.prototype.property3 = 'property3'; // __proto__ = {property3: 'property3'}
  console.log(parent);

  //Property3 inherited to child
  console.log(child.property3);   //Expected output: property3
}
```

## Mutable/Immutable

Mutable is a type of variable that can be changed.
In JavaScript, only objects and arrays are mutable, not primitive values.

* Mutable
A mutable object is an object whose state can be modified after it is created.

* Immutable
Immutable are the objects whose state cannot be changed once the object is created.

## Datatypes

JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

The latest ECMAScript standard defines seven data types:

### Six data types that are primitives:
*  Boolean:
    Boolean represents a logical entity and can have two values: true, and false.
    ```
    {
      let boolean = true;
      console.log(boolean);   //expected output: true
      console.log(typeof(boolean));   //expected output: boolean
    }
    ```
*  Null
    The Null type has exactly one value: null
    ```
    {
      let n = null;
      console.log(n);   //expected output: null
      console.log(typeof(n));   //expected output: object
    }
    ```
*  Undefined:
    A variable that has not been assigned a value has the value undefined
    ```
    {
      let u;
      console.log(n);   //expected output: undefined
      console.log(typeof(u));   //expected output: undefined
    }
    ```
*  Number:
    According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (numbers between -(253 -1) and 253 -1).
    ```
    {
      let number = 10;
      console.log(n);   //expected output: 10
      console.log(typeof(number));   //expected output: number
    }
    ```

*  String:
    JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values
    ```
    {
      let s = 'text';
      console.log(n);   //expected output: text
      console.log(typeof(s));   //expected output: string
    }
    ```
*  Symbol (new in ECMAScript 6):
    A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

### and Object
    Objects can be seen as a collection of properties.
    ```
    {
      let o = {'null': null, 'number': 10, 'string':'text'};
      console.log(o);   //expected output: {'null': null, 'number': 10, 'string':'text'}
      console.log(typeof(o));   //expected output: object
    }
    ```
