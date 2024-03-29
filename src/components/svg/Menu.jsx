import React from 'react';

const Menu = (props) => {
    return (
        <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
        <defs>
          <path fill="#ffffff" id="i-1615" d="M3,9c0-0.553,0.448-1,1-1h40c0.553,0,1,0.447,1,1s-0.447,1-1,1H4C3.448,10,3,9.553,3,9z M44,23H4c-0.552,0-1,0.447-1,1 s0.448,1,1,1h40c0.553,0,1-0.447,1-1S44.553,23,44,23z M44,38H4c-0.552,0-1,0.447-1,1s0.448,1,1,1h40c0.553,0,1-0.447,1-1 S44.553,38,44,38z" /> 
        </defs>
        <use x={0} y={0} xlinkHref="#i-1615" />
      </svg>
    );
};

export default Menu;