import React from 'react';

var style = {
    backgroundColor: "#282c34",
    borderTop: "1px solid #E7E7E7",
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}
var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }
  
  function Footer() {
      return (
          <div>
              <div style={phantom} />
              <div style={style}>
                  <h1Style style={{ color: 'white'}}>2020, VBooker</h1Style>
              </div>
          </div>
      )
  }
  
  export default Footer