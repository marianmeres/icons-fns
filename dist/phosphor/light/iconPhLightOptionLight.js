export const iconPhLightOptionLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,192a6,6,0,0,1-6,6H160.94a13.92,13.92,0,0,1-12.52-7.74L96.84,87.11A2,2,0,0,0,95.06,86H32a6,6,0,0,1,0-12H95.06a13.92,13.92,0,0,1,12.52,7.74l51.58,103.15a2,2,0,0,0,1.78,1.11H224A6,6,0,0,1,230,192ZM152,86h72a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Z"/></svg>`;
}
