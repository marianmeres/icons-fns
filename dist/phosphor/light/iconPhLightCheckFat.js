export const iconPhLightCheckFat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241.87,69.66l-24-23.56a14,14,0,0,0-19.77,0L104,139,65.9,102.1a14,14,0,0,0-19.8,0l-24,24a14,14,0,0,0,0,19.79l71.62,72a14,14,0,0,0,19.8,0L241.91,89.5A14,14,0,0,0,241.87,69.66ZM233.42,81,105,209.41a2,2,0,0,1-2.81,0l-71.62-72a2,2,0,0,1,0-2.82l24-24A2,2,0,0,1,56,110a2.12,2.12,0,0,1,1.5.64l42.35,41.08a6,6,0,0,0,8.39,0l98.37-97.11a2,2,0,0,1,2.87,0l24,23.56A2,2,0,0,1,233.42,81Z"/></svg>`;
}
