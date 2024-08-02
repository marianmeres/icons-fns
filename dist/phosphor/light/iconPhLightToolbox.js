export const iconPhLightToolbox = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H32A14,14,0,0,0,18,80V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM32,78H224a2,2,0,0,1,2,2v34H190V104a6,6,0,0,0-12,0v10H78V104a6,6,0,0,0-12,0v10H30V80A2,2,0,0,1,32,78ZM224,194H32a2,2,0,0,1-2-2V126H66v10a6,6,0,0,0,12,0V126H178v10a6,6,0,0,0,12,0V126h36v66A2,2,0,0,1,224,194Z"/></svg>`;
}
