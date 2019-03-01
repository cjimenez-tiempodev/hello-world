const html5 = {
  h1h6 : 'All six leves of Headings, with 1 beging the most important on a page and 6 beging the least. These elements are used to describe content sections on a page.',
  span : 'An inline section or block container, typically used for grouping styling elements',
  p : 'This foundational tag is used to organize paragraphs of text',
  br : 'Crates a line break useful to for writing blocks of text that need to be on different lines.',
  hr : 'Create a horizonatal rule, a sectional break in an HTML page. Typically used to denote a change in topic or section of a page.',
};

const docStructure = `
<div>
  <h3> Lorem ipsum </h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
  Pellentesque volutpat congue velit. <br />
  Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
  <hr />
  Cras sed erat sed risus fringilla sagittis. <br />
  Maecenas <span>quis arcu turpis.</span> <br />
  In pellentesque eget augue nec lacinia. <br />
  Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
  </p>
</div>
`;

export default html5;
export { docStructure};
