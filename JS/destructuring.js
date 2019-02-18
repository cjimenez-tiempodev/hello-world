//Destructuring

//mappings/transformation
  var o1 = { a: 1, b: 2, c: 3 };
{
	o2 = {};
  //source:target
  ( { a: o2.x, b: o2.y, c: o2.z } = o1 );
  console.log( o2.x, o2.y, o2.z );	// 1 2 3
}

//object to array
{
	a2 = [];
  ( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
  console.log( a2 );	// [1,2,3]
}

//Direct asignation
{
  var a1 = [ 1, 2, 3 ],
	o2 = {};

  [ o2.a, o2.b, o2.c ] = a1;
  console.log( o2.a, o2.b, o2.c );	// 1 2 3
}

//swap variables
{
  var x = 10, y = 20;
  [ y, x ] = [ x, y ];

  console.log( x, y );				// 20 10
}
