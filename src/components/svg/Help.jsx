import React from 'react';

const Help = (props) => {
    return (
        <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
        <defs>
          <path fill="#231f20" id="i-281" d="M22,35.5h2v2h-2V35.5z M46,26c0,12.131-9.869,22-22,22S2,38.131,2,26S11.869,4,24,4S46,13.869,46,26z M44,26 c0-11.028-8.973-20-20-20S4,14.972,4,26c0,11.029,8.973,20,20,20S44,37.029,44,26z M24,14.5c-3.859,0-7,3.141-7,7h2 c0-2.757,2.243-5,5-5s5,2.243,5,5c0,2.496-1.508,3.709-3.789,5.543c-0.275,0.221-0.557,0.447-0.845,0.684 C23.137,28.734,22,30.131,22,33.5h2c0-2.664,0.807-3.549,1.634-4.227l0.829-0.672C28.898,26.645,31,24.955,31,21.5 C31,17.641,27.859,14.5,24,14.5z" /> 
        </defs>
        <use x={0} y={0} xlinkHref="#i-281" />
      </svg>
    );
};

export default Help;