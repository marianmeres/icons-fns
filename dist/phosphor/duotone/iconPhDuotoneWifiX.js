export const iconPhDuotoneWifiX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.39,104.34,134.15,213.12a8,8,0,0,1-12.3,0L17.8,87.69a7.79,7.79,0,0,1,1.31-11.21A179.58,179.58,0,0,1,128,40a181.82,181.82,0,0,1,33.06,3,7.94,7.94,0,0,1,4.17,2.21L224,104Z" opacity="0.2"/><path d="M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80Zm-33.06,39.5a8,8,0,0,0-11.27,1L128,208,24.09,82.74A170.76,170.76,0,0,1,128,48c2.54,0,5.11.06,7.65.17a8,8,0,0,0,.7-16c-2.77-.12-5.58-.18-8.35-.18A186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77l57.34-69.12A8,8,0,0,0,196.6,137.84Z"/></svg>`;
}