export const iconPhLightPopsicle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,10A70.08,70.08,0,0,0,58,80v96a14,14,0,0,0,14,14h34v42a22,22,0,0,0,44,0V190h34a14,14,0,0,0,14-14V80A70.08,70.08,0,0,0,128,10Zm10,222a10,10,0,0,1-20,0V190h20Zm48-56a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V80a58,58,0,0,1,116,0ZM118,72v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm32,0v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z"/></svg>`;
}
