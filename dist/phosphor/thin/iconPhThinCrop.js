export const iconPhThinCrop = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,192a4,4,0,0,1-4,4H196v36a4,4,0,0,1-8,0V196H64a4,4,0,0,1-4-4V68H24a4,4,0,0,1,0-8H60V24a4,4,0,0,1,8,0V188H232A4,4,0,0,1,236,192ZM96,68h92v92a4,4,0,0,0,8,0V64a4,4,0,0,0-4-4H96a4,4,0,0,0,0,8Z"/></svg>`;
}
