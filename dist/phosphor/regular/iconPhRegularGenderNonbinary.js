export const iconPhRegularGenderNonbinary = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,96.46V62.13l27.88,16.73a8,8,0,1,0,8.24-13.72L143.55,48l28.57-17.14a8,8,0,0,0-8.24-13.72L128,38.67,92.12,17.14a8,8,0,0,0-8.24,13.72L112.45,48,83.88,65.14a8,8,0,0,0,8.24,13.72L120,62.13V96.46a72,72,0,1,0,16,0ZM128,224a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,224Z"/></svg>`;
}
