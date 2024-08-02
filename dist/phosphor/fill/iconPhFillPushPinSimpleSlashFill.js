export const iconPhFillPushPinSimpleSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M79.25,38.69a4,4,0,0,1,3-6.69H192a8,8,0,0,1,8,8.53A8.17,8.17,0,0,1,191.73,48h-6.19L206.7,167.91a4,4,0,0,1-6.9,3.39ZM213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L66.24,72,49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h32.1l34,37.38a8,8,0,1,0,11.84-10.76Z"/></svg>`;
}
