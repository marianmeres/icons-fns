export const iconPhFillCylinder = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,208c-29.83,0-56-13.08-56-28V77.43C82.92,88.5,103.9,96,128,96s45.08-7.5,56-18.57V196C184,210.92,157.83,224,128,224Z"/></svg>`;
}
