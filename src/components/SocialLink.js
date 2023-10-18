import React from 'react';

const SocialLink = (props) => {
  const { href, icon, itemClass } = props;
  return (
    <li>
      <a href={href} className={itemClass} target='_blank' rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
