export const iconPhThinSortDescendingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,128a4,4,0,0,1,4-4h72a4,4,0,0,1,0,8H48A4,4,0,0,1,44,128Zm4-60h56a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8ZM184,188H48a4,4,0,0,0,0,8H184a4,4,0,0,0,0-8ZM226.83,85.17l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66L180,57.66V144a4,4,0,0,0,8,0V57.66l33.17,33.17a4,4,0,1,0,5.66-5.66Z"/></svg>`;
}
