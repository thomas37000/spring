// https://www.youtube.com/watch?v=kT6yYSwK1oA

import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import '../App.css';

export default function Mount2() {
  const [items, setItems] = useState([]);
  console.log(items);
  
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  return (
    <div>
      <button
        className='mount2'
        onClick={() => {
          setItems((v) =>
            v.lenght
              ? []
              : [
                  { y: -100, delay: 200 },
                  { y: -50, delay: 400 },
                  { y: 0, delay: 600 },
                ]
          );
        }}
      >
        {items.length ? 'hide' : 'display'}
      </button>

      <div className='container'>
        {transition((style, item) =>
          item ? <animated.div style={style} className='item' /> : ''
        )}
      </div>
    </div>
  );
}
