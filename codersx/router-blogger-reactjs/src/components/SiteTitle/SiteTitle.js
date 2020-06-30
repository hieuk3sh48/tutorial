import React from 'react';
import Styles from './style.js';

function SiteTitle() {
  return (
    <Styles>
        <section>
          <div className="SiteTitle" data-aos="fade-up">
            <h3>Tours & Travels</h3>
            <h1>Amazing Place on Earth</h1>
            <button className='btn'>Explore</button>
          </div>
        </section>
    </Styles>
  );
}

export default SiteTitle;
