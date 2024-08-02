export const iconPhLightColumnsPlusRightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V48A14,14,0,0,0,80,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2ZM152,34H128a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,152,34Zm2,174a2,2,0,0,1-2,2H128a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2Zm92-80a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V134H192a6,6,0,0,1,0-12h18V104a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,128Z"/></svg>`;
}
