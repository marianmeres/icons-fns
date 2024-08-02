export const iconPhThinWaveSawtoothThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.1,131.41l-104,64a4,4,0,0,1-2.1.59,4,4,0,0,1-4-4V71.16L26.1,131.41a4,4,0,0,1-4.2-6.82l104-64A4,4,0,0,1,132,64V184.84l97.9-60.25a4,4,0,1,1,4.2,6.82Z"/></svg>`;
}
