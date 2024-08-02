export const iconPhThinFileIniThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,152v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm76-4a4,4,0,0,0-4,4v43.52L83.25,149.68A4,4,0,0,0,76,152v56a4,4,0,0,0,8,0V164.48l32.75,45.84A4,4,0,0,0,124,208V152A4,4,0,0,0,120,148Zm40,0a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V152A4,4,0,0,0,160,148Zm52-60V224a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Z"/></svg>`;
}
