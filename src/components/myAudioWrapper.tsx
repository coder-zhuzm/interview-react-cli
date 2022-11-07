import React, { memo, useState } from 'react';
import audioCtx from '@/models/audioModel';

const myAudioWrapper = memo((props: any) => {
  const [state, setState] = useState<any>();
  const children = props.children;

  return (
    <div>
      myAudioWrapper
      <audioCtx.Provider value={{ state, setState }}>
        {React.Children.map(children, (child) => {
          return child;
        })}
      </audioCtx.Provider>
    </div>
  );
});

export default myAudioWrapper;
