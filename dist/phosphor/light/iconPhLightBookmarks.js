export const iconPhLightBookmarks = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,26H96A14,14,0,0,0,82,40V58H64A14,14,0,0,0,50,72V224a6,6,0,0,0,9.49,4.88L112,191.37l52.52,37.51A6,6,0,0,0,174,224V180.8l22.51,16.08A6,6,0,0,0,206,192V40A14,14,0,0,0,192,26ZM162,212.34l-46.52-33.22a6,6,0,0,0-7,0L62,212.34V72a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Zm32-32-20-14.28V72a14,14,0,0,0-14-14H94V40a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Z"/></svg>`;
}
