export const iconPhLightAlignBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm-84-40V80a14,14,0,0,1,14-14h40a14,14,0,0,1,14,14v96a14,14,0,0,1-14,14H152A14,14,0,0,1,138,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2ZM50,176V40A14,14,0,0,1,64,26h40a14,14,0,0,1,14,14V176a14,14,0,0,1-14,14H64A14,14,0,0,1,50,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2Z"/></svg>`;
}
