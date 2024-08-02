export const iconPhThinEscalatorUpThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,44H168a4,4,0,0,0-2.94,1.29L70.25,148H32a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H88a4,4,0,0,0,2.94-1.29L185.75,108H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44Zm4,52a4,4,0,0,1-4,4H184a4,4,0,0,0-2.94,1.29L86.25,204H32a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H72a4,4,0,0,0,2.94-1.29L169.75,52H224a4,4,0,0,1,4,4Zm-1.17,77.17a4,4,0,0,1-5.66,5.66L204,161.66V208a4,4,0,0,1-8,0V161.66l-17.17,17.17a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0Z"/></svg>`;
}
