export const iconPhLightReplitLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,90H150V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V88a14,14,0,0,0,14,14h66v52H72a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V166h66a14,14,0,0,0,14-14V104A14,14,0,0,0,216,90ZM138,216a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2h66Zm0-126H72a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Zm80,62a2,2,0,0,1-2,2H150V102h66a2,2,0,0,1,2,2Z"/></svg>`;
}
