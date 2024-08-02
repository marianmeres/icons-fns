export const iconPhThinVideoCameraThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V151.47l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM196,184a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4Zm48-15.47-40-26.67V114.14l40-26.67Z"/></svg>`;
}
