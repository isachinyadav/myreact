import React from "react";
import ReactDOM from "react-dom";
import defaultExport from 'module';
Greeting=()=>{
  return <h4>hello world</h4>;
}
ReactDOM.render(<Greeting/>,document.getElementById('root'));