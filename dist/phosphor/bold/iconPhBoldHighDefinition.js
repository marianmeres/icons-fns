export const iconPhBoldHighDefinition = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,68H156a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h24a60,60,0,0,0,0-120Zm0,96H168V92h12a36,36,0,0,1,0,72Zm-76,12V140H56v36a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0v36h48V80a12,12,0,0,1,24,0v96a12,12,0,0,1-24,0ZM20,44A12,12,0,0,1,32,32H224a12,12,0,0,1,0,24H32A12,12,0,0,1,20,44ZM236,212a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24H224A12,12,0,0,1,236,212Z"/></svg>`;
}
