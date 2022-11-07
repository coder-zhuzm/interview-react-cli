import React, { memo, useState } from 'react';
import audioCtx from '@/models/audioModel';
import MyAudioWrapper from '@/components/myAudioWrapper';
import MyAudio from '@/components/myAudio';
const audioPage = memo(() => {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAudioElement#%E6%96%B9%E6%B3%95
  const list = [
    'https://kd.zhuzm.icu/?explorer/index/fileOut&path=%7Bsource%3A2926%7D%2F',
    'https://kd.zhuzm.icu/?explorer/index/fileOut&path=%7Bsource%3A2928%7D%2F',
  ];
  return (
    <div>
      <h1>audioPage</h1>
      <MyAudioWrapper>
        {list.map((item: string, index: number) => {
          return <MyAudio key={index} src={item} index={index} />;
        })}
      </MyAudioWrapper>
    </div>
  );
});

export default audioPage;
