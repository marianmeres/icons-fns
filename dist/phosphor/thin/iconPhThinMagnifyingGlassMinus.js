export const iconPhThinMagnifyingGlassMinus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,112a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h64A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z"/></svg>`;
}
