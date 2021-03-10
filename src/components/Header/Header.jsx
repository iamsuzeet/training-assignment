import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    path: '/assignment-1',
    name: 'Mini Contact Project',
  },
  {
    path: '/assignment-2',
    name: 'Booking Detail',
  },
  {
    path: '/todo-list',
    name: 'To-Do',
  },
];

const Header = () => {
  return (
    <ul className='nav nav-tabs mt-4'>
      {navLinks.map((link) => (
        <li className='nav-item' key={link.name}>
          <NavLink activeClassName='active' className='nav-link' to={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Header;
