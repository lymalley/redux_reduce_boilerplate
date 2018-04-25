import React from 'react';
import LoadData from './LoadData';
import {connect} from "react-redux";

const App = (props) => (
  <div>
      {console.log(props)}
    <LoadData />
  </div>
);

export default connect()(App);
