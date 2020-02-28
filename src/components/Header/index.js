import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [search, setSearch] = useState(false);


  const submitSearch = (e) => {
      e.preventDefault();
      alert('Searhed');

  }


  const openSearch = () => {
      setSearch(true);
  }


  const searchClass = search ? 'searchInput active' : 'searchInput';

return(
  <div className="navbar">
      
      
  </div>
 )

}

export default Header