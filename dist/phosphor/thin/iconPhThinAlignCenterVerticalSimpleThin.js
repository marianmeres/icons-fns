export const iconPhThinAlignCenterVerticalSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,124H172V48a12,12,0,0,0-12-12H96A12,12,0,0,0,84,48v76H48a4,4,0,0,0,0,8H84v76a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V132h36a4,4,0,0,0,0-8Zm-44,84a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Z"/></svg>`;
}
