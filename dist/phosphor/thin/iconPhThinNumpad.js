export const iconPhThinNumpad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,48A12,12,0,1,1,64,36,12,12,0,0,1,76,48Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,36Zm64,24a12,12,0,1,0-12-12A12,12,0,0,0,192,60ZM64,92a12,12,0,1,0,12,12A12,12,0,0,0,64,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,92ZM64,148a12,12,0,1,0,12,12A12,12,0,0,0,64,148Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,148Zm0,56a12,12,0,1,0,12,12A12,12,0,0,0,128,204Zm64-56a12,12,0,1,0,12,12A12,12,0,0,0,192,148Z"/></svg>`;
}
