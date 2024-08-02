export const iconPhThinMoney = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,164a36,36,0,1,0-36-36A36,36,0,0,0,128,164Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,128,100ZM240,60H16a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H240a4,4,0,0,0,4-4V64A4,4,0,0,0,240,60ZM20,107.26A52.75,52.75,0,0,0,59.26,68H196.74A52.75,52.75,0,0,0,236,107.26v41.48A52.75,52.75,0,0,0,196.74,188H59.26A52.75,52.75,0,0,0,20,148.74ZM236,99a44.8,44.8,0,0,1-31-31h31ZM51,68A44.8,44.8,0,0,1,20,99V68ZM20,157a44.8,44.8,0,0,1,31,31H20Zm185,31a44.8,44.8,0,0,1,31-31v31Z"/></svg>`;
}
