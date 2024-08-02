export const iconPhThinStairsThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28ZM152,140h52v32H108V140Zm4-8V100h48v32ZM56,36H200a4,4,0,0,1,4,4V92H152a4,4,0,0,0-4,4v36H104a4,4,0,0,0-4,4v36H52V40A4,4,0,0,1,56,36ZM200,220H56a4,4,0,0,1-4-4V180H204v36A4,4,0,0,1,200,220Z"/></svg>`;
}
