export const iconPhBoldGraphicsCardBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,44H16A12,12,0,0,0,4,56V208a12,12,0,0,0,24,0V196H44v12a12,12,0,0,0,24,0V196H84v12a12,12,0,0,0,24,0V196h16v12a12,12,0,0,0,24,0V196h84a20,20,0,0,0,20-20V64A20,20,0,0,0,232,44Zm-4,128H28V68H228Zm-52-12a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,176,104ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,80,104Z"/></svg>`;
}
