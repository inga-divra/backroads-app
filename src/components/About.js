import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Consectetur elit, nam cumque temporibus explicabo unde dolor. Nam
            cumque temporibus explicabo od unde.
          </p>
          <p>
            Voluptatem magnam elit. Asperiores sapiente harum nam cumque
            temporibus explicabo amet voluptatum.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
