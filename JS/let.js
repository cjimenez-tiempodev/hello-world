/*
Variables declared by let have their scope in the block for which they are defined,
as well as in any contained sub-blocks. In this way, let works very much like var.
The main difference is that the scope of a var variable is the entire enclosing function:
*/


{
  let a = 1;
  {
    let a = 2;
    console.log(`nested scope ${a}`);
  }
  if(true){
     let a = 3;
     console.log(`if-scope ${a}`);
     }
  function x () {
    let a = 4
    console.log(`function-scope ${a}`);
  }
  x();

  for(let a = 0; a < 1; a++){
    console.log(`for-scope ${a}`);
  }

  console.log(`block-scope ${a}`);
}
