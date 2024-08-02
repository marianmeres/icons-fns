export const iconPhLightSticker = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,34H88A54.06,54.06,0,0,0,34,88v80a54.06,54.06,0,0,0,54,54h48a5.86,5.86,0,0,0,1.9-.31c25.84-8.61,75.18-57.95,83.79-83.79A5.86,5.86,0,0,0,222,136V88A54.06,54.06,0,0,0,168,34ZM46,168V88A42,42,0,0,1,88,46h80a42,42,0,0,1,42,42v42H184a54.06,54.06,0,0,0-54,54v26H88A42,42,0,0,1,46,168Zm96,38.67V184a42,42,0,0,1,42-42h22.67C194.84,163.1,163.1,194.84,142,206.67Z"/></svg>`;
}
