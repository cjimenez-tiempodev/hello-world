//Destructuring

//global data
function createItems() {
  return {
    data: {
      items: {
        code: {
          language: 'JavaScript',
          description: {
            v: 'ES6',
            n: 'ECMAScript 2015'
          },
          features: [['let','const'],['arrow function', 'destructuring'],['spread','block scope']]
        }
      }
    }
  }
}

//Nested object destructuring
{
  //just language, version & name are created as variables
  //v & n are renamed to version and name
  let {data: { items: {code: {language, description: { v: version, n: name }, features }} } } = createItems();
  console.log(language, version, name);   //expected output: JavaScript ES6 ECMAScript 2015
}

//Nested array destructuring
{
  //topic1 & topic2 are created as variables
  let { data: { items: { code: {features: [ [topic1, topic2] ] }} }} = createItems();
  console.log(topic1, topic2);    //expected output let, const
}

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

const rgb = [200, 255, 100];
//skip Variables
{
  // Skip the first two items
  // Assign the only third item to the blue variable
  const [,, blue] = rgb;
  console.log(blue);    //expected output 100
}
