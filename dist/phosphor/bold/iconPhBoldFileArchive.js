export const iconPhBoldFileArchive = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM183,80H160V57ZM116,212V192h8a12,12,0,0,0,0-24h-8V152h8a12,12,0,0,0,0-24h-8V116a12,12,0,0,0-24,0v12H84a12,12,0,0,0,0,24h8v16H84a12,12,0,0,0,0,24h8v20H60V44h76V92a12,12,0,0,0,12,12h48V212Z"/></svg>`;
}
