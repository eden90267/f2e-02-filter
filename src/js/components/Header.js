import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
import Logo from './Logo'

import '../../css/components/ui/Header.scss'

const Header = () =>
  <header>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="row align-items-center">
            <h1>
              <Logo/>
            </h1>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row align-items-center search">
            <SearchIcon className="search_icon" size={20} color={'#fff'}/>
            <input type="text" placeholder="Explore your own activities"/>
          </div>
        </div>
      </div>
    </div>
  </header>

export default Header