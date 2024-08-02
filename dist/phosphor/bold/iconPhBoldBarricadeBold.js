export const iconPhBoldBarricadeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,60H32A20,20,0,0,0,12,80v72a20,20,0,0,0,20,20H52v28a12,12,0,0,0,24,0V172H180v28a12,12,0,0,0,24,0V172h20a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,59L185,84h35Zm-43,29L113,84H151l64,64Zm-72,0L41,84H79l64,64ZM36,113l35,35H36Z"/></svg>`;
}
