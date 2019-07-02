import React from 'react';
import { VisibilityFilters } from '../actions/constant'

const Footer = ({ buttonActive, changeFilter }) => {
    return (
      <div>
        <button onClick={() => changeFilter(VisibilityFilters.SHOW_ALL)}>Show all</button>
        <button onClick={() => changeFilter(VisibilityFilters.SHOW_COMPLETED)}>SHOW_COMPLETED</button>
        <button onClick={() => changeFilter(VisibilityFilters.SHOW_ACTIVE)}>SHOW_ACTIVE</button>
      </div>
    )
};

export default Footer;