import React from 'react';
import html5 from './constDefinitions';

function NewHTML5(props) {
  return (
    <div className = "document">
    <h1>HTML5 New Tags</h1>
    <hr />

    <div className="example">

      <div className="semantic">

      <header>
    		<nav>
    			<ul>
    				<li>Your menu1</li>
    			</ul>
    		</nav>
    	</header>

	    <section>

  		<article>
  			<header>
  				<h2>Article title 1</h2>
  				<p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="ref">Writer</a> - <a href="#comments">6 comments</a></p>
  			</header>
  			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  		</article>

  		<article>
  			<header>
  				<h2>Article title 2</h2>
  				<p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="ref">Writer</a> - <a href="#comments">6 comments</a></p>
  			</header>
  			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  		</article>

	    </section>

    	<aside>
    		<h2>About section</h2>
    		<p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    	</aside>

    	<footer>
    		<p>Copyright 2009 Your name</p>
    	</footer>

      </div>

      </div>

      <div>
        <p>
          <span>header: </span>{html5.header}<br/>
          <span>nav: </span>{html5.nav}<br/>
          <span>section: </span>{html5.section}<br/>
          <span>article: </span>{html5.article}<br/>
          <span>time: </span>{html5.time}<br/>
          <span>aside: </span>{html5.aside}<br/>
          <span>footer: </span>{html5.footer}
        </p>
      </div>

    </div>
  );
}

export default NewHTML5;
