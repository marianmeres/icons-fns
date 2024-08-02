export const iconPhDuotoneEyedropperSample = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.3,160h89l-38.62,38.63a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67,5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0A32.07,32.07,0,0,1,52.3,160ZM207.23,47.51c-11.07-10.49-28.65-9.83-39.44,1l-25,25.1-4.89-4.88a16,16,0,0,0-22.63,0l-9,9a8,8,0,0,0,0,11.31L167,149.66a8,8,0,0,0,11.31,0l9-9a16,16,0,0,0,0-22.63l-4.88-4.89L207.8,87.66A28,28,0,0,0,207.23,47.51Z" opacity="0.2"/><path d="M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.65,13.65,0,0,0,36,219.29a15.9,15.9,0,0,0,17.71,3.36L71.24,215a39.9,39.9,0,0,0,37.05-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.9L57,189.41a8,8,0,0,0,.25-5.75,24,24,0,0,1,.1-15.69H122Zm41-41H70.07l44-44,33.94,34Zm64.18-70-25.37,25.52a8,8,0,0,0,0,11.31l4.89,4.88a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,5.65,2.34h0a8,8,0,0,0,5.66-2.36l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"/></svg>`;
}
