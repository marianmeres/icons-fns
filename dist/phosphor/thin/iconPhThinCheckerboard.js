export const iconPhThinCheckerboard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-14.34,88L132,62.34V44h18.34L212,105.66V124ZM132,73.66,182.34,124H132ZM212,48V94.34L161.66,44H208A4,4,0,0,1,212,48ZM48,44h76v80H44V48A4,4,0,0,1,48,44Zm57.66,168L44,150.34V132H62.34L124,193.66V212ZM124,182.34,73.66,132H124ZM44,208V161.66L94.34,212H48A4,4,0,0,1,44,208Zm164,4H132V132h80v76A4,4,0,0,1,208,212Z"/></svg>`;
}
