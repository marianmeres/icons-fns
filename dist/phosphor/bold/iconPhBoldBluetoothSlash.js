export const iconPhBoldBluetoothSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.88,207.93l-160-176A12,12,0,0,0,47.12,48.07L115,122.75,56.8,166.4a12,12,0,1,0,14.4,19.2L116,152v72a12,12,0,0,0,19.2,9.6l47.91-35.94,24,26.41a12,12,0,0,0,17.76-16.14ZM140,200V152l5,3.77,21.87,24.06ZM116,59.74V32a12,12,0,0,1,19.2-9.6l64,48a12,12,0,0,1,0,19.2l-27.1,20.33a12,12,0,0,1-14.4-19.2L172,80,140,56v3.74a12,12,0,0,1-24,0Z"/></svg>`;
}
