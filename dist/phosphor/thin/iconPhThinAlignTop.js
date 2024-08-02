export const iconPhThinAlignTop = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40ZM204,80v96a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V80a12,12,0,0,1,12-12h40A12,12,0,0,1,204,80Zm-8,0a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4Zm-80,0V216a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V80A12,12,0,0,1,64,68h40A12,12,0,0,1,116,80Zm-8,0a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4Z"/></svg>`;
}
