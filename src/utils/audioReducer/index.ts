const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setSrc':
      return { ...state, src: action?.payload };
    case 'play':
      return { ...state, playStatus: true };
    case 'pause':
      return { ...state, playStatus: false };
    default:
      throw new Error();
  }
};
export default reducer;
