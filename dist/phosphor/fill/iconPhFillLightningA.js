export const iconPhFillLightningA = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M173.87,118.58,78.67,221.43A8,8,0,0,1,65,214.15l13.67-57.56-50-22.44a8,8,0,0,1-2.59-12.73l95.2-102.85A8,8,0,0,1,135,25.85L121.31,83.41l50,22.43a8,8,0,0,1,2.59,12.74Zm61.71,104.57A7.91,7.91,0,0,1,232,224a8,8,0,0,1-7.16-4.42L215.05,200H176.94l-9.79,19.58a8,8,0,0,1-14.31-7.16l36-72a8,8,0,0,1,14.31,0l36,72A8,8,0,0,1,235.58,223.15ZM207.05,184,196,161.89,184.94,184Z"/></svg>`;
}
