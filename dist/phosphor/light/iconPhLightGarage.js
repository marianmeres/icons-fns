export const iconPhLightGarage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,194H230V98.67A14,14,0,0,0,223.77,87l-88-58.66a14,14,0,0,0-15.54,0L32.23,87A14,14,0,0,0,26,98.67V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,98.67A2,2,0,0,1,38.89,97l88-58.67a2,2,0,0,1,2.22,0l88,58.67a2,2,0,0,1,.89,1.66V194H190V136a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v58H38ZM178,142v20H134V142Zm-56,20H78V142h44ZM78,174h44v20H78Zm56,0h44v20H134Z"/></svg>`;
}
