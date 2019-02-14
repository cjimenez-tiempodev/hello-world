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
