export const iconPhThinOrange = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M155.62,72.69A60.09,60.09,0,0,0,196,16a4,4,0,0,0-4-4h-8a60.09,60.09,0,0,0-56,38.5A60.09,60.09,0,0,0,72,12H64a4,4,0,0,0,0,8h8a52.06,52.06,0,0,1,51.84,48.11,84,84,0,1,0,31.78,4.58ZM184,20h3.85A52.07,52.07,0,0,1,136,68h-3.85A52.07,52.07,0,0,1,184,20ZM128,228a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,228Zm51.94-67.34A53.45,53.45,0,0,1,136.66,204a5,5,0,0,1-.66.05,4,4,0,0,1-.66-7.95,45.33,45.33,0,0,0,36.72-36.71,4,4,0,1,1,7.88,1.32Z"/></svg>`;
}
