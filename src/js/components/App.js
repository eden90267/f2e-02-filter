import React from 'react'
import {Route} from 'react-router-dom'
import Header from "./Header";
import Content from "./Content";

const App = () =>
  <Route path="/" component={() => (
    <div>
      <Header/>
      <Content/>
    </div>
  )}/>

export default App