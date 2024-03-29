import React from 'react';

const Pencil = (props) => {
    return (
        <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48}>
        <defs>
          <path fill="#231f20" id="i-332" d="M45.961,2.545l-0.533-0.533C44.309,0.887,43.426,0,42,0c-1.365,0-1.809,0.383-2.535,1.119L7.293,33.293L7.165,33.42 L0.986,47.014l13.594-6.18L46.846,8.568C47.412,8.008,47.998,7.428,48,6.002C48.002,4.57,47.01,3.586,45.961,2.545z M8.029,41.615 l-1.645-1.645l1.928-4.244l3.961,3.961L8.029,41.615z M14,38.586L9.414,34L35,8.414L39.586,13L14,38.586z M45.438,7.148L41,11.586 L36.414,7l4.293-4.293l0.18-0.182C41.406,2,41.406,2,42,2c0.568,0,1.053,0.461,2.008,1.422l0.543,0.543 C45.477,4.883,46,5.43,46,5.998C45.998,6.592,45.912,6.678,45.438,7.148z" /> 
        </defs>
        <use x={0} y={0} xlinkHref="#i-332" />
      </svg>
    );
};

export default Pencil;