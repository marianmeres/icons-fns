export const iconPhLightArrowBendUpRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,110H128a90.1,90.1,0,0,0-90,90,6,6,0,0,1-12,0A102.12,102.12,0,0,1,128,98h81.51L171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24Z"/></svg>`;
}
