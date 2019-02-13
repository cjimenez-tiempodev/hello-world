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
## Block-scoped functions
## Spread operator
## Default parameters values
## Default value expressions
