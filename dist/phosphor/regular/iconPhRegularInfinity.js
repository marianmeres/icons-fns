export const iconPhRegularInfinity = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"/></svg>`;
}
