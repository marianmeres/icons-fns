export const iconPhThinTextIndentThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,128a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM112,68H216a4,4,0,0,0,0-8H112a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM37.17,138.83a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66l-40-40a4,4,0,0,0-5.66,5.66L74.34,96,37.17,133.17A4,4,0,0,0,37.17,138.83Z"/></svg>`;
}
