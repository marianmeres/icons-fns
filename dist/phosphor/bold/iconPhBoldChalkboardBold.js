export const iconPhBoldChalkboardBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,188h-4V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,60H212V188H196V160a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v28H84V100h88v20a12,12,0,0,0,24,0V88a12,12,0,0,0-12-12H72A12,12,0,0,0,60,88V188H44ZM172,188H132V172h40Z"/></svg>`;
}
