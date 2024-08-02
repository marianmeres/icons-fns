export const iconPhLightCubeFocus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM72,202H38V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12Zm152-40a6,6,0,0,0-6,6v34H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162ZM32,94a6,6,0,0,0,6-6V54H72a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6V88A6,6,0,0,0,32,94Zm155,71.21-56,32a6,6,0,0,1-6,0l-56-32A6,6,0,0,1,66,160V96a6,6,0,0,1,3-5.21l56-32a6,6,0,0,1,6,0l56,32A6,6,0,0,1,190,96v64A6,6,0,0,1,187,165.21ZM84.09,96,128,121.09,171.91,96,128,70.91ZM78,156.52l44,25.14V131.48L78,106.34Zm100,0V106.34l-44,25.14v50.18Z"/></svg>`;
}
