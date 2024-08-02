export const iconPhThinFileZipThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,148H168a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196h12a24,24,0,0,0,0-48Zm0,40H172V156h12a16,16,0,0,1,0,32Zm-52-36v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm-40.53,2L62.89,204H88a4,4,0,0,1,0,8H56a4,4,0,0,1-3.47-6l28.58-50H56a4,4,0,0,1,0-8H88a4,4,0,0,1,3.47,6ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,84V41.65L198.34,84Z"/></svg>`;
}
