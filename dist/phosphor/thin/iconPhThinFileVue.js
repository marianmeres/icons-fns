export const iconPhThinFileVue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M83.77,153.35l-20,56a4,4,0,0,1-7.54,0l-20-56a4,4,0,0,1,7.54-2.7L60,196.11l16.23-45.46a4,4,0,0,1,7.54,2.7ZM208,156a4,4,0,0,0,0-8H176a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h32a4,4,0,0,0,0-8H180V184h20a4,4,0,0,0,0-8H180V156Zm-64-8a4,4,0,0,0-4,4v38a14,14,0,0,1-28,0V152a4,4,0,0,0-8,0v38a22,22,0,0,0,44,0V152A4,4,0,0,0,144,148Zm68-60v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-13.66-4L156,41.65V84Z"/></svg>`;
}
