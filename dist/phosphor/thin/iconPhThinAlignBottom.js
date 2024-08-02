export const iconPhThinAlignBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-80-40V80a12,12,0,0,1,12-12h40a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H152A12,12,0,0,1,140,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4Zm-96,0V40A12,12,0,0,1,64,28h40a12,12,0,0,1,12,12V176a12,12,0,0,1-12,12H64A12,12,0,0,1,52,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4Z"/></svg>`;
}
