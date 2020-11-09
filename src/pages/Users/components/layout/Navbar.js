import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} />
          {title}
        </Link>
      </h1>
      <ul>
        <Link to='/about'>Sobre</Link>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: ' Usuário do Github',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;