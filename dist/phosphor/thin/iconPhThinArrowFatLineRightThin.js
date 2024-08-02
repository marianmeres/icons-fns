export const iconPhThinArrowFatLineRightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H72a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h60v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H76V84h60a4,4,0,0,0,4-4V41.66L226.34,128ZM44,80v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z"/></svg>`;
}
