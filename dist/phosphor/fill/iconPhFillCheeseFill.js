export const iconPhFillCheeseFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v16a8,8,0,0,0,8,8h7.46c13.45,0,24.79,11,24.54,24.46A24,24,0,0,1,32,160H24a8,8,0,0,0-8,8v24a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32ZM80,184a32,32,0,0,1,64,0Zm88-48a32,32,0,0,1-31-40h62a32,32,0,0,1-31,40ZM78.51,80,185.12,48a40.06,40.06,0,0,1,38.07,32Z"/></svg>`;
}
