export const iconPhLightUserSquareLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM65.77,210a66.43,66.43,0,0,1,20.77-29.36,66,66,0,0,1,82.92,0A66.43,66.43,0,0,1,190.23,210ZM210,208a2,2,0,0,1-2,2h-5.17a77.85,77.85,0,0,0-49.38-51.71,46,46,0,1,0-50.9,0A77.85,77.85,0,0,0,53.17,210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></svg>`;
}
