export const iconPhThinStackSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M14,107.47l112,64a4,4,0,0,0,4,0l112-64a4,4,0,0,0,0-6.94l-112-64a4,4,0,0,0-4,0l-112,64a4,4,0,0,0,0,6.94ZM128,44.61,231.94,104,128,163.39,24.06,104ZM243.47,142a4,4,0,0,1-1.49,5.45l-112,64a4,4,0,0,1-4,0l-112-64a4,4,0,0,1,4-6.94l110,62.86,110-62.86A4,4,0,0,1,243.47,142Z"/></svg>`;
}
