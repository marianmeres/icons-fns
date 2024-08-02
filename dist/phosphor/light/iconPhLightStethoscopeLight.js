export const iconPhLightStethoscopeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M218,160a10,10,0,1,1-10-10A10,10,0,0,1,218,160Zm-4.35,37.58A46.05,46.05,0,0,1,168,238H144a46.06,46.06,0,0,1-46-46V149.71A62,62,0,0,1,42,88V40a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H54V88a50,50,0,0,0,50,50h.67c27.2-.36,49.33-23.16,49.33-50.83V46H136a6,6,0,0,1,0-12h24a6,6,0,0,1,6,6V87.17c0,32.43-24.68,59.44-56,62.52V192a34,34,0,0,0,34,34h24a34.05,34.05,0,0,0,33.56-28.56,38,38,0,1,1,12.09.14ZM234,160a26,26,0,1,0-26,26A26,26,0,0,0,234,160Z"/></svg>`;
}
