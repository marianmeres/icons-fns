export const iconPhFillCurrencyRubFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,104a24,24,0,0,1-24,24H112V80h32A24,24,0,0,1,168,104Zm64,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48-24a40,40,0,0,0-40-40H104a8,8,0,0,0-8,8v56H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16a8,8,0,0,0,16,0V176h40a8,8,0,0,0,0-16H112V144h32A40,40,0,0,0,184,104Z"/></svg>`;
}
