export const iconPhThinNotSubsetOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.69,37a4,4,0,0,0-5.65.27L199,44H128A84,84,0,0,0,68.63,187.36L45,213.31A4,4,0,1,0,51,218.69l23.58-25.94A83.64,83.64,0,0,0,128,212h72a4,4,0,0,0,0-8H128a75.66,75.66,0,0,1-48.07-17.18L211,42.69A4,4,0,0,0,210.69,37ZM52,128a76.08,76.08,0,0,1,76-76h63.69L74,181.43A75.75,75.75,0,0,1,52,128Z"/></svg>`;
}
