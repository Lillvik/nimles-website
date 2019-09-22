import React from 'react';

const Rss = () => (props) => {
  return (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
      <defs>
        <path fill="#ffffff" id="i-1210" d="M48,47v1H38v-1c0-20.056-16.944-37-37-37H0V0h1C26.916,0,48,21.084,48,47z M1,16H0v10h1c11.58,0,21,9.421,21,21v1h10v-1 C32,29.617,18.383,16,1,16z M7,34c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S10.86,34,7,34z" />
      </defs>
      <use x={0} y={0} xlinkHref="#i-1210" />
    </svg>
  );
};

export default Rss;