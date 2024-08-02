export const iconPhLightMartiniLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236.24,44.24A6,6,0,0,0,232,34H24a6,6,0,0,0-4.24,10.24L122,146.49V210H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V146.49ZM70.49,78h115L128,135.51Zm147-32-20,20h-139l-20-20Z"/></svg>`;
}
