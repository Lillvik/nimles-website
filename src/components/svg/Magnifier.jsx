import React from 'react';

const Magnifier = (props) => {
    return (
        <svg {...props} className="license-plate__search-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
            <defs>
                <path fill="#ffffff" id="i-411" d="M32.66,28.41C34.75,25.47,36,21.88,36,18c0-9.93-8.08-18-18-18C8.07,0,0,8.07,0,18c0,9.92,8.07,18,18,18 c3.88,0,7.47-1.25,10.41-3.34l14.76,14.75l4.24-4.24L32.66,28.41z M18,34C9.18,34,2,26.82,2,18C2,9.18,9.18,2,18,2 c8.82,0,16,7.18,16,16C34,26.82,26.82,34,18,34z" />
            </defs>
            <use x={0} y={0} xlinkHref="#i-411" />
        </svg>
    );
};

export default Magnifier;