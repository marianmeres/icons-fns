export const iconPhThinCookieThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M161.66,166.34a8,8,0,1,1-11.32,0A8,8,0,0,1,161.66,166.34Zm-75.32-8a8,8,0,1,0,11.32,0A8,8,0,0,0,86.34,158.34Zm3.32-56a8,8,0,1,0,0,11.32A8,8,0,0,0,89.66,102.34Zm36.68,16a8,8,0,1,0,11.32,0A8,8,0,0,0,126.34,118.34ZM228,128A100,100,0,1,1,128,28a4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44,4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44A4,4,0,0,1,228,128Zm-8.08,3.84a52.08,52.08,0,0,1-47.78-48,52.08,52.08,0,0,1-48-47.78,92,92,0,1,0,95.76,95.76Z"/></svg>`;
}
