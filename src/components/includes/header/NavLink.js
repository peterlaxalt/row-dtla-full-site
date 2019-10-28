import React from 'react';
import { Router, Link, Match } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          borderTop: isCurrent ? '4px solid #000' : '4px solid transparent',
        },
      };
    }}
  />
);

export default NavLink;
