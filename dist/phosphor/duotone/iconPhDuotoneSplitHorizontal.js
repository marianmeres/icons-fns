export const iconPhDuotoneSplitHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,128l-32,32V96ZM56,160V96L24,128Z" opacity="0.2"/><path d="M104,40a8,8,0,0,0-8,8v72H64V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,64,160V136H96v72a8,8,0,0,0,16,0V48A8,8,0,0,0,104,40ZM48,140.69,35.31,128,48,115.31Zm189.66-18.35-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34ZM208,140.69V115.31L220.69,128Z"/></svg>`;
}
