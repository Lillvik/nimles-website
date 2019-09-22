import React from 'react';

const EuStars = (props) => {
    return (
        <svg {...props} viewBox="0 0 540 540" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={20} height={20}>
            <desc>European flag</desc>
            <defs>
                <g id="d">
                    <g id="b">
                        <path id="a" d="M0 0v1h.5z" transform="translate(0,-1)rotate(18)" />
                        <use xlinkHref="#a" transform="scale(-1,1)" />
                    </g>
                    <g id="c">
                        <use xlinkHref="#b" transform="rotate(72)" />
                        <use xlinkHref="#b" transform="rotate(144)" />
                    </g>
                    <use xlinkHref="#c" transform="scale(-1,1)" />
                </g>
            </defs>
            <g fill="#fc0" transform="scale(30)translate(9,9)">
                <use xlinkHref="#d" y={-6} />
                <use xlinkHref="#d" y={6} />
                <g id="e">
                    <use xlinkHref="#d" x={-6} />
                    <use xlinkHref="#d" transform="rotate(150)translate(0,6)rotate(66)" />
                    <use xlinkHref="#d" transform="rotate(120)translate(0,6)rotate(24)" />
                    <use xlinkHref="#d" transform="rotate(60)translate(0,6)rotate(12)" />
                    <use xlinkHref="#d" transform="rotate(30)translate(0,6)rotate(42)" />
                </g>
                <use xlinkHref="#e" transform="scale(-1,1)" />
            </g>
        </svg>
    );
};

export default EuStars;