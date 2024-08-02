export const iconPhLightSortDescending = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M42,128a6,6,0,0,1,6-6h72a6,6,0,0,1,0,12H48A6,6,0,0,1,42,128Zm6-58h56a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12ZM184,186H48a6,6,0,0,0,0,12H184a6,6,0,0,0,0-12ZM228.24,83.76l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48L178,62.49V144a6,6,0,0,0,12,0V62.49l29.76,29.75a6,6,0,0,0,8.48-8.48Z"/></svg>`;
}
