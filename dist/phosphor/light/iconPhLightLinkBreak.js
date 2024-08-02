export const iconPhLightLinkBreak = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,56a34,34,0,0,0-48-.05L140.34,68.14a6,6,0,1,1-8.68-8.28l11.71-12.28.1-.11a46,46,0,0,1,65.06,65.06l-.11.1-12.28,11.71a6,6,0,1,1-8.28-8.68L200.09,104A34,34,0,0,0,200,56Zm-84.38,131.9L104,200.09A34,34,0,0,1,55.91,152l12.23-11.67a6,6,0,0,0-8.28-8.68L47.58,143.37l-.11.1a46,46,0,0,0,65.06,65.06l.1-.11,11.71-12.28a6,6,0,1,0-8.68-8.28ZM216,154H192a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM40,102H64a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm120,84a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V192A6,6,0,0,0,160,186ZM96,70a6,6,0,0,0,6-6V40a6,6,0,0,0-12,0V64A6,6,0,0,0,96,70Z"/></svg>`;
}
