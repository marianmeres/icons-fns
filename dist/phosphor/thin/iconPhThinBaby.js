export const iconPhThinBaby = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,136a8,8,0,1,1,8-8A8,8,0,0,1,92,136Zm72-16a8,8,0,1,0,8,8A8,8,0,0,0,164,120Zm-10.13,44.62a49,49,0,0,1-51.74,0,4,4,0,0,0-4.26,6.76,57,57,0,0,0,60.26,0,4,4,0,1,0-4.26-6.76ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92.11,92.11,0,0,0-90.06-92C116.26,54.07,116,71.83,116,72a12,12,0,0,0,24,0,4,4,0,0,1,8,0,20,20,0,0,1-40,0c0-.78.16-17.31,12-35.64A92,92,0,1,0,220,128Z"/></svg>`;
}
