export const iconPhThinRss = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M104.08,151.92A67.52,67.52,0,0,1,124,200a4,4,0,0,1-8,0,60,60,0,0,0-60-60,4,4,0,0,1,0-8A67.52,67.52,0,0,1,104.08,151.92ZM56,84a4,4,0,0,0,0,8A108,108,0,0,1,164,200a4,4,0,0,0,8,0A116,116,0,0,0,56,84Zm116,0A162.92,162.92,0,0,0,56,36a4,4,0,0,0,0,8A155,155,0,0,1,166.31,89.69,155,155,0,0,1,212,200a4,4,0,0,0,8,0A162.92,162.92,0,0,0,172,84ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Z"/></svg>`;
}
