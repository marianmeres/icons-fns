export const iconPhFillUserCircleCheck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.56,110.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.84.32,59.8,59.8,0,0,0,78.26,0,4,4,0,0,1,4.84-.32,79.86,79.86,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM84,120a44,44,0,1,0,44-44A44,44,0,0,0,84,120ZM237.66,34.34a8,8,0,0,0-11.32,0L200,60.69,189.66,50.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,237.66,34.34Z"/></svg>`;
}
