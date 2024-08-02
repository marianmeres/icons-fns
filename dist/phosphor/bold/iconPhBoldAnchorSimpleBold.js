export const iconPhBoldAnchorSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,108H200a12,12,0,0,0,0,24h11.15A84.21,84.21,0,0,1,140,203.14V97.94a36,36,0,1,0-24,0v105.2A84.21,84.21,0,0,1,44.85,132H56a12,12,0,0,0,0-24H32a12,12,0,0,0-12,12,108,108,0,0,0,216,0A12,12,0,0,0,224,108ZM128,52a12,12,0,1,1-12,12A12,12,0,0,1,128,52Z"/></svg>`;
}
