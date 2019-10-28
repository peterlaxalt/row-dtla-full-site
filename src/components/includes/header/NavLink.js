import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          borderTop: isCurrent ? '4px solid #000' : '4px solid transparent',
        },
      };
    }}
  />
);

export default NavLink;
