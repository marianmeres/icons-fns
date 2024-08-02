export const iconPhThinFileTxtThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,112a4,4,0,0,0,8,0V88a4,4,0,0,0-1.17-2.83l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52ZM156,41.65,198.34,84H156Zm-4.75,112.67L132.92,180l18.33,25.67a4,4,0,1,1-6.5,4.65L128,186.88l-16.75,23.44a4,4,0,1,1-6.5-4.65L123.08,180l-18.33-25.68a4,4,0,1,1,6.5-4.65L128,173.12l16.75-23.45a4,4,0,1,1,6.5,4.65ZM88,152a4,4,0,0,1-4,4H68v52a4,4,0,0,1-8,0V156H44a4,4,0,0,1,0-8H84A4,4,0,0,1,88,152Zm128,0a4,4,0,0,1-4,4H196v52a4,4,0,0,1-8,0V156H172a4,4,0,0,1,0-8h40A4,4,0,0,1,216,152Z"/></svg>`;
}
