export const iconPhThinAlignRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0ZM188,64v40a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V64A12,12,0,0,1,80,52h96A12,12,0,0,1,188,64Zm-8,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4Zm8,88v40a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12H176A12,12,0,0,1,188,152Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H176a4,4,0,0,0,4-4Z"/></svg>`;
}
