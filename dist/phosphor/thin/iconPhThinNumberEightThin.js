export const iconPhThinNumberEightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M147.08,119.64a44,44,0,1,0-38.16,0,52,52,0,1,0,38.16,0ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Zm36,132a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,212Z"/></svg>`;
}
