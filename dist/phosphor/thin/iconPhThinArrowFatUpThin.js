export const iconPhThinArrowFatUpThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.83,117.17l-96-96a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,32,124H76v84a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V124h44a4,4,0,0,0,2.83-6.83ZM176,116a4,4,0,0,0-4,4v88a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V120a4,4,0,0,0-4-4H41.66L128,29.66,214.34,116Z"/></svg>`;
}
