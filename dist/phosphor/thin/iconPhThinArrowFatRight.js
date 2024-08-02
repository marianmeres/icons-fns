export const iconPhThinArrowFatRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H48A12,12,0,0,0,36,88v80a12,12,0,0,0,12,12h84v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H48a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h88a4,4,0,0,0,4-4V41.66L226.34,128Z"/></svg>`;
}
