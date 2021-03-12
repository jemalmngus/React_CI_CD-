import React, { Component } from 'react';

import { render } from 'react-dom';
class App extends Component{

  
    render() {

       const footer = {
   position:"fixed",
   left:"0",
   bottom:"0",
   width:"100%",
   backgroundColor:"#111",
   color:"white",
   textAlign:"center"
   
};
  
      return (
     <div>
<ul>
  <li><a href={'#'}>Home</a></li>
  <li><a href={'#'}>News</a></li>
  <li><a href={'#'}>Contact</a></li>
  <li style={{float:"right"}}><a style={{backgroundColor: "#4CAF50"}} href={'#'}>About</a></li>
  
</ul>
<h2>Hello Jemal</h2>
<p>This react demo </p>

<footer style={footer}>
  <p>Footer</p>
</footer>
</div>

         
      )
    }
  }
export default App;
