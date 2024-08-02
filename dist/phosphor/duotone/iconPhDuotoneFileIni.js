export const iconPhDuotoneFileIni = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,88H152V32Z" opacity="0.2"/><path d="M48,152v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm72-8a8,8,0,0,0-8,8v31L86.51,147.35A8,8,0,0,0,72,152v56a8,8,0,0,0,16,0V177l25.49,35.69A8,8,0,0,0,120,216a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,128,208V152A8,8,0,0,0,120,144Zm40,0a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V152A8,8,0,0,0,160,144Zm56-56V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z"/></svg>`;
}
