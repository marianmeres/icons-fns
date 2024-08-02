export const iconPhThinEscalatorDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M173.17,82.83a4,4,0,0,1,5.66-5.66L196,94.34V48a4,4,0,0,1,8,0V94.34l17.17-17.17a4,4,0,1,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0ZM236,160v40a12,12,0,0,1-12,12H168a4,4,0,0,1-2.94-1.29L70.25,108H32A12,12,0,0,1,20,96V56A12,12,0,0,1,32,44H88a4,4,0,0,1,2.94,1.29L185.75,148H224A12,12,0,0,1,236,160Zm-8,0a4,4,0,0,0-4-4H184a4,4,0,0,1-2.94-1.29L86.25,52H32a4,4,0,0,0-4,4V96a4,4,0,0,0,4,4H72a4,4,0,0,1,2.94,1.29L169.75,204H224a4,4,0,0,0,4-4Z"/></svg>`;
}
