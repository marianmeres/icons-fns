export const iconPhLightAvocado = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,114a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,114Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,194Zm81.1-62.68L179.3,47.11A54,54,0,0,0,77.08,46h0L47.56,129.52a86,86,0,1,0,161.54,1.8ZM128,234A74.05,74.05,0,0,1,58.8,133.72c0-.05,0-.09.05-.13L88.39,50h0a42,42,0,0,1,79.53.92s0,.08.05.13l29.82,84.28A74.06,74.06,0,0,1,128,234Z"/></svg>`;
}
