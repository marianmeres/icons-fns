export const iconPhBoldGarage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,188h-4V98.67A20,20,0,0,0,227.09,82l-88-58.66a19.94,19.94,0,0,0-22.18,0L28.91,82A20,20,0,0,0,20,98.67V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,100.81l84-56,84,56V188H196V120a12,12,0,0,0-12-12H72a12,12,0,0,0-12,12v68H44ZM172,132v16H140V132Zm-56,16H84V132h32ZM84,172h32v16H84Zm56,0h32v16H140Z"/></svg>`;
}
