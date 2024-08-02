export const iconPhThinCursorText = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,208a4,4,0,0,1-4,4H160a36,36,0,0,1-32-19.54A36,36,0,0,1,96,212H80a4,4,0,0,1,0-8H96a28,28,0,0,0,28-28V132H104a4,4,0,0,1,0-8h20V80A28,28,0,0,0,96,52H80a4,4,0,0,1,0-8H96a36,36,0,0,1,32,19.54A36,36,0,0,1,160,44h16a4,4,0,0,1,0,8H160a28,28,0,0,0-28,28v44h20a4,4,0,0,1,0,8H132v44a28,28,0,0,0,28,28h16A4,4,0,0,1,180,208Z"/></svg>`;
}
