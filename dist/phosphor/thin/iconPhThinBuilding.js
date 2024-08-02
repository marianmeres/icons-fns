export const iconPhThinBuilding = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,228H204V28h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52V228H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM60,28H196V228H156V184a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v44H60Zm88,200H108V188h40ZM92,64a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,64ZM92,104a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H96A4,4,0,0,1,92,104Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,104ZM96,148a4,4,0,0,1,0-8h16a4,4,0,0,1,0,8Zm44-4a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,144Z"/></svg>`;
}
