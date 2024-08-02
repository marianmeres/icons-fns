export const iconPhThinBeerBottleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.83,45.17l-32-32a4,4,0,0,0-5.66,5.66l4.74,4.74L150.33,68.26l-39.11,7.82a4,4,0,0,0-2,1.09L25.86,160.49a20,20,0,0,0,0,28.28l41.37,41.37a20,20,0,0,0,28.28,0l83.32-83.31a4,4,0,0,0,1.09-2.05l7.82-39.11,44.69-59.58,4.74,4.74a4,4,0,1,0,5.66-5.66Zm-153,179.31a12,12,0,0,1-17,0L31.51,183.11a12,12,0,0,1,0-17L40,157.66,98.34,216ZM104,210.34,45.66,152,96,101.66,154.34,160ZM180.8,101.6a3.89,3.89,0,0,0-.72,1.62L172.32,142,160,154.34,101.66,96,114,83.68l38.81-7.76a3.89,3.89,0,0,0,1.62-.72l61.22-45.92,11.1,11.1Z"/></svg>`;
}
