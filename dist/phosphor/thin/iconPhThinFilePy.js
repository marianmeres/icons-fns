export const iconPhThinFilePy = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H168a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM64,148H48a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196H64a24,24,0,0,0,0-48Zm0,40H52V156H64a16,16,0,0,1,0,32Zm87.39-33.88-19.39,31V208a4,4,0,0,1-8,0V185.15l-19.39-31a4,4,0,0,1,6.78-4.24L128,176.45l16.61-26.57a4,4,0,1,1,6.78,4.24Z"/></svg>`;
}
