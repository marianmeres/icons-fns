export const iconPhThinHandPalm = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,92a23.9,23.9,0,0,0-16,6.13V60a24,24,0,0,0-40.07-17.8A24,24,0,0,0,84,44V58.13A24,24,0,0,0,44,76v76a84,84,0,0,0,168,0V116A24,24,0,0,0,188,92Zm16,60a76,76,0,0,1-152,0V76a16,16,0,0,1,32,0v44a4,4,0,0,0,8,0V44a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V60a16,16,0,0,1,32,0v72.18A44.06,44.06,0,0,0,124,176a4,4,0,0,0,8,0,36,36,0,0,1,36-36,4,4,0,0,0,4-4V116a16,16,0,0,1,32,0Z"/></svg>`;
}
