export const iconPhThinScreencastThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,56V200a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V96a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56ZM32,188a4,4,0,0,0,0,8,12,12,0,0,1,12,12,4,4,0,0,0,8,0A20,20,0,0,0,32,188Zm0-32a4,4,0,0,0,0,8,44.05,44.05,0,0,1,44,44,4,4,0,0,0,8,0A52.06,52.06,0,0,0,32,156Zm0-32a4,4,0,0,0,0,8,76.08,76.08,0,0,1,76,76,4,4,0,0,0,8,0A84.09,84.09,0,0,0,32,124Z"/></svg>`;
}
