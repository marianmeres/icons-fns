export const iconPhThinNotMemberOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.69,37a4,4,0,0,0-5.65.27L199,44H128A84,84,0,0,0,68.63,187.36L45,213.31A4,4,0,1,0,51,218.69l23.58-25.94A83.64,83.64,0,0,0,128,212h72a4,4,0,0,0,0-8H128a75.66,75.66,0,0,1-48.07-17.18L129.77,132H200a4,4,0,0,0,0-8H137L211,42.69A4,4,0,0,0,210.69,37ZM74,181.43A75.7,75.7,0,0,1,52.11,132H119ZM52.11,124A76.09,76.09,0,0,1,128,52h63.69l-65.46,72Z"/></svg>`;
}
