export const iconPhLightMarkerCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM86,207.64V176a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v31.64a90.32,90.32,0,0,1-84,0ZM104,142h48a2,2,0,0,1,2,2v18H102V144A2,2,0,0,1,104,142Zm11.54-12L126,79.59a2,2,0,0,1,3.92,0L140.46,130Zm76.1,61.64A92.76,92.76,0,0,1,182,200V176a14,14,0,0,0-14-14h-2V144a14,14,0,0,0-13.27-14l-11-52.9a14,14,0,0,0-27.42,0l-11,52.9A14,14,0,0,0,90,144v18H88a14,14,0,0,0-14,14v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z"/></svg>`;
}
