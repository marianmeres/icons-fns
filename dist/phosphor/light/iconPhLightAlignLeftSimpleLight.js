export const iconPhLightAlignLeftSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M38,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM238,96v64a14,14,0,0,1-14,14H72a14,14,0,0,1-14-14V96A14,14,0,0,1,72,82H224A14,14,0,0,1,238,96Zm-12,0a2,2,0,0,0-2-2H72a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z"/></svg>`;
}
