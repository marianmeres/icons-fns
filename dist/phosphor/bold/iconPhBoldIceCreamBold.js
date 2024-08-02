export const iconPhBoldIceCreamBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,116a32.14,32.14,0,0,0-16.37-27.92,84,84,0,0,0-167.26,0,32,32,0,0,0,12.51,59.77l53.75,94.07a20,20,0,0,0,34.74,0l53.75-94.07A32,32,0,0,0,228,116ZM58.39,108.16A12,12,0,0,0,68,96.4V96a60,60,0,0,1,120,0v.4a12,12,0,0,0,9.61,11.76A8,8,0,0,1,196,124H60a8,8,0,0,1-1.61-15.84Zm113,39.84-16.5,28.88L138.39,148Zm-86.78,0h26.14l30.32,53.06L128,223.94Z"/></svg>`;
}
