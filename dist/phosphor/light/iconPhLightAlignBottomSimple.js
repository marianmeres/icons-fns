export const iconPhLightAlignBottomSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M206,232a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,232ZM82,192V40A14,14,0,0,1,96,26h64a14,14,0,0,1,14,14V192a14,14,0,0,1-14,14H96A14,14,0,0,1,82,192Zm12,0a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2Z"/></svg>`;
}
