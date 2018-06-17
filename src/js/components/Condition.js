import React from 'react'

import 'components/Condition.scss'



const Condition = () =>
  <div className="condition">
    <div className="condition-location">
      <h3>地區</h3>
      <div className="dropdown">
        <button id="ddLocation" data-toggle="dropdown" className="btn dropdown-toggle rounded-0">
          請選擇地區
        </button>
        <div className="dropdown-menu rounded-0" aria-labelledby="ddLocation">
          <a className="dropdown-item active" href="#">三民區</a>
          <a className="dropdown-item" href="#">內門區</a>
          <a className="dropdown-item" href="#">美濃區</a>
        </div>
      </div>
    </div>
    <div className="condition-advanced">
      <h3>進階篩選</h3>
      <ul className="list-unstyled">
        <li>
          <input type="checkbox" id="chkPointIsFree"/>
          <label htmlFor="chkPointIsFree">景點付費</label>
        </li>
        <li>
          <input type="checkbox" id="chkAllIsOpen"/>
          <label htmlFor="chkAllIsOpen">全天候開放</label>
        </li>
      </ul>
    </div>
  </div>


export default Condition;