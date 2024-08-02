export const iconPhThinSubsetOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,208a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H200A4,4,0,0,1,204,208Zm-4-44H104a52,52,0,0,1,0-104h96a4,4,0,0,0,0-8H104a60,60,0,0,0,0,120h96a4,4,0,0,0,0-8Z"/></svg>`;
}
