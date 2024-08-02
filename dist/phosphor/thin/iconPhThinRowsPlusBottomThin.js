export const iconPhThinRowsPlusBottomThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,116H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V128A12,12,0,0,0,208,116Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V128a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,44H48A12,12,0,0,0,36,56V80A12,12,0,0,0,48,92H208a12,12,0,0,0,12-12V56A12,12,0,0,0,208,44Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM156,216a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V220H104a4,4,0,0,1,0-8h20V192a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,216Z"/></svg>`;
}
