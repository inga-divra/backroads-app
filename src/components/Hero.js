import React from 'react';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>backroads app</h1>
        <p>
          Nunc lacinia iaculis dolor, sit amet nisl consectetur elit. Quisquam
          rem ut similique quasi nobis.
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
