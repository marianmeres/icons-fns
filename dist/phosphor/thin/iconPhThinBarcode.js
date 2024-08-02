export const iconPhThinBarcode = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,48V88a4,4,0,0,1-8,0V52H184a4,4,0,0,1,0-8h40A4,4,0,0,1,228,48ZM72,204H36V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H72a4,4,0,0,0,0-8Zm152-40a4,4,0,0,0-4,4v36H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,224,164ZM32,92a4,4,0,0,0,4-4V52H72a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4V88A4,4,0,0,0,32,92Zm48-8a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,80,84Zm100,4a4,4,0,0,0-8,0v80a4,4,0,0,0,8,0Zm-36-4a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,144,84Zm-32,0a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,112,84Z"/></svg>`;
}
