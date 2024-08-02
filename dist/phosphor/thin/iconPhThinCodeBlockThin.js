export const iconPhThinCodeBlockThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M61.17,98.83l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L37.66,64,66.83,93.17a4,4,0,0,1-5.66,5.66Zm40,0a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0,0-5.66l-32-32a4,4,0,0,0-5.66,5.66L130.34,64,101.17,93.17A4,4,0,0,0,101.17,98.83ZM200,44H176a4,4,0,0,0,0,8h24a4,4,0,0,1,4,4V200a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V136a4,4,0,0,0-8,0v64a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Z"/></svg>`;
}
