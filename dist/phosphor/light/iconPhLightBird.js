export const iconPhLightBird = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,68a10,10,0,1,1-10-10A10,10,0,0,1,174,68Zm64,12a6,6,0,0,1-2.67,5L214,99.21V120A102.12,102.12,0,0,1,112,222H24a14,14,0,0,1-10.93-22.75l.07-.09L98,97.35V76.89C98,44.57,123.89,18.15,155.72,18H156a58,58,0,0,1,55.51,41.13L235.33,75A6,6,0,0,1,238,80Zm-16.82,0L203,67.88a6,6,0,0,1-2.48-3.48A46,46,0,0,0,156,30h-.23C130.53,30.12,110,51.16,110,76.89V99.52a6,6,0,0,1-1.39,3.85L22.43,206.78A2,2,0,0,0,24,210H51.86l71.53-85.84a6,6,0,0,1,9.22,7.68L67.48,210H112a90.1,90.1,0,0,0,90-90V96a6,6,0,0,1,2.67-5Z"/></svg>`;
}
