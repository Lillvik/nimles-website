import React from 'react';

const Quote = (props) => {
  return (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
      <defs>
        <path fill="#231f20" id="i-295" d="M14,27h2v2h-2V27z M14,23h2v-2h-2V23z M14,35h2v-2h-2V35z M14,17h2v-2h-2V17z M24,9H14v2h10V9z M40,10.586V48H8V0h21.414 L40,10.586z M30,10h6.586L30,3.414V10z M38,12H28V2H10v44h28V12z M18,35h16v-2H18V35z M18,17h16v-2H18V17z M18,29h16v-2H18V29z M18,23h16v-2H18V23z" />
      </defs>
      <use x={0} y={0} xlinkHref="#i-295" />
    </svg>
  );
};

export default Quote;