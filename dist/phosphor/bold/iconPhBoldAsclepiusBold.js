export const iconPhBoldAsclepiusBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M91.82,60H92a12,12,0,0,0,0-24H60A44.05,44.05,0,0,0,16,80v8a12,12,0,0,0,12,12H48A44.06,44.06,0,0,0,91.82,60ZM48,76H40.4A20,20,0,0,1,60,60h7.6A20,20,0,0,1,48,76Zm176,3v1a44.05,44.05,0,0,1-44,44H140v72h8a12,12,0,0,0,12-12,11.87,11.87,0,0,0-4-8.95,12,12,0,1,1,16-17.88A36,36,0,0,1,148,220h-8v12a12,12,0,0,1-24,0V220H92a12,12,0,0,1,0-24h24V124H100a12,12,0,0,0-4,23.32A12,12,0,1,1,88,170,36,36,0,0,1,100,100h16V24a12,12,0,0,1,24,0v76h40a20,20,0,0,0,20-20V79a19.05,19.05,0,0,0-19-19H164a12,12,0,0,1,0-24h17a43.05,43.05,0,0,1,43,43Z"/></svg>`;
}
