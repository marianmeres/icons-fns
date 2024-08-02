export const iconPhLightPark = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,194H198V166h26a6,6,0,0,0,5.82-7.46l-32-128a6,6,0,0,0-11.64,0l-32,128A6,6,0,0,0,160,166h26v28H118V174h10a6,6,0,0,0,0-12H118V142h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50v20H40a6,6,0,0,0,0,12H50v20H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM192,56.74,216.32,154H167.68ZM62,142h44v20H62Zm0,32h44v20H62Zm54-80A26,26,0,1,0,90,68,26,26,0,0,0,116,94Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,116,54Z"/></svg>`;
}
