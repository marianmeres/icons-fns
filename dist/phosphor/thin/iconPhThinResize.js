export const iconPhThinResize = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,116H48a4,4,0,0,0-4,4v88a4,4,0,0,0,4,4h88a4,4,0,0,0,4-4V120A4,4,0,0,0,136,116Zm-4,88H52V124h80Zm80-20v16a12,12,0,0,1-12,12H176a4,4,0,0,1,0-8h24a4,4,0,0,0,4-4V184a4,4,0,0,1,8,0Zm0-72v32a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0-56V72a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H184a4,4,0,0,1,0-8h16A12,12,0,0,1,212,56Zm-64-8a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,48ZM44,80V56A12,12,0,0,1,56,44H72a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4V80a4,4,0,0,1-8,0Z"/></svg>`;
}
