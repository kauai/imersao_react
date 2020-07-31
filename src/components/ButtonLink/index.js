import React from 'react';
import PropTypes from 'prop-types';
// import './style.css'
import { Button } from './style';

const ButtonLink = ({ className, href, children }) => (
  <Button as="a" className={className} href={href}>
    {children}
  </Button>
);

ButtonLink.defaultProps = {
  href: '/testes',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
