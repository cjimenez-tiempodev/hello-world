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

#Object Property Assignment Pattern

```
allows you to assign a property to a different variable name

const obj = {'x': 'JavaScript', 'y': 'ES6'};
{
  //source: target
  let {x: languaje, y: version} = obj;
  console.log(languaje, version);   //expected output JavaScript ES6
}
```
