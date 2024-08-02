export const iconPhThinHashStraightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,156H164V100h52a4,4,0,0,0,0-8H164V40a4,4,0,0,0-8,0V92H100V40a4,4,0,0,0-8,0V92H40a4,4,0,0,0,0,8H92v56H40a4,4,0,0,0,0,8H92v52a4,4,0,0,0,8,0V164h56v52a4,4,0,0,0,8,0V164h52a4,4,0,0,0,0-8Zm-116,0V100h56v56Z"/></svg>`;
}
