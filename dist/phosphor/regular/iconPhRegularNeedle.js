export const iconPhRegularNeedle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M189.66,66.34a8,8,0,0,1,0,11.32l-16,16a8,8,0,0,1-11.32-11.32l16-16A8,8,0,0,1,189.66,66.34ZM224,72a39.71,39.71,0,0,1-11.72,28.28l-24,24a8,8,0,0,1-4.3,2.23c-51.49,8.84-137.46,94.28-138.32,95.15h0a8,8,0,0,1-11.31-11.32h0C36,208.73,120.69,123.28,129.49,72a8,8,0,0,1,2.23-4.3l24-24A40,40,0,0,1,224,72Zm-16,0a24,24,0,0,0-41-17L144.77,77.29c-4.41,21.15-18.9,46.19-35.49,69.43,23.24-16.59,48.28-31.08,69.43-35.49L201,89A23.85,23.85,0,0,0,208,72Z"/></svg>`;
}
