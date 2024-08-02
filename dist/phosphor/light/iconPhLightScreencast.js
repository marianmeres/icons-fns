export const iconPhLightScreencast = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,56V200a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V96a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56ZM32,186a6,6,0,0,0,0,12,10,10,0,0,1,10,10,6,6,0,0,0,12,0A22,22,0,0,0,32,186Zm0-32a6,6,0,0,0,0,12,42,42,0,0,1,42,42,6,6,0,0,0,12,0A54.06,54.06,0,0,0,32,154Zm0-32a6,6,0,0,0,0,12,74.09,74.09,0,0,1,74,74,6,6,0,0,0,12,0A86.1,86.1,0,0,0,32,122Z"/></svg>`;
}
