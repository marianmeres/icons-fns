export const iconPhThinCalculator = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,60H80a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V64A4,4,0,0,0,176,60Zm-4,48H84V68h88Zm28-80H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM96,148a8,8,0,1,1-8-8A8,8,0,0,1,96,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,148ZM96,188a8,8,0,1,1-8-8A8,8,0,0,1,96,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,188Z"/></svg>`;
}
