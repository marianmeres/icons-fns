export const iconPhDuotoneCylinder = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,60c0,19.88-28.65,36-64,36S64,79.88,64,60s28.65-36,64-36S192,40.12,192,60Z" opacity="0.2"/><path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z"/></svg>`;
}
