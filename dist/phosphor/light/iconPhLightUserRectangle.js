export const iconPhLightUserRectangle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM69.21,202a66,66,0,0,1,117.58,0ZM218,200a2,2,0,0,1-2,2H200a78.18,78.18,0,0,0-46.55-43.71,46,46,0,1,0-50.9,0A78.18,78.18,0,0,0,56,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z"/></svg>`;
}
