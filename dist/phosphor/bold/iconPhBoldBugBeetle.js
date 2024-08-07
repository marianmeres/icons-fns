export const iconPhBoldBugBeetle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,160a12,12,0,0,0,0-24H212V120h12a12,12,0,0,0,0-24H210.45a83.7,83.7,0,0,0-18.78-38.7l16.82-16.81a12,12,0,1,0-17-17l-18,18a83.7,83.7,0,0,0-91.1,0l-18-18a12,12,0,0,0-17,17L64.33,57.3A83.7,83.7,0,0,0,45.55,96H32a12,12,0,0,0,0,24H44v16H32a12,12,0,0,0,0,24H44a83.55,83.55,0,0,0,1.55,16H32a12,12,0,0,0,0,24H54.15a84,84,0,0,0,147.7,0H224a12,12,0,0,0,0-24H210.45A83.55,83.55,0,0,0,212,160ZM128,52a60.1,60.1,0,0,1,57.82,44H70.18A60.1,60.1,0,0,1,128,52Zm12,166.79V148a12,12,0,0,0-24,0v70.79A60.09,60.09,0,0,1,68,160V120H188v40A60.09,60.09,0,0,1,140,218.79Z"/></svg>`;
}
