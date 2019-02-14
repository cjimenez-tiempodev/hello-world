# JavaScript Review

## let declaration

The let statement declares a block scope local variable, optionally initializing it to a value.

```
{
  let x = 1;

  if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
  }

  console.log(x);
  // expected output: 1
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

console.log(number);
// expected output: 42
```

Reference: [const MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

## Block-scoped functions

The foo() function is declared inside the { .. } block, So it's not available outside that block.
But also note that it is "hoisted" within the block, as opposed to let declarations.

```
{
	foo();					// works!

	function foo() {
		// ..
	}
}

foo();						// ReferenceError
```


## Spread operator
## Default parameters values
## Default value expressions
