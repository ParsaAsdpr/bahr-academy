import React from 'react';

const ACBox = props => {
    return ( 
        <div
        className="p-7 rounded-lg"
        style={{ boxShadow: "0 0 15px 1px #00000022" }}
      >
          {props.children}
          </div>
     );
}
 
export default ACBox;