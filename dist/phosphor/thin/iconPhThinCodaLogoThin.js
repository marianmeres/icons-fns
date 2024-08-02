export const iconPhThinCodaLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,84a43.82,43.82,0,0,1,23.69,6.73A8,8,0,0,0,212,84V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V172a8,8,0,0,0-12.28-6.75c-8,5.14-14.82,7.09-23.56,6.74H176a44,44,0,0,1,0-88Zm-52,44a52.05,52.05,0,0,0,51.92,52c10.35.4,18.76-2,28.08-8v36a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4V84a52.24,52.24,0,0,0-80,44Z"/></svg>`;
}
