export const iconPhLightSelectionBackground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H160a14,14,0,0,0,14-14V96A14,14,0,0,0,160,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H160a2,2,0,0,1,2,2ZM138,40a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,40Zm84,8v8a6,6,0,0,1-12,0V48a2,2,0,0,0-2-2h-8a6,6,0,0,1,0-12h8A14,14,0,0,1,222,48Zm0,48v16a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm0,56v8a14,14,0,0,1-14,14h-8a6,6,0,0,1,0-12h8a2,2,0,0,0,2-2v-8a6,6,0,0,1,12,0ZM82,56V48A14,14,0,0,1,96,34h8a6,6,0,0,1,0,12H96a2,2,0,0,0-2,2v8a6,6,0,0,1-12,0Z"/></svg>`;
}
