export const iconPhThinFlipVerticalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56,116H216a12,12,0,0,0,4.6-23.09l-160-64A12,12,0,0,0,44,40v64A12,12,0,0,0,56,116ZM52,40a4,4,0,0,1,4-4,4,4,0,0,1,1.57.32l.07,0,159.91,64A4,4,0,0,1,216,108H56a4,4,0,0,1-4-4ZM227.74,149.61A11.75,11.75,0,0,0,216,140H56a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12,11.8,11.8,0,0,0,4.59-.93l160-64,.08,0A11.75,11.75,0,0,0,227.74,149.61Zm-10.17,6.06-160,64A4,4,0,0,1,52,216V152a4,4,0,0,1,4-4H216a4,4,0,0,1,1.59,7.67Z"/></svg>`;
}
