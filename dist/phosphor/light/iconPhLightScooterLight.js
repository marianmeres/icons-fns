export const iconPhLightScooterLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,138a34.32,34.32,0,0,0-4.89.36L173.69,38.1A6,6,0,0,0,168,34H136a6,6,0,0,0,0,12h27.68l18.24,54.73L125.16,170H77.94a34,34,0,1,0-1.44,12H128a6,6,0,0,0,4.64-2.2l53.76-65.62,9.33,28A34,34,0,1,0,212,138ZM44,194a22,22,0,1,1,22-22A22,22,0,0,1,44,194Zm168,0a22,22,0,1,1,22-22A22,22,0,0,1,212,194Z"/></svg>`;
}
