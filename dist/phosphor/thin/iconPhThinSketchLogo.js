export const iconPhThinSketchLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243,101.37l-56-64A4,4,0,0,0,184,36H72a4,4,0,0,0-3,1.37l-56,64a4,4,0,0,0,.09,5.36l112,120a4,4,0,0,0,5.84,0l112-120A4,4,0,0,0,243,101.37ZM77.29,108l39.07,97.66L25.2,108Zm92.8,0L128,213.23,85.91,108ZM88,100l40-53.33L168,100Zm90.71,8H230.8l-91.16,97.66Zm52.47-8H178L136,44h46.18ZM73.82,44H120L78,100H24.82Z"/></svg>`;
}
