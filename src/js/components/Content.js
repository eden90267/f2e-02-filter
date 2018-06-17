import React from 'react'
import Condition from "./Condition";
import SearchContent from "./SearchContent";

const Content = () =>
  <main>
    <article className="container">
      <div className="row">
        <div className="col-sm-4 col-md-3">
          <div className="row">
            <Condition/>
          </div>
        </div>
        <div className="col-sm-8 col-md-9">
          <div className="row">
            <SearchContent/>
          </div>
        </div>
      </div>
    </article>
  </main>

export default Content