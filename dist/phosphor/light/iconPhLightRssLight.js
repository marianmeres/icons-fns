export const iconPhLightRssLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M105.5,150.5A69.54,69.54,0,0,1,126,200a6,6,0,0,1-12,0,58,58,0,0,0-58-58,6,6,0,0,1,0-12A69.54,69.54,0,0,1,105.5,150.5ZM56,82a6,6,0,0,0,0,12A106,106,0,0,1,162,200a6,6,0,0,0,12,0A118,118,0,0,0,56,82Zm117.38.62A164.92,164.92,0,0,0,56,34a6,6,0,0,0,0,12A153,153,0,0,1,164.89,91.11,153,153,0,0,1,210,200a6,6,0,0,0,12,0A164.92,164.92,0,0,0,173.38,82.62ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Z"/></svg>`;
}
