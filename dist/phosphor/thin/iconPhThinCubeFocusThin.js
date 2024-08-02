export const iconPhThinCubeFocusThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,48V88a4,4,0,0,1-8,0V52H184a4,4,0,0,1,0-8h40A4,4,0,0,1,228,48ZM72,204H36V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H72a4,4,0,0,0,0-8Zm152-40a4,4,0,0,0-4,4v36H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,224,164ZM32,92a4,4,0,0,0,4-4V52H72a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4V88A4,4,0,0,0,32,92Zm154,71.47-56,32a4,4,0,0,1-4,0l-56-32A4,4,0,0,1,68,160V96a4,4,0,0,1,2-3.47l56-32a4,4,0,0,1,4,0l56,32A4,4,0,0,1,188,96v64A4,4,0,0,1,186,163.47ZM80.06,96,128,123.39,175.94,96,128,68.61ZM76,157.68l48,27.43V130.32L76,102.89Zm104,0V102.89l-48,27.43v54.79Z"/></svg>`;
}
