export const iconPhDuotoneMeteor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,160a32,32,0,1,1-32-32A32,32,0,0,1,128,160Z" opacity="0.2"/><path d="M96,120a40,40,0,1,0,40,40A40,40,0,0,0,96,120Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,96,184Zm125.66-61.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,221.66,122.34Zm-56,11.32a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,11.32Zm64-64-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32ZM122.34,90.34l72-72a8,8,0,1,1,11.32,11.32l-72,72a8,8,0,0,1-11.32-11.32ZM146.91,199.6a8,8,0,0,1,0,11.31A72,72,0,1,1,45.09,109.09l82.74-82.75a8,8,0,1,1,11.32,11.32L56.4,120.4a56,56,0,0,0,79.2,79.2A8,8,0,0,1,146.91,199.6Z"/></svg>`;
}
