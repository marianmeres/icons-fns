export const iconPhThinArrowLineUpLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,208a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208ZM72,148a4,4,0,0,0,4-4V57.66L181.17,162.83a4,4,0,0,0,5.66-5.66L81.66,52H168a4,4,0,0,0,0-8H72a4,4,0,0,0-4,4v96A4,4,0,0,0,72,148Z"/></svg>`;
}
