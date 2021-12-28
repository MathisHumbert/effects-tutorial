import React from 'react';
import './style.scss';

export default function SectionHeader({ title }) {
  return (
    <div>
      <h6 className="section-header">{title}</h6>
    </div>
  );
}
