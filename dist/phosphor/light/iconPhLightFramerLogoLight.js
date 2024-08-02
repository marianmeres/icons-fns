export const iconPhLightFramerLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M206,104V40a6,6,0,0,0-6-6H56a6,6,0,0,0-4,10.48L112.22,98H56a6,6,0,0,0-6,6v64a6,6,0,0,0,1.76,4.24l72,72A6,6,0,0,0,134,240V174h66a6,6,0,0,0,4-10.48L143.78,110H200A6,6,0,0,0,206,104Zm-21.78,58H128a6,6,0,0,0-6,6v57.51l-60-60V110h63.72ZM194,98H130.28L71.78,46H194Z"/></svg>`;
}
