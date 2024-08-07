export const iconPhLightComputerTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M166,72a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,72Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-58V216a14,14,0,0,1-14,14H64a14,14,0,0,1-14-14V40A14,14,0,0,1,64,26H192A14,14,0,0,1,206,40Zm-12,0a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2ZM128,170a10,10,0,1,0,10,10A10,10,0,0,0,128,170Z"/></svg>`;
}
