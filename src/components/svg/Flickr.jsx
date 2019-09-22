import React from 'react';

const Flickr = (props) => {
  return (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
      <defs>
        <path fill="#ffffff" id="i-1227" d="M37,14c-5.51,0-10,4.49-10,10s4.49,10,10,10s10-4.49,10-10S42.51,14,37,14z M37,32c-4.41,0-8-3.59-8-8s3.59-8,8-8 s8,3.59,8,8S41.41,32,37,32z M21,24c0,5.51-4.49,10-10,10S1,29.51,1,24s4.49-10,10-10S21,18.49,21,24z" />
      </defs>
      <use x={0} y={0} xlinkHref="#i-1227" />
    </svg>
  );
};

export default Flickr;