export const iconPhThinKeyhole = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm36-108a36,36,0,1,0-57,29.22L92.34,174.39A4,4,0,0,0,96,180h64a4,4,0,0,0,3.66-5.61L149,141.22A36.15,36.15,0,0,0,164,112Zm-23.66,29.33L153.86,172H102.14l13.52-30.67a4,4,0,0,0-1.66-5.07,28,28,0,1,1,28,0A4,4,0,0,0,140.34,141.33Z"/></svg>`;
}
