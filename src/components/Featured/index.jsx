import React from 'react';
import photos from '../../data';

import './style.scss';

export default function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} alt="green" />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondUrl} alt="lily" />
      </div>
    </section>
  );
}
