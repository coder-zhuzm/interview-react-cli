import { message } from 'antd';

class AudioElement {
  static instance: any = null;
  state: { src: string };
  audioElement: any;
  constructor() {
    this.audioElement = new Audio();
    this.state = {
      src: '',
    };
  }
  static getInstance() {
    if (!AudioElement.instance) {
      AudioElement.instance = new AudioElement();
    }
    return AudioElement.instance;
  }
  setSrc(value: string) {
    this.audioElement.pause();
    this.state.src = value;
    this.audioElement.src = value;
    message.success('success');
  }
  play() {
    try {
      this.audioElement.play();
    } catch (error: any) {
      message.error(error.message);
      throw new Error(error);
    }
  }
  pause() {
    try {
      this.audioElement.pause();
      console.log(this.audioElement.currentTime);
    } catch (error: any) {
      message.error(error.message);
      throw new Error(error);
    }
  }
  setCurrentTime(val: number) {
    const currentTime =
      val !== 0 ? (val / 100) * this.audioElement.duration : 0;
    this.audioElement.pause();
    this.audioElement.currentTime = currentTime ? currentTime : 0;
    this.audioElement.play();
  }
  getProgress(): number {
    const percent =
      this.audioElement.currentTime.toFixed(2) /
      this.audioElement.duration.toFixed(2);
    return percent * 100;
  }
}
export default AudioElement;
