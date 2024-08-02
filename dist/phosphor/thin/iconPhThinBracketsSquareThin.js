export const iconPhThinBracketsSquareThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,44V212H80a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8Zm172-8H176a4,4,0,0,0,0,8h36V212H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36Z"/></svg>`;
}
