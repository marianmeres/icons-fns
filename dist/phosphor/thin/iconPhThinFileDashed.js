export const iconPhThinFileDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,224a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V184a4,4,0,0,1,8,0v32a4,4,0,0,0,4,4H72A4,4,0,0,1,76,224ZM212,88v48a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H120a4,4,0,0,1,0-8h32a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.66ZM80,28H56A12,12,0,0,0,44,40V64a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8ZM208,172a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V176A4,4,0,0,0,208,172ZM48,148a4,4,0,0,0,4-4V104a4,4,0,0,0-8,0v40A4,4,0,0,0,48,148Zm104,72H112a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Z"/></svg>`;
}
