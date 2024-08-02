export const iconPhThinTextUnderlineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,224a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H192A4,4,0,0,1,196,224Zm-68-28a60.07,60.07,0,0,0,60-60V56a4,4,0,0,0-8,0v80a52,52,0,0,1-104,0V56a4,4,0,0,0-8,0v80A60.07,60.07,0,0,0,128,196Z"/></svg>`;
}
