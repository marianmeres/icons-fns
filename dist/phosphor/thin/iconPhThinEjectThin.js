export const iconPhThinEjectThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,156H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM48.23,132H207.77A12,12,0,0,0,219,124.67a11.68,11.68,0,0,0-2.33-12.8L143,34.37a20.75,20.75,0,0,0-29.92,0L39.3,111.87A11.68,11.68,0,0,0,37,124.67,12,12,0,0,0,48.23,132ZM45.1,117.39l73.73-77.51a12.78,12.78,0,0,1,18.34,0l73.73,77.51a3.66,3.66,0,0,1,.77,4.12,4.1,4.1,0,0,1-3.9,2.49H48.23a4.1,4.1,0,0,1-3.9-2.49A3.66,3.66,0,0,1,45.1,117.39Z"/></svg>`;
}
