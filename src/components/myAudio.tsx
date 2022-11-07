import { memo, useContext, useEffect, useReducer } from 'react';
import { useState } from 'react';
import AudioElement from '@/utils/audioMethods';
// import reducer from '@/utils/audioReducer';
import audioCtx from '@/models/audioModel';
import { Slider } from 'antd';

const myAudio = memo((props: any) => {
  const audio = AudioElement.getInstance();
  const { src, index } = props;
  // const [state, dispatch] = useReducer(reducer, { playStatus: false });
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const { state, setState } = useContext<any>(audioCtx);
  let timer: any = null;
  const { src: nowSrc } = state || '';

  useEffect(() => {
    if (nowSrc !== src) {
      setProgress(0);
      setCurrentTime(0);
      clearInterval(timer);
      setIsPlay(false);
    }
  }, [state]);

  useEffect(() => {
    return () => {
      setProgress(0);
      setCurrentTime(0);
      clearInterval(timer);
    };
  }, []);
  const get = () => {
    timer = setInterval(() => {
      const val = audio.getProgress();
      console.log(
        '🚀 ~ file: myAudio.tsx ~ line 34 ~ timer=setInterval ~ val',
        val,
      );
      if (val >= 100) {
        setProgress(100);
        audio.pause();
        setIsPlay(false);
        clearInterval(timer);
      }
      setProgress(val);
    }, 100);
  };
  const play = () => {
    if (!isPlay) {
      if (nowSrc !== src) {
        audio.setSrc(src);
        setState({ src });
        get();
      }
      setTimeout(() => {
      audio.play();
      }, 0);
    } else {
      audio.pause();
      // clearInterval(timer);
    }
    setIsPlay(!isPlay);
  };
  const setCurrentTime = (value: any) => {
    if (isPlay) {
      audio.setCurrentTime(parseFloat(value));
    }
  };
  return (
    <div>
      <h3>audio {index + 1}</h3>
      <button onClick={play}>{isPlay ? '暂停' : '播放'}</button>
      <div style={{ maxWidth: '200px' }}>
        <Slider
          defaultValue={0}
          min={0}
          max={100}
          value={nowSrc !== src ? 0 : progress}
          onChange={(value: any) => {
            setCurrentTime(value);
          }}
        />
      </div>
    </div>
  );
});

export default myAudio;
