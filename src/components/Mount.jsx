// https://www.youtube.com/watch?v=kT6yYSwK1oA

import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import '../App.css';

export default function Mount() {
  const [show, setShow] = useState(false);

  const transition = useTransition(show, {
    // from before
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    // after
    leave: { x: -100, y: 800, opacity: 0 },
  });

  return (
    <div>
      <button
        className='mount'
        onClick={() => {
          setShow((v) => !v);
        }}
      >
        {show ? 'hide' : 'show'}
      </button>

      <div className='container'>
        {/* js normal */}
        {/* {show ? <div className='item'></div> : ''} */}

        {/* animation with spring  */}
        {transition((style, item) =>
          item ? <animated.div style={style} className='item' /> : ''
        )}
      </div>
    </div>
  );
}
