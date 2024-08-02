export const iconPhThinBarnThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,196H228V118.08l8.74,12.25A4,4,0,0,0,240,132a4,4,0,0,0,3.25-6.32l-40-56a3.77,3.77,0,0,0-1-1L134.66,22a12,12,0,0,0-13.37,0L53.73,68.71a3.77,3.77,0,0,0-1,1l-40,56a4,4,0,1,0,6.51,4.65L28,118.08V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,106.88l22.85-32,66.93-46.23a4,4,0,0,1,4.38,0l67,46.26,22.85,32V196H188V120a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v76H36Zm92,48.2L84.48,124h87Zm52-27.31v64.46L134.88,160ZM121.12,160,76,192.23V127.77Zm6.88,4.92L171.52,196h-87ZM108,88a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,88Z"/></svg>`;
}
