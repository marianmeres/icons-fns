export const iconPhLightBezierCurve = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.44,146.2A94.66,94.66,0,0,0,173.92,86H240a6,6,0,0,0,0-12H157.4a30,30,0,0,0-58.8,0H16a6,6,0,0,0,0,12H82.08a94.66,94.66,0,0,0-45.52,60.2,30,30,0,1,0,12.09,1.08,82.53,82.53,0,0,1,51.4-56.39,30,30,0,0,0,55.9,0,82.53,82.53,0,0,1,51.4,56.39,30,30,0,1,0,12.09-1.08ZM58,176a18,18,0,1,1-18-18A18,18,0,0,1,58,176Zm70-78a18,18,0,1,1,18-18A18,18,0,0,1,128,98Zm88,96a18,18,0,1,1,18-18A18,18,0,0,1,216,194Z"/></svg>`;
}
