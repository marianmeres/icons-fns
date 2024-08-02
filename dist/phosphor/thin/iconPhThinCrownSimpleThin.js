export const iconPhThinCrownSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M229.18,77.21A11.89,11.89,0,0,0,215,80.08l-37.81,40.76L138.9,35a12,12,0,0,0-21.82.05L78.81,120.84,41,80.08a12,12,0,0,0-20.81,10l0,.15,22.69,103.9A12,12,0,0,0,54.71,204H201.29a12,12,0,0,0,11.8-9.83l22.69-103.9,0-.15A11.89,11.89,0,0,0,229.18,77.21Zm-1.24,11.45L205.26,192.54l0,.16a4,4,0,0,1-3.94,3.3H54.71a4,4,0,0,1-3.94-3.3l0-.16L28.06,88.66a4,4,0,0,1,7-3.26.3.3,0,0,0,.08.08l42,45.24a4,4,0,0,0,6.59-1.09l40.72-91.31a4,4,0,0,1,7.24,0l40.74,91.35a4,4,0,0,0,6.59,1.09l42-45.24a.3.3,0,0,0,.08-.08,4,4,0,0,1,7,3.26Z"/></svg>`;
}
