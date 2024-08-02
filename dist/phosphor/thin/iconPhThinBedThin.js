export const iconPhThinBedThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,76H28V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H244v36a4,4,0,0,0,8,0V112A36,36,0,0,0,216,76ZM28,84h80v80H28Zm88,80V84H216a28,28,0,0,1,28,28v52Z"/></svg>`;
}
