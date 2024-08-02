export const iconPhLightAirTrafficControlLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.47,72A14,14,0,0,0,216,66H134V30h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V66H40A14,14,0,0,0,26.84,84.78l26.19,72A14,14,0,0,0,66.18,166H98v66a6,6,0,0,0,12,0V166h36v66a6,6,0,0,0,12,0V166h31.82A14,14,0,0,0,203,156.78l26.19-72A14,14,0,0,0,227.47,72ZM109,154,95.19,78h65.62L147,154ZM64.3,152.68l-26.18-72a2,2,0,0,1,.24-1.83A1.94,1.94,0,0,1,40,78H83l13.82,76H66.18A2,2,0,0,1,64.3,152.68Zm153.58-72-26.18,72a2,2,0,0,1-1.88,1.32H159.19L173,78h43a1.94,1.94,0,0,1,1.64.85A2,2,0,0,1,217.88,80.68Z"/></svg>`;
}
