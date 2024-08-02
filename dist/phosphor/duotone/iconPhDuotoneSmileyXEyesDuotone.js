export const iconPhDuotoneSmileyXEyesDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm61.66-93.66a8,8,0,0,1-11.32,11.32L168,123.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L156.69,112l-10.35-10.34a8,8,0,0,1,11.32-11.32L168,100.69l10.34-10.35a8,8,0,0,1,11.32,11.32L179.31,112Zm-80-20.68L99.31,112l10.35,10.34a8,8,0,0,1-11.32,11.32L88,123.31,77.66,133.66a8,8,0,0,1-11.32-11.32L76.69,112,66.34,101.66A8,8,0,0,1,77.66,90.34L88,100.69,98.34,90.34a8,8,0,0,1,11.32,11.32ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/></svg>`;
}
