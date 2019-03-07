import React from 'react';
import html5 from './constDefinitions';
import './styles/semantic.css';

function HTML5Semantic(props) {
  return (
    <div className = "document">

    <div className="body">
    <header class="header-menu">
      <nav>
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      </nav>
    </header>
    <section>
      <article>
        <header>
          <h2>Learn HTML</h2>
          <small>Hyper Text Markup Language</small>
        </header>
        <p>Our free HTML tutorial for beginners will teach you HTML and how to create your website from the scratch. HTML isn´t difficult, so hoping you will enjoy learning.</p>
      </article>
      <article>
        <header>
          <h2>Start Quiz "HTML Basic"</h2>
          <small>You can test your HTML skills with W3docs Quiz.</small>
        </header>
        <p>You will get 5% for each correct answer for single choice questions. In multiple choice question it might be up to 5%. At the end of the Quiz, your total score will be displayed. Maximum score is 100%.</p>
      </article>
    </section>
    <aside>
      <h2>Our Books</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>PHP</p>
    </aside>
    <footer>
      <small>Company © W3docs. All rights reserved.</small>
    </footer>
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

export default HTML5Semantic;
