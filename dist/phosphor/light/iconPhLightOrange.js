export const iconPhLightOrange = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M161.15,72.65A62.08,62.08,0,0,0,198,16a6,6,0,0,0-6-6h-8a62.08,62.08,0,0,0-56,35.42A62.08,62.08,0,0,0,72,10H64a6,6,0,0,0,0,12h8a50.06,50.06,0,0,1,49.66,44.26,85.95,85.95,0,1,0,39.49,6.39ZM184,22h1.64A50.07,50.07,0,0,1,136,66h-1.64A50.07,50.07,0,0,1,184,22ZM128,226a74,74,0,1,1,74-74A74.09,74.09,0,0,1,128,226Zm53.92-65A55.48,55.48,0,0,1,137,205.92a6.74,6.74,0,0,1-1,.08,6,6,0,0,1-1-11.92A43.29,43.29,0,0,0,170.08,159a6,6,0,1,1,11.84,2Z"/></svg>`;
}
