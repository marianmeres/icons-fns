export const iconPhThinGasCan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H123.31a12,12,0,0,0-8.48,3.51L101.66,44.69,88.49,31.51a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17L60.69,85.66,47.52,98.83A11.9,11.9,0,0,0,44,107.31V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28ZM53.17,66.83a4,4,0,0,1,0-5.66l24-24a4,4,0,0,1,5.66,0L96,50.34,66.34,80ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V107.31a4,4,0,0,1,1.17-2.82l16-16h0l35.31-35.31h0l16-16A4,4,0,0,1,123.31,36H200a4,4,0,0,1,4,4ZM180,64a4,4,0,0,1-4,4H136a4,4,0,0,1,0-8h40A4,4,0,0,1,180,64Zm-1.6,59.2L134.67,156l43.73,32.8a4,4,0,0,1-4.8,6.4L128,161,82.4,195.2a4,4,0,0,1-4.8-6.4L121.33,156,77.6,123.2a4,4,0,0,1,4.8-6.4L128,151l45.6-34.2a4,4,0,1,1,4.8,6.4Z"/></svg>`;
}
