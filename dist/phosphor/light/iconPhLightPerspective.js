export const iconPhLightPerspective = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,122H222V48a14,14,0,0,0-16.5-13.77L45.5,63.32A14,14,0,0,0,34,77.09V122H16a6,6,0,0,0,0,12H34v44.91a14,14,0,0,0,11.5,13.77l160,29.09A14.2,14.2,0,0,0,208,222a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM46,77.09a2,2,0,0,1,1.64-2l160-29.1.37,0a2,2,0,0,1,2,2v74H46ZM210,208a2,2,0,0,1-.72,1.53,2,2,0,0,1-1.64.44l-160-29.1a2,2,0,0,1-1.64-2V134H210Z"/></svg>`;
}
