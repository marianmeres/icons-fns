export const iconPhDuotoneMagnetStraightDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M104,56V96H48V56a8,8,0,0,1,8-8H96A8,8,0,0,1,104,56Zm96-8H160a8,8,0,0,0-8,8V96h56V56A8,8,0,0,0,200,48Z" opacity="0.2"/><path d="M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V88H160V56ZM96,56V88H56V56Zm32.55,160A72,72,0,0,1,56,144V104H96v40a32,32,0,0,0,64,0V104h40v39C200,183,168,215.71,128.55,216Z"/></svg>`;
}