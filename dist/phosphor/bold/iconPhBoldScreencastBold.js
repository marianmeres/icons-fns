export const iconPhBoldScreencastBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,60V196a20,20,0,0,1-20,20H172a12,12,0,0,1,0-24h36V64H48v4a12,12,0,0,1-24,0V60A20,20,0,0,1,44,40H212A20,20,0,0,1,232,60ZM36,176a12,12,0,0,0,0,24,4,4,0,0,1,4,4,12,12,0,0,0,24,0A28,28,0,0,0,36,176Zm0-40a12,12,0,0,0,0,24,44.05,44.05,0,0,1,44,44,12,12,0,0,0,24,0A68.07,68.07,0,0,0,36,136Zm0-40a12,12,0,0,0,0,24,84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,36,96Z"/></svg>`;
}
