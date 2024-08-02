export const iconPhLightRowsPlusBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,114H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V128A14,14,0,0,0,208,114Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V128a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,42H48A14,14,0,0,0,34,56V80A14,14,0,0,0,48,94H208a14,14,0,0,0,14-14V56A14,14,0,0,0,208,42Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM158,216a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V222H104a6,6,0,0,1,0-12h18V192a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,216Z"/></svg>`;
}
