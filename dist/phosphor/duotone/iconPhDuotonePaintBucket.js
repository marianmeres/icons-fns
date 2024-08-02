export const iconPhDuotonePaintBucket = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,208a16,16,0,0,1-32,0c0-16,16-40,16-40S248,192,248,208Zm-16-76.52-24,8-79.83,79.83a16,16,0,0,1-22.63,0L20.69,134.46a16,16,0,0,1,0-22.63L116.52,16Zm-93.86-29.62a20,20,0,1,0,0,28.28A20,20,0,0,0,138.14,101.86Z" opacity="0.2"/><path d="M238.66,163.56a8,8,0,0,0-13.32,0C223.57,166.23,208,190.09,208,208a24,24,0,0,0,48,0C256,190.09,240.43,166.23,238.66,163.56ZM232,216a8,8,0,0,1-8-8c0-6.8,4-16.32,8-24.08,4,7.76,8,17.34,8,24.08A8,8,0,0,1,232,216Zm2.53-76.93a8,8,0,0,0,3.13-13.24L122.17,10.34a8,8,0,0,0-11.31,0L70.25,51,45.65,26.34A8,8,0,0,0,34.34,37.66l24.6,24.6L15,106.17a24,24,0,0,0,0,33.94L99.89,225a24,24,0,0,0,33.94,0l78.49-78.49Zm-32.19-5.24-79.83,79.83a8,8,0,0,1-11.31,0L26.34,128.8a8,8,0,0,1,0-11.31L70.25,73.57l29.12,29.12a28,28,0,1,0,11.31-11.32L81.57,62.26l35-34.95L217.19,128l-11.72,3.9A8.09,8.09,0,0,0,202.34,133.83Zm-86.83-26.31,0,0a13.26,13.26,0,1,1-.05.06S115.51,107.53,115.51,107.52Z"/></svg>`;
}