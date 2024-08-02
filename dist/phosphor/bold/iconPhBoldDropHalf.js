export const iconPhBoldDropHalf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM194.08,160H140V144h56A68,68,0,0,1,194.08,160ZM140,120V104h47a115,115,0,0,1,5.68,16Zm19.3-58.71A197.29,197.29,0,0,1,173.68,80H140V41.46A243.5,243.5,0,0,1,159.3,61.29ZM60,144c0-33.31,20-63.37,36.7-82.71A243.5,243.5,0,0,1,116,41.46V210.92A68.1,68.1,0,0,1,60,144Zm80,66.92V184h42.94A68,68,0,0,1,140,210.92Z"/></svg>`;
}
