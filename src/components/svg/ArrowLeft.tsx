import React from "react";

const ArrowLeft = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={48}
      height={48}
    >
      <defs>
        <path
          fill="#231f20"
          id="i-1061"
          d="M41,24c0-0.276-0.112-0.527-0.294-0.707l-8.998-8.998C31.527,14.113,31.277,14,31,14c-0.553,0-1,0.447-1,1 c0,0.277,0.112,0.527,0.294,0.709L37.586,23H8c-0.553,0-1,0.447-1,1s0.447,1,1,1h29.586l-7.292,7.291C30.112,32.473,30,32.723,30,33 c0,0.553,0.447,1,1,1c0.277,0,0.527-0.113,0.708-0.295l8.998-8.998C40.888,24.527,41,24.276,41,24z"
        />
      </defs>
      <use x={0} y={0} xlinkHref="#i-1061" />
    </svg>
  );
};

export default ArrowLeft;
