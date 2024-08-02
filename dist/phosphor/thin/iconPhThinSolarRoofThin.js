export const iconPhThinSolarRoofThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.58,126.21l-40-80A4,4,0,0,0,200,44H56a4,4,0,0,0-3.58,2.21l-40,80A4,4,0,0,0,12,128v56a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V128A4,4,0,0,0,243.58,126.21ZM98.47,124l-16-32h39.06l16,32Zm3.06-72,16,32H78.47l-16-32Zm48,0,16,32H126.47l-16-32Zm-3.06,72-16-32h39.06l16,32Zm48,0-16-32h39.06l16,32Zm19.06-40H174.47l-16-32h39.06ZM20,184V128.94l36-72,36,72V188H24A4,4,0,0,1,20,184Zm212,4H100V132H236v52A4,4,0,0,1,232,188Z"/></svg>`;
}
