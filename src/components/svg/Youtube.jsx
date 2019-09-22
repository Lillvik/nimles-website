import React from 'react';

const Youtube = (props) => {
  return (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
      <defs>
        <path fill="#ffffff" id="i-1208" d="M43.32,8.05C40.31,7.05,26.7,7,24,7S7.69,7.05,4.681,8.05C0.771,9.359,0,14.529,0,23.02v1.961 c0,8.49,0.771,13.66,4.681,14.97C7.69,40.95,21.3,41,24,41s16.31-0.05,19.32-1.05c3.91-1.31,4.68-6.479,4.68-14.97V23.02 C48,14.529,47.23,9.359,43.32,8.05z M18.95,30.609V16.23l13.13,7.899L18.95,30.609z" />
      </defs>
      <use x={0} y={0} xlinkHref="#i-1208" />
    </svg>
  );
};

export default Youtube;