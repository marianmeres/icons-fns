export const iconPhThinGenderFemale = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,96a76,76,0,1,0-80,75.89V204H88a4,4,0,0,0,0,8h36v28a4,4,0,0,0,8,0V212h36a4,4,0,0,0,0-8H132V171.89A76.09,76.09,0,0,0,204,96ZM60,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,96Z"/></svg>`;
}
