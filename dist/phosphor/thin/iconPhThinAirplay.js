export const iconPhThinAirplay = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M131,157.4a4,4,0,0,0-6.07,0l-48,56a4,4,0,0,0,3,6.6h96a4,4,0,0,0,3-6.6ZM88.7,212,128,166.15,167.3,212ZM228,64V176a20,20,0,0,1-20,20h-8a4,4,0,0,1,0-8h8a12,12,0,0,0,12-12V64a12,12,0,0,0-12-12H48A12,12,0,0,0,36,64V176a12,12,0,0,0,12,12h8a4,4,0,0,1,0,8H48a20,20,0,0,1-20-20V64A20,20,0,0,1,48,44H208A20,20,0,0,1,228,64Z"/></svg>`;
}
