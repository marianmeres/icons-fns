export const iconPhThinBracketsAngleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M83.37,42.15,28.74,128l54.63,85.85a4,4,0,0,1-1.22,5.52A4,4,0,0,1,80,220a4,4,0,0,1-3.37-1.85l-56-88a4,4,0,0,1,0-4.3l56-88a4,4,0,1,1,6.74,4.3Zm152,83.7-56-88a4,4,0,1,0-6.74,4.3L227.26,128l-54.63,85.85a4,4,0,0,0,1.22,5.52A4,4,0,0,0,176,220a4,4,0,0,0,3.37-1.85l56-88A4,4,0,0,0,235.37,125.85Z"/></svg>`;
}
