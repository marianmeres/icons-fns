export const iconPhThinUploadThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h48A12,12,0,0,1,236,136ZM82.83,74.83,124,33.66V128a4,4,0,0,0,8,0V33.66l41.17,41.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z"/></svg>`;
}
